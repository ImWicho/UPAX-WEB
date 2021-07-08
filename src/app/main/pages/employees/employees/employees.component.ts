import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '@services/notification.service';
import { EmployeesService } from 'app/main/services/employees.service';
import { Employee } from 'app/shared/models/i-employes';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['1', '2', '3', '4'];
  dataSource!: MatTableDataSource<any>;
  form!: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
              private service: EmployeesService,
              private notiSvc: NotificationService) { this.buildForm(); }

  ngOnInit(): void {
    this.setData([]);
    this.getEmployees();
  }

  buildForm(): void{
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });
  }

  setData(data: any): void{
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployees(): void{
    this.service.getUsers().subscribe((data) => {
      this.setData(data.data.employees);
    });
  }

  addEmploye(): void{
    if(this.form.invalid){ return; }
    this.loading = !this.loading;
    this.form.get('birthday')?.setValue(dayjs(this.form.get('birthday')?.value).format('YYYY/MM/DD'));

    this.service.saveUsers(this.form.value).subscribe((data) => {
      this.notiSvc.openSnackBar('Empleado guardado correctamente', 3000).subscribe(() => {
        this.loading = !this.loading;
        this.getEmployees();
        this.resetForm();
      });
    });
  }

  resetForm(): void{
    this.form.get('name')?.setValue('');
    this.form.get('name')?.markAsUntouched();
    this.form.get('last_name')?.setValue('');
    this.form.get('last_name')?.markAsUntouched();
    this.form.get('birthday')?.setValue('');
    this.form.get('birthday')?.markAsUntouched();
  }

}
