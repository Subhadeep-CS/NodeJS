//import readLine module
let readline=require('readline');
//console.log(readline);
//creating interface for taking input and showing output
let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

//rl is the main interface to read input and write output
rl.question('Please Enter a name: ',(name)=>{
    console.log('Thank You '+ name );
    rl.close();
});
//I want to display a message when close event occur
rl.on('close',()=>{
    console.log("Interface closed");
    process.exit(0);
})