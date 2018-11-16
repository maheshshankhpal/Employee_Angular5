import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../providers/auth.service';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;
	currentUser = JSON.parse(localStorage.getItem('userinfo'));

  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(private elementRef: ElementRef,private _authService: AuthService,private _router: Router) { }


  	ngOnInit() {
	  }
	  


	  public logout = () => {
		this._authService.clear();
		const to: string = this._authService.getRedirectUrl() || '/login';
		this._router.navigate([to]);
	  }

}
