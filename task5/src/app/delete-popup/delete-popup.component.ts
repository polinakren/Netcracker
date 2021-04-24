import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { STUDENTS } from "../mock-students";
import { Student } from "../student";

@Component({
  selector: "app-delete-popup",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./delete-popup.component.html",
  styleUrls: ["./delete-popup.component.css"],
  encapsulation: ViewEncapsulation.None
})

export class DeletePopupComponent implements OnInit {
  // tslint:disable-next-line:no-any
  constructor(private matDialogRef: MatDialogRef<DeletePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  deleteStudent(student: Student): void {
    for (let i = 0; i < STUDENTS.length; i++) {
      if (STUDENTS[i] === student) {
        STUDENTS.splice(i, 1);
      }
    }
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
