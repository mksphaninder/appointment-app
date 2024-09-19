import { Component } from '@angular/core';
import { Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] =  [{
    id: 1,
    title: "Take Your dog for a walk",
    date: new Date('2024-09-19')
  }];

}
