# Network Scanner

A simple Python-based network scanner that scans a given IPv4 network for hosts with open common ports. Useful for basic network reconnaissance and cybersecurity portfolio projects.

## Features

- Scans a user-specified IPv4 network (e.g., `192.168.1.0/24`)
- Checks for open ports from a list of common ports
- Resolves hostnames (if available)
- Outputs results to the console and saves them to a file
- Provides a scan summary (total hosts scanned, hosts with open ports, total open ports found)

## Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
   cd REPO-NAME
   ```

2. **Run the script:**
   ```sh
   python network_scanner.py
   ```

3. **Follow the prompts:**
   - Enter the network to scan (e.g., `192.168.1.0/24`)
   - Enter the output filename (e.g., `scan_results.txt`)

4. **View the results:**
   - Results are printed to the console and saved to the specified file.

## Requirements

- Python 3.6+
- No external dependencies (uses only Python standard library)

## Example Output

```
192.168.1.1 (router.local): 80 (http), 443 (https)
192.168.1.10 (Unknown): 22 (ssh), 80 (http)

--- Scan Summary ---
Total hosts scanned: 256
Hosts with open ports: 5
Total open ports found: 12
Scan complete. Results saved to scan_results.txt
```

## Disclaimer

This tool is for educational and authorized use only. Do not scan networks without permission.

---

*Created for my cybersecurity portfolio purposes.*
