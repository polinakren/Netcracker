import { Component, Input } from "@angular/core";
import { IStudent } from "../app.component";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})

export class StudentsComponent {

  @Input() students: IStudent[] = [];

  student: IStudent = {
    id: 0,
    firstName: "",
    secondName: "",
    surname: "",
    date: new Date("1970-01-01"),
    avgMark: 0
  };
  searchString: string = "";
  filterBirthDateLeft: Date = new Date("1970-01-01");
  filterBirthDateRight: Date = new Date("1970-01-01");
  filterAverageRatingLeft: number = 0;
  filterAverageRatingRight: number = 0;
  readonly lowRating: number = 3;
  isStudentsHighlighted: boolean = true;
  isPopupVisible: boolean = false;
  idDeleteStudent: number = 0;
  isAddEditForm: boolean = false;
  selectedStudent: IStudent;
  sorted: boolean[] = [false, false, false, false, false, false];
  checkAvgMark: boolean;

  public deleteStudent(id: number): void {
    this.isPopupVisible = true;
    this.idDeleteStudent = id;
  }

  public editStudent(student: IStudent): void {
    this.student = student;
    this.isAddEditForm = true;
  }

  public addNewStudent(): void {
    this.isAddEditForm = true;
  }

  closeForm(studentStr: string): void {
    this.clearStudent();
    const newStudent = JSON.parse(studentStr);
    newStudent.birthDate = new Date(newStudent.birthDate);
    if (newStudent.id !== 0) {
      this.students[newStudent.id - 1] = newStudent;
    } else {
      newStudent.id = this.students.length + 1;
      this.students.push(newStudent);
    }
  }

  clearStudent(): void {
    this.student = {
      id: 0,
      firstName: "",
      secondName: "",
      surname: "",
      date: new Date("1970-01-01"),
      avgMark: 0
    };
  }

  sortData(column: string): void {
    if (column === "id") {
      (this.sorted[0]) ?
        this.students = this.students.sort((n1, n2) => n1.id - n2.id) :
        this.students = this.students.sort((n1, n2) => n2.id - n1.id);
      this.sorted[0] = !this.sorted[0];
    }
    if (column === "surname") {
      (this.sorted[1]) ?
        this.students = this.students.sort((n1, n2) => n1.surname > n2.surname ? 1 : -1) :
        this.students = this.students.sort((n1, n2) => n2.surname > n1.surname ? 1 : -1);
      this.sorted[1] = !this.sorted[1];
    }
    if (column === "firstName") {
      (this.sorted[2]) ?
        this.students = this.students.sort((n1, n2) => n1.firstName > n2.firstName ? 1 : -1) :
        this.students = this.students.sort((n1, n2) => n2.firstName > n1.firstName ? 1 : -1);
      this.sorted[2] = !this.sorted[2];
    }
    if (column === "secondName") {
      (this.sorted[3]) ?
        this.students = this.students.sort((n1, n2) => n1.secondName > n2.secondName ? 1 : -1) :
        this.students = this.students.sort((n1, n2) => n2.secondName > n1.secondName ? 1 : -1);
      this.sorted[3] = !this.sorted[3];
    }
    if (column === "date") {
      (this.sorted[4]) ?
        this.students = this.students.sort((n1, n2) => n1.date > n2.date ? 1 : -1) :
        this.students = this.students.sort((n1, n2) => n2.date > n1.date ? 1 : -1);
      this.sorted[4] = !this.sorted[4];
    }
    if (column === "avgMark") {
      (this.sorted[5]) ?
        this.students = this.students.sort((n1, n2) => n1.avgMark - n2.avgMark) :
        this.students = this.students.sort((n1, n2) => n2.avgMark - n1.avgMark);
      this.sorted[5] = !this.sorted[5];
    }
  }

  closePopup(isDelete: boolean): void {
    this.isPopupVisible = false;
    if (isDelete) {
      this.students = this.students.filter(s => s.id !== this.idDeleteStudent);
    }
    this.idDeleteStudent = 0;
  }

  update(): void {}

  checkData(student: IStudent, studentName: string): boolean {
    if (student.surname === studentName ||
      student.firstName === studentName || student.firstName + " "
      + student.surname === studentName || student.surname + " " +
      student.firstName === studentName) {
      return true;
    }
    return false;
  }

  filterStudentsDate(date: Date): void {
    for (let i = this.students.length - 1; i >= 0; i--) {
      if (this.students[i].date <= date) {
        this.students.splice(i, 1);
      }
    }
  }

  filterStudentsMark(mark: string): void {
    for (let i = this.students.length - 1; i >= 0; i--) {
      if (this.students[i].avgMark <= +mark) {
        this.students.splice(i, 1);
      }
    }
  }

  public searchStudent(value: string): boolean {
    if (this.searchString === "") {
      return false;
    }
    return RegExp(this.searchString.toLowerCase()).test(value.toLowerCase());
  }

  public sort(property: string, order: string): void {
    this.students.sort(this.compare(property, order));
  }

  private compare(property: string, order: string): any {
    return (a: any, b: any) => {
      if (a[property] > b[property]) {
        return 1 * ((order === "asc") ? 1 : -1);
      }
      if (a[property] < b[property]) {
        return -1 * ((order === "asc") ? 1 : -1);
      }
      return 0;
    };
  }
}
