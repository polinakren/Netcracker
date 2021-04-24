import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DeletePopupComponent } from "./delete-popup/delete-popup.component";
import { STUDENTS } from "./mock-students";
import { Student } from "./student";

@Component({
  selector: "app-root",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Students: Student[] = STUDENTS.slice();
  checkAvgMark = false;
  sorted: boolean[] = [false, false, false, false, false, false];
  selectedStudent: Student;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  filterStudentsDate(date: Date): void {
    for (let i = this.Students.length - 1; i >= 0; i--) {
      if (this.Students[i].date <= date) {
        this.Students.splice(i, 1);
      }
    }
  }

  filterStudentsMark(mark: string): void {
    for (let i = this.Students.length - 1; i >= 0; i--) {
      if (this.Students[i].avgMark <= +mark) {
        this.Students.splice(i, 1);
      }
    }
  }

  refreshData(): void {
    this.Students = STUDENTS.slice();
    this.cdr.detectChanges();
  }

  sortData(column: string): void {
    if (column === "id") {
      (this.sorted[0]) ?
        this.Students = this.Students.sort((n1, n2) => n1.id - n2.id) :
        this.Students = this.Students.sort((n1, n2) => n2.id - n1.id);
      this.sorted[0] = !this.sorted[0];
    }
    if (column === "surname") {
      (this.sorted[1]) ?
        this.Students = this.Students.sort((n1, n2) => n1.surname > n2.surname ? 1 : -1) :
        this.Students = this.Students.sort((n1, n2) => n2.surname > n1.surname ? 1 : -1);
      this.sorted[1] = !this.sorted[1];
    }
    if (column === "firstName") {
      (this.sorted[2]) ?
        this.Students = this.Students.sort((n1, n2) => n1.firstName > n2.firstName ? 1 : -1) :
        this.Students = this.Students.sort((n1, n2) => n2.firstName > n1.firstName ? 1 : -1);
      this.sorted[2] = !this.sorted[2];
    }
    if (column === "secondName") {
      (this.sorted[3]) ?
        this.Students = this.Students.sort((n1, n2) => n1.secondName > n2.secondName ? 1 : -1) :
        this.Students = this.Students.sort((n1, n2) => n2.secondName > n1.secondName ? 1 : -1);
      this.sorted[3] = !this.sorted[3];
    }
    if (column === "date") {
      (this.sorted[4]) ?
        this.Students = this.Students.sort((n1, n2) => n1.date > n2.date ? 1 : -1) :
        this.Students = this.Students.sort((n1, n2) => n2.date > n1.date ? 1 : -1);
      this.sorted[4] = !this.sorted[4];
    }
    if (column === "avgMark") {
      (this.sorted[5]) ?
        this.Students = this.Students.sort((n1, n2) => n1.avgMark - n2.avgMark) :
        this.Students = this.Students.sort((n1, n2) => n2.avgMark - n1.avgMark);
      this.sorted[5] = !this.sorted[5];
    }
  }
  update(): void {}

  openDeleteDialog(student: Student): void {
    if (student) {
      const dialogRef = this.dialog.open(DeletePopupComponent, {width: "300px", data: {student: student}});

      dialogRef.afterClosed().subscribe(() => {
        this.refreshData();
      });
    }
  }
  checkData(student: Student, studentName: string): boolean {
      if (student.surname === studentName ||
        student.firstName === studentName || student.firstName + " "
      + student.surname === studentName || student.surname + " " +
        student.firstName === studentName) {
        return true;
      }
    return false;
  }
}
