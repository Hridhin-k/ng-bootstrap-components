import { Component, OnDestroy } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  alert: boolean = false
  closeResult = '';
  progressValue: any = 0
  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    }

    else {
      return `with: ${reason}`;
    }
  }
  onClick() {
    const Subscription = new Observable((item) => {
      setTimeout(() => {
        item.next(10)
      }, 100);
      setTimeout(() => {
        item.next(30)
      }, 200);
      setTimeout(() => {
        item.next(50)
      }, 300);
      setTimeout(() => {
        item.next(70)
      }, 500);
      setTimeout(() => {
        item.next(85)

      }, 700);
      setTimeout(() => {
        item.next(100)
        this.alert = true
      }, 1000);
    }).subscribe(result => {
      this.progressValue = result
    })
  }

}
