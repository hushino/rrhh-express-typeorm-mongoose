# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

global npm install -g node-windows
npm link node-windows

"node-windows": "^1.0.0-beta.5", 
"os-utils": "0.0.14",
"systeminformation": "^4.27.1"

service.js:
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'AMonitoringService',
    description: 'Reinicia el servicio mysql',
    script: 'C:\\Users\\usuarioX\\Desktop\\service-test\\index.js',
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
    //, workingDirectory: '...'
    //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
});

svc.install();