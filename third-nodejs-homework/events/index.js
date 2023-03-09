// Events Homework
// Create an event that will greet all students when they register to our app!
// Create a function that accepts parameters: studentFullname, studentEmail, studentPassword;
// The function should create a new student object (PS: Feel free to add id property to the student using the uuid library from class);
// Whenever the student object is created emit the event that will greet the student;
// BONUS:
// The previously created event, that greets the student, should aswell save the student full name in separate file named greeting_log.txt.
// In a separate file called students.json, using the file system module, save the newly created student.


import {EventEmitter} from "events";
import fs from "fs"
import fsPromises from "fs/promises";
import {v4 as uuidv4} from "uuid"

const eventEmitter = new EventEmitter();


// let id = 0;

eventEmitter.on("greetings", (firstName) => {
    fs.appendFileSync("greetings.txt", `\nHello ${firstName} :)`);
})


async function createStudent(firstName, lastName, studentEmail, studentPassword){

    // id++

    const student = {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        email: studentEmail,
        password: studentPassword
    }

    await fsPromises.readFile("students.json", { encoding: "utf8" }, (error, info) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(info); // Vraka 4 prazni nizi kako shto George spomna

        let studentObject = JSON.parse(info);
        studentObject.push(student);

        fsPromises.writeFile("students.json", JSON.stringify(studentObject, null, 2), (error) => {
            if (error) {
                console.log(error);
            }
        });
    });



    eventEmitter.emit("greetings", firstName);
}




createStudent("John", "Doe", "johndoestuden@gmail.com", "password");
createStudent("Bob", "Bobski", "bobbobski@yahoo.com", "spiderman");
createStudent("Gorjan", "Stanoev", "gogostanoev225@gmail.com", "ihavethebesteducatorsatsedc");
createStudent("Bob", "Marley", "behappy@hotmail.com", "threelittlebirds");
