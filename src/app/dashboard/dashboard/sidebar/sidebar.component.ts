import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { Router } from '@angular/router';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Menus: any;

  constructor(private _authService: AuthService, private _router: Router, private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.bindCrisMacMenus();
  }


  bindCrisMacMenus() {
    this.sidebarService
    .getCrismacMenu()
    .subscribe(data => {
      const res = JSON.parse(data);

      if (res.data.hasOwnProperty('sysCrisMacMenu')) {
        this.Menus = res.data.sysCrisMacMenu;
      }
    });
  }


  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
  public logout = () => {
    this._authService.clear();
    const to: string = this._authService.getRedirectUrl() || '/login';
    this._router.navigate([to]);
  }


}
