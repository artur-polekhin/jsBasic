class Note {
    constructor (name, desciption, isDone, dateOfCreation, dateOfEdition ) {
        this.name = name;
        this.desciption = desciption;
        this.isDone = isDone;
        this.dateOfCreation = dateOfCreation;
        this.dateOfEdition = dateOfEdition;
    }

    getInfo() {
        return this;
    }

    completeNote() {
        this.isDone = true;
    }
}



class TodoList {
    constructor (todoList = []) {
        this.todoList = todoList;
    }

    addNewNote(note) {
        return this.todoList.push(note);
    };

    removeNote(note) {
        const index = this.todoList.indexOf(note);
        return this.todoList.splice(index, 1);
    };

    getInforationAboutAllNotes() {
        return this;
    };

    findNote(noteName) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].name == noteName) {
                return this.todoList[i];
            }
        }
    };

    sortNotesByStatusDone() {
        return this.todoList.sort((a, b) => b.isDone - a.isDone);
    };

    sortNotesByStatusNotDone() {
        return this.todoList.sort((a, b) => a.isDone - b.isDone);
    };

    getNotCompletedNotes() {
        const inCompleteTask = this.todoList.filter(note => !note.isDone);
        return inCompleteTask
    };

    sortNotesByDateOfCreate() {
        return this.todoList.sort((a, b) => a.dateOfCreation - b.dateOfCreation);
    }
}


const note1 = new Note("name1", "description1", false, new Date("2025-02-16"), "00.00.0000");
const note2 = new Note("name2", "description2", false, new Date("2025-02-17"), "00.00.0000");
const note3 = new Note("name3", "description3", false, new Date("2025-01-16"), "00.00.0000");
const note4 = new Note("name4", "description4", false, new Date("2025-02-10"), "00.00.0000");
const note5 = new Note("name5", "description5", true, new Date("2024-02-16"), "00.00.0000");

console.log(note1.getInfo());
note1.completeNote();
console.log(note1.getInfo());


const myTodoList = new TodoList([note1, note2, note3]);

console.log(myTodoList.getInforationAboutAllNotes());
myTodoList.addNewNote(note4);
myTodoList.addNewNote(note5);
console.log(myTodoList.getInforationAboutAllNotes());
myTodoList.removeNote(note3);
console.log(myTodoList.getInforationAboutAllNotes());
console.log(myTodoList.getNotCompletedNotes())

const myNote = myTodoList.findNote("name4");
console.log(myNote)

console.log(myTodoList.sortNotesByStatusDone());
console.log(myTodoList.sortNotesByStatusNotDone());
console.log(myTodoList.sortNotesByDateOfCreate())



