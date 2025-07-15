import socket
import ipaddress
from concurrent.futures import ThreadPoolExecutor

def scan_host(ip, port=80, timeout=0.5):
    """
    Tries to connect to the given IP and port.
    Returns the IP if the host is reachable, else None.
    """
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(timeout)
            s.connect((str(ip), port))
            return str(ip)
    except (socket.timeout, ConnectionRefusedError, OSError):
        return None

def scan_network(network_cidr, port=80, max_workers=100):
    """
    Scans all hosts in the subnet for an open port.
    Prints out responsive hosts.
    """
    net = ipaddress.ip_network(network_cidr, strict=False)
    print(f"Scanning network: {network_cidr} on port {port}")

    live_hosts = []

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [executor.submit(scan_host, ip, port) for ip in net.hosts()]
        for future in futures:
            result = future.result()
            if result:
                print(f"[+] Host up: {result}")
                live_hosts.append(result)

    print(f"\nScan complete. {len(live_hosts)} host(s) found up.")
    return live_hosts

if __name__ == "__main__":
    # Example usage
    subnet = "192.168.1.0/24"
    port = 80
    scan_network(subnet, port)
