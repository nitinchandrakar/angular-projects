import { Component } from '@angular/core';
import { ModalChildComponent } from './modal-child/modal-child.component';
import { ModalItem } from './modal-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-projects';
  isOpen = false;
  modalData:any;

  ngOnInit() {
    this.modalData = new ModalItem(ModalChildComponent, {name: 'Bombasto', bio: 'Brave as they come'});
  }

  toggleModal(){
    this.isOpen = !this.isOpen;
  }
}
