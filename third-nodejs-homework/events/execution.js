// import {EventEmitter} from "events";
// import fs from "fs";

// const eventEmitter = new EventEmitter();

// const writeFile = (path, data) => {
//     fs.writeFileSync(path, data);
// }

// const readFile = (path) => {
//     const info = fs.readFileSync(path, {encoding: "utf8"});

//     return info
// }

// const readStudents = (path) => {
//     const studentInfo = readFile(path);

//     const parsedStudent = JSON.parse(studentInfo);

//     return parsedStudent
// }

// function Identification(){
//     this.id = 0;

//     this.generate = function(){
//         this.id += 1

//         return this.id
//     }
// }

// let ID_GENERATOR = new Identification()
// console.log(ID_GENERATOR)


// eventEmitter.on("greetings", (firstName, lastName, studentEmail, studentPassword) => {
//     console.log(`Hello ${firstName} :)`);

//     const student = {
//         id: ID_GENERATOR,
//         firstName: firstName,
//         lastName: lastName,
//         email: studentEmail,
//         password: studentPassword
//     }

//     const studentObject = readStudents(path);
//     studentEmail.push(student);

//     writeFile(path, JSON.stringify(studentObject, null))
// })


// eventEmitter.emit("greetings", "John", "Doe", "randomemail@gmail.com", "password")