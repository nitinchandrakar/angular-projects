import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-child',
  templateUrl: './modal-child.component.html',
  styleUrls: ['./modal-child.component.scss']
})
export class ModalChildComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
