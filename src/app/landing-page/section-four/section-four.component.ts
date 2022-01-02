import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.css']
})


export class SectionFourComponent implements OnInit {
  num = 0 ;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRightClick(){
    if(this.num < 5){
      this.num= this.num + 1;
    }
    console.log(this.num);
  }

  onLeftClick(){
    if(this.num > 0){
      this.num= this.num -1;
    }
  }

  setNum(newNum :number){
    this.num= newNum;
  }


}
