# mendix-qrcode-generator
Generate Mendix QR codes to reach Mendix Apps in a Windows VM from MacOS 

# Setup 

```
git clone git@github.build.ge.com:212412062/mendix-qrcode-generator.git
npm install
```

# Usage

*Before using, make sure to forward port 3001 on your Mac to port 8080 on your Windows VM* 

Make sure your Mendix App is running before scanning

```
node index.js
```

OR

```
npm run generate-qrcode
```

