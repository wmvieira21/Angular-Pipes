import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [{
    instanceType: 'small',
    name: 'teste',
    status: 'offline',
    started: new Date(15, 1, 1996)
  },
  {
    instanceType: 'large',
    name: 'Developer 4',
    status: 'stable',
    started: new Date(15, 1, 1996)
  },
  {
    instanceType: 'medium',
    name: 'Developer 6',
    status: 'critical',
    started: new Date(15, 1, 1996)
  },
  {
    instanceType: 'small',
    name: 'Developer 1',
    status: 'stable',
    started: new Date(15, 1, 1996)
  }];

  filterStatus = '';

  getClassListItem(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    }
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'new server',
      status: 'stable',
      started: new Date(15, 1, 1996)
    });
  }
}
