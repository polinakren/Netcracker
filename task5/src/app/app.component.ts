import { ChangeDetectionStrategy, Component } from "@angular/core";


export interface IStudent {
  readonly id: number;
  firstName: string;
  secondName: string;
  surname: string;
  date: Date;
  avgMark: number;
}

@Component({
  selector: "app-root",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {

  public students: IStudent[] = [
    {id: 1, firstName: "Николай", secondName: "Иванович", surname: "Лобачевский", date: new Date("11.20.1792"), avgMark: 2.5},
    {id: 2, firstName: "Пафнутий", secondName: "Львович", surname: "Чебышев",   date: new Date("05.16.1821"), avgMark: 4},
    {id: 3, firstName: "Александр", secondName: "Михайлович", surname: "Ляпунов",   date: new Date("05.25.1857"), avgMark: 3.5},
    {id: 4, firstName: "Андрей", secondName: "Николаевич", surname: "Колмогоров",   date: new Date("04.12.1903"), avgMark: 4.5},
    {id: 5, firstName: "Борис", secondName: "Николаевич", surname: "Делоне",   date: new Date("03.15.1890"), avgMark: 3},
    {id: 6, firstName: "Борис", secondName: "Григорьевич", surname: "Галеркин",   date: new Date("04.03.1871"), avgMark: 2.8},
    {id: 7, firstName: "Михаил", secondName: "Леонидович", surname: "Громов",   date: new Date("12.23.1943"), avgMark: 3.3},
  ];
}
