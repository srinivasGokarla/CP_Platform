var inquirer = require('inquirer');

console.log("************************")
console.log("Welcome to Andhra Restaurant")
console.log("Please Register to  continue")
console.log("************************")

inquirer
  .prompt([
    /* Pass your questions in here */
{
    type: "input",
    message: "Enter your username",
    name: "username"
},
{
    type: "password",
    message: "Enter your password",
    name: "password"
}
  ])
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    console.log('welcome back', userDetails.username);

    inquirer.prompt([
{
    type:"conform",
    name:"fordelivery",
    message:"do you want the tiffen to be delivered?",
    default: true
},
{
    type:"input",
    name:"phone",
    message:"what is your phone number?",
    validate(value) {
        const pass = value.length == 10;
        if(pass) {
            return true;

        }
        return "please enter valid phone number!"
    }
},
{
    type:"input",
    name:"qty",
    message:"How many tiffens do you want?",
    validate(value) {
        var valid = !isNaN(parseInt(value));
        return valid || "please enter a number"
    },
    filter(value){
     return parseInt(value)
    }
},
{
    type:"list",
    name:"topings",
    message:"please select your tiffen topings",
    choices:[
        "Idly",
        "Puri",
        "Dosa",
        "Vada",
        "Mysure bajji",
        "Upma",
        "Roti",
        "Parota",
        "Uthumpa"
    ]
},


    ])
    .then(answers=> {
        console.log("order details are")
        console.log(answers)
        console.log("username", userDetails.username)
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });