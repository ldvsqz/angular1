import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Login';
  employees = [
    {
      id: 1,
      name: 'Alex',
      lastname: 'Robinson',
      charge: 'manager',
      email: 'alex@gmail.com',
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Smith',
      charge: 'Designer',
      email: 'juan@gmail.com',
    },
    {
      id: 3,
      name: 'Pedro',
      lastname: 'Watters',
      charge: 'Programmer',
      email: 'pedro@gmail.com',
    },
  ];

  hideregistroTiempo: boolean = true;
  hideReportes: boolean = true;
  hideUsuarios: boolean = true;

  hideTabs(registro: boolean, reportes: boolean, usuarios: boolean): void {
    this.hideregistroTiempo = registro;
    this.hideReportes = reportes;
    this.hideUsuarios = usuarios;
  }

  deleteEmployee(i: number): void {}

  editEmployee(i: number): void {}
}
