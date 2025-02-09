function Student(firstName, secondName, dateOfBorn, mark = [], attendance = [], сourseName) {
    this.firstName = firstName,
    this.secondName = secondName,
    this.dateOfBorn = dateOfBorn,
    this.marks = mark,
    this.attendance = attendance,
    this.сourseName = сourseName
    this.addMark = function (num) {
        return this.marks.push(num);
    },
    this.addAttendance = function (isAttendant) {
        return this.attendance.push(isAttendant);
    },

    this.getAverageMark = function () {
        return this.marks.reduce((acc, curVal) => acc + curVal, 0) / mark.length;
    }

    this.getAverageAttendance = function () {
      return this.attendance.reduce((acc, curVal) => {
        if (curVal) return acc += 1;
         else return acc;
      }, 0) / this.attendance.length;
    },

    this.getAttendanceQuantity = function () {
        return this.attendance.reduce((acc, curVal) => {
          if (curVal) return acc += 1;
           else return acc;
        }, 0);
      },

    this.changeCourse = function (newCourseName) {
        this.marks = [];
        this.attendance = []
        this.changeCourse = newCourseName;
    },

    this.getStudentInfo = function () {
        return this;
    }
}

Student.prototype.allCources = [];

Student.prototype.addNewCource = function (newCource) {
    return this.allCources.push(newCource);
}

Student.prototype.deleteCource = function (courceName) {
    const index = this.allCources.indexOf(courceName);
        return this.allCources.splice(courceName, 1);
}


function Group(students = []) {
    this.students = students,
    this.addStudentToGroup = function (student) {
        return this.students.push(student);
    },

    this.deleteStudentFromGroup = function (student) {
        const index = this.students.indexOf(student);
        return this.students.splice(index, 1);
    }
}


const st1 = new Student("firstNam_1", "secondName_1", "01.01.2001", [], [], "jsBasic");
const st2 = new Student("firstNam_2", "secondName_2", "02.02.2002", [], [], "jsBasic");
const st3 = new Student("firstNam_3", "secondName_3", "03.03.2003", [], [], "jsBasic");
const st4 = new Student("firstNam_4", "secondName_4", "04.04.2004", [], [], "jsBasic");

console.log(st1);
st1.addMark(5);
st1.addMark(2);
st1.addAttendance(true);
st1.addAttendance(true);
st1.addAttendance(false);
console.log(st1);
console.log(st1.getAverageMark());
console.log(st1.getAverageAttendance());
console.log(st1.getAttendanceQuantity())
st1.changeCourse("newCource");
console.log(st1.getStudentInfo());


const gourp1 = new Group();
gourp1.addStudentToGroup(st1);
gourp1.addStudentToGroup(st2);
gourp1.addStudentToGroup(st3);
gourp1.addStudentToGroup(st4);
console.log(gourp1.students);
gourp1.deleteStudentFromGroup(st3);
console.log(gourp1.students)



