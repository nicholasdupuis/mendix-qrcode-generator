const qrcode = require('qrcode-terminal');
const ip = require('ip');
const commandLineArgs = require('command-line-args')

// Defines available command line arguments
const optionDefinitions = [
  { name: 'offline', alias: 'o', type: Boolean },
]

// Parse out command line arguments using commandLineArgs library
const options = commandLineArgs(optionDefinitions);

// Gives an IP Address + port number and page
const ipAddress = 'http://' + ip.address() + ':3001/';

// Information for user
console.log('Generating QR Code for address: ' + ipAddress);
console.log('Ensure you are forwarding port 3001 to the application\'s port in your VM');

// This object will be turned into a QR code for the Mendix App
const scannableObject = {
  "url": ipAddress,
  "offline": options.offline ? true: false
};

// Generate the QR code
qrcode.generate(JSON.stringify(scannableObject));
