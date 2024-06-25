let fs = require("fs");
let buffer = fs.readFileSync("abc.js"); //content kya padhna hai
//buffer = binary buffer data 
// console.log("bin data "+buffer);
//create a file
// fs.openSync("abc.txt","w"); //create an empty file
// fs.writeFileSync("abc.txt","Hello mai hu Shruti"); //Used to write in file
//Content ko replace kar deta hai
// fs.writeFileSync("abc.txt","Hello mai hu Shruti Sahu"); //Used to write in file
//if file nhi h to create kar dega and content exits krta hai to content replace kar deta hai
//Update kar dega file ko append 
// fs.appendFileSync("abc.txt","Bhai Khus ku nhi hai");


//Create a directory
// fs.mkdirSync("meriD");/

//Create file in meriD
// fs.writeFileSync("meriD/merifile.txt","Mera content hai");

//phle folder ko empty kr do
// let content = fs.readdirSync("meriD")//Folder ke ander jitni file hai sab lake de dega
// console.log(content); //gives an array
// for(let i=0; i<content.length;i++){
//  //remove all file from directory
//  console.log("file ",content[i],"is removed");
//  fs.unlinkSync("meriD/"+content[i]);   
// }

//Remove a folder

// fs.rmdirSync("meriD");

//fs.existSync -> if a file exist at a path -> return true
//if a file do not exist at a path -->return flase
let doesPathExits = fs.existsSync("abc.txt");
console.log(doesPathExits);

//fs.lstatSync-> fs.lst  --> isse pta lga skte hai ki jo path hum de rhe hai vo file ka hai ya folder ka
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");

// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();


let fs = require("fs");
for(let i=1; i<=10; i++){
    let dirPathToMake =`Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake+"\\"+"readme.md","# readme for ${dirPathToMake}");
}

