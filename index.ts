//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const userNames: string[]=["Admin","Aarish","imran","Ali","Hadi"];
for (let i=0; i<userNames.length; i++){
    if(userNames[i] === "admin"){
        console.log('hello admin,would you like to see ststus report')
    }
    else{
        console.log(`Hello ${userNames[i]},thank you for logging in again`)
    }
}