import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { EmployeesService } from 'app/main/services/employees.service';
import { EmployeeByGroup, Group } from 'app/shared/models/i-groups';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];
  copy: Group[] = [];
  groups2: Group[] = [];
  employeesbyGroup: { id: number; employees: EmployeeByGroup[] }[] = [];
  constructor(private service: EmployeesService,
              private notiSvc: NotificationService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void{
    this.service.getGroups().subscribe((data) => {
      this.groups = data.data.groups;
      this.copy = data.data.groups;
    });
  }

  getEmployeesByGroup(id: number, element: any, idx: number): void{
    this.service.getEmployeesByGroup(id).subscribe((data) => {
      this.employeesbyGroup.push({ id, employees: data.data.employees });
    }, error => {
      this.notiSvc.openSnackBar('Error al obtener los empleados del grupo', 3000);
      this.groups.push(element);
      this.groups2.splice(idx, 1);
    });
  }

  drop(event: CdkDragDrop<Group[]>, flag: boolean) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      if(flag){
        const id = this.groups2[event.currentIndex].id;
        this.getEmployeesByGroup(id, this.groups2[event.currentIndex], event.currentIndex);
      }else{
        this.groups.forEach((x) => {
          if(this.employeesbyGroup.find((xx) => xx.id === x.id)){
            const idx = this.employeesbyGroup.findIndex((xxx) => xxx.id === x.id);
            this.employeesbyGroup.splice(idx, 1);
          }
        });
      }

    }

    this.copy = this.groups;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue){
      this.groups = this.copy.filter((x) => x.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
    }else{
      this.groups = this.copy;
    }
  }

  printData(): void{
    console.log(this.employeesbyGroup);

  }


}
