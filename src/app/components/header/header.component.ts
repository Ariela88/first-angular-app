import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  title: string = 'Super APP';
  version: number = 3;
  username?:string

  constructor(){
   console.log('header')



  }

  ngOnInit(): void {



console.log('header onInit');


  }

login():void{
  this.username = 'Manuela'

}


}
