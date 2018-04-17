const qrcode = require('qrcode-terminal');
const ip = require('ip');

// Gives an IP Address + port number and page
const ipAddress = 'http://' + ip.address() + ':3001/';

// Information for user
console.log('Generating QR Code for address: ' + ipAddress);
console.log('Ensure you are forwarding port 3001 to the application\'s port in your VM');

// This object will be turned into a QR code for the Mendix App
const scannableObject = {
  "url": ipAddress,
  "offline": true
};

// Generate the QR code
qrcode.generate(JSON.stringify(scannableObject));
