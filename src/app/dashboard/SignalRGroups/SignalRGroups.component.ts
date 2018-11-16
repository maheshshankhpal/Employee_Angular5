import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { iNotificationBody } from '../../interfaces/iNotificationBody';
import { environment } from '../../../environments/environment';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
// import { GlobalService, ConnectedUserData, LockUnlockApplication } from '../../core/Global.service';
import { UserService } from '../../providers/user.service';
import { ConnectedUserData, GlobalService } from '../Global.service';

@Component({
  selector: 'app-SignalRGroups',
  templateUrl: './SignalRGroups.component.html',
  styleUrls: ['./SignalRGroups.component.css']
})
export class SignalRGroupsComponent implements OnInit {
  _hubConnection: any;
  Message: any;
  msgs: any[];

  ConnectedUser: ConnectedUserData;

  userinfo = JSON.parse(localStorage.getItem('userinfo'));
  constructor(private globalService: GlobalService, private userService: UserService) {
    this.ConnectedUser = new ConnectedUserData;
  }

  ngOnInit() {
    //SignalR Hub Connections
    this._hubConnection = new HubConnectionBuilder().withUrl(environment.HubURL).build();

    // To start connection 
    this._hubConnection.start().then(() => {
      console.log('MessageHub Connected');
      this.changeUserStatus(true);
      this.JoinSignalRGroups();
    });

    // After Group Join
    this._hubConnection.on('onJoinGroup', data => {
      var userifo = JSON.parse(localStorage.getItem('userinfo'));
      if (data.userid != userifo.userID) {
        console.log(data.userid + '  Join the Group');
        // this.ToastService.fireToast('toastr-success', data.userid + ' Join The Group');
      }
    });

 

    // send method will get messgae 
    this._hubConnection.on('send', data => {
      const obj: iNotificationBody = JSON.parse(data);
      this.Message = obj[0];
      console.log(this.Message);
    });

    //On Connection Close
    this._hubConnection.onclose(err => {
      // this.ToastService.fireToast('toastr-error', 'Reconnecting....');
      this.changeUserStatus(false);
      this.Reconnect();
    });
  }

  JoinSignalRGroups() {
    //To join SignalR Groups
    this._hubConnection
      .invoke('joinToGroup', this.userinfo.userID, this.userinfo.userGroup)
      .then(() => {
        // this.ToastService.fireToast('toastr-info', 'YOU HAVE JOINED ELS GROUPS !!!');
      })
      .catch(err => console.error(err));
  }
  // Reconnect loop
  Reconnect() {
    this._hubConnection.start()
      .then(() => {
        this.changeUserStatus(true);
        // this.ToastService.fireToast('toastr-success', 'Reconnected');
        this.JoinSignalRGroups();
      })
      .catch((err) => {
        // this.ToastService.fireToast('toastr-error', 'Reconnection Failed');
        this.changeUserStatus(false);
        console.log('Reconnection Failed');
        this.Reconnect();
      });
  }

  changeUserStatus(isOnline) {
    this.ConnectedUser.UserName = this.userinfo.userID;
    this.ConnectedUser.ConnectionStatus = isOnline;
    this.globalService.ChangeUserStatus(this.ConnectedUser);
  }

}
