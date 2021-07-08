import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isSmall: boolean | undefined;
  isDarkMode!: boolean;
  constructor(private sideNavService: SidenavService, private themeSvc: ThemeService) {
    this.themeSvc.initTheme();
    this.isDarkMode = this.themeSvc.isDarkMode();
   }

  ngOnInit(): void {
  }

  toogleSideNav(): void{
    this.sideNavService.toggle$.next();
  }

  toogleTheme(): void{
    this.isDarkMode = this.themeSvc.isDarkMode();
    const theme = this.isDarkMode ? 'light-mode' : 'dark-mode';
    this.themeSvc.updateTheme(theme);
  }

}
