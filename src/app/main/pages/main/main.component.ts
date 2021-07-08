import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { SidenavService } from '@services/sidenav.service';

import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('matDrawer') drawer!: MatDrawer;
  public isSmall = false;

  constructor(public breakpointObserver: BreakpointObserver, private sidenavService: SidenavService, private router: Router){}

  ngOnInit(): void{
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((data: any) => {
      this.isSmall = data.matches;
    });

    this.sidenavService.toggle$.subscribe(() => this.drawer.toggle());
    this.router.navigate(['/app/inicio']);
  }

}
