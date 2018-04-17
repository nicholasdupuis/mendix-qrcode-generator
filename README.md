# mendix-qrcode-generator
Generate Mendix QR codes to reach Mendix Apps in a Windows VM from MacOS

# Setup

Clone the repository and run an npm install to get dependencies:

```
git clone git@github.build.ge.com:212412062/mendix-qrcode-generator.git
npm install
```

Forward port 3001 to your Mendix App's port

* Right click your Windows VM in VirtualBox
* Go To Settings
* Click "Network"
* Expand the "Advanced" section
* Click "Port forwarding"
* Under "Host Port", enter "3001"
* Under "Guest Port", enter the port your Mendix app is running on in your Windows VM
  * 8080 by default

# Usage

To generate a QR code in your command line, run the following from the root of the repository.
Ensure your app is running in your Windows VM.

```
npm run generate-qrcode
```
