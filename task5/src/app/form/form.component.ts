import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IStudent } from "../app.component";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})

export class FormComponent implements OnInit {

    @Input() student:
        IStudent = {
            id: 0,
            firstName: "",
            secondName: "",
            surname: "",
            date: new Date(),
            avgMark: 0
        };
    @Input() isAddEditForm: boolean = false;
    @Output() isAddEditFormChange = new EventEmitter();
    @Output() onClick = new EventEmitter();

    date: Date = new Date();

    actionForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.actionForm = this.fb.group({});
        this.date.setFullYear(this.date.getFullYear() - 10);
        this.student.date = this.date;
    }

    ngOnInit(): void {
        this.actionForm = this.fb.group({
            fullName: this.fb.group({
                name: [this.student.firstName, [Validators.required]],
                patronymic: [this.student.secondName, [Validators.required]],
                surname: [this.student.surname, [Validators.required]],
            }),
            birthDate: [this.student.date.toISOString().substring(0, 10), [this.birthDateValidator.bind(this)]],
            averageRating: this.student.avgMark
        });
        this.actionForm.controls.fullName.setValidators([Validators.required, this.fullNameValidator.bind(this)]);
    }

    birthDateValidator(control: FormControl): { [s: string]: boolean } {

        if (new Date(control.value) > this.date) {
            return { "birthDate": true };
        }
        return {};
    }

    fullNameValidator(control: FormControl): { [s: string]: boolean } {

        if (control.value.name === control.value.patronymic
            || control.value.name === control.value.surname) {
            return { "fullName": true };
        }
        return {};
    }

    close(): void {
        this.isAddEditForm = false;
        this.isAddEditFormChange.emit(this.isAddEditForm);
    }

    ok(): void {
        if (this.actionForm.invalid) {
            return;
        }
        this.student = {
            id: this.student.id,
            firstName: this.actionForm.get("fullName.name")?.value,
            secondName: this.actionForm.get("fullName.patronymic")?.value,
            surname: this.actionForm.get("fullName.surname")?.value,
            date: this.actionForm.value.birthDate,
            avgMark: this.actionForm.value.averageRating
        };
        this.isAddEditForm = false;
        this.isAddEditFormChange.emit(this.isAddEditForm);
        this.onClick.emit(JSON.stringify(this.student));
    }
}

export class ActionFormComponent {
}
