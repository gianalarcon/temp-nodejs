const os = require('os')

// info about current user
const user = os.userInfo()
//console.log(user);

// method returns the systems uptime in secs
//console.log(`The System Uptime is ${os.uptime()} secs`);

const currentOS = {
    name:os.type(),
    freeMen: os.freemem(),
}
console.log(currentOS)