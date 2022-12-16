var { Command } = require('commander');
var program = new Command();
program.version('0.0.1');

program.argument("<name>","name to print")
.argument("[number]","number of times print", 1)
.action(function(name,number){
            for(var i = 0; i < number; i++) {
                console.log(name)
            }
           })
// program.argument("<username","user login details")
//       .argument("[password]","password for user, if needed", "default")
//       .action(function(username,password){
//           console.log("username",username)
//           console.log("password",password)
//       })

program.parse(process.argv);
