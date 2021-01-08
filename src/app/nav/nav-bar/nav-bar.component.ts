import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  isToken: boolean;
  token: string;

  constructor(private localStorage: LocalStorageService) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.checkToken();
  }

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(){
    this.token = this.localStorage.retrieve("token");
    console.log(this.token);
    if (this.token.length > 0) {
      this.isToken = true;
    } else {
      this.isToken = false;
    }
  }
}
