import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  // uname // error
  // uname = 'Nik';
  // uname: any;
  @Input() uname :string = 'Maria';

  // uname:string;

  // constructor(){
  //   this.uname = 'Anna';
  //   let aVariable = 10;
  // }



}
