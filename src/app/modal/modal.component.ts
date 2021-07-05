import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirectiveDirective } from '../modal-directive.directive';
import { ModalInfo } from '../modal-interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalData:any;

  @ViewChild(ModalDirectiveDirective, {static: true}) adHost!: ModalDirectiveDirective;
  


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    console.log("modal====")
    this.loadComponent();
  }

  loadComponent() {
    const adItem = this.modalData;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

}
