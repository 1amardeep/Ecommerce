import { Component, ElementRef, OnInit } from '@angular/core';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  selector: 'app-theme-two',
  templateUrl: './theme-two.component.html',
  styleUrls: ['./theme-two.component.scss']
})
export class ThemeTwoComponent implements OnInit {

  constructor(private backCheck : BackButtonService, private elem: ElementRef) { }
 
  ngOnInit() {
    this.backCheck.backCheck(true);
  }

  ngAfterViewInit(){
    // you'll get your through 'elements' below code
    let elements = this.elem.nativeElement.querySelectorAll('.port-item');
    for (const element of elements) {
      element.addEventListener('click', (event) => {
        let eles  = Array.from(this.elem.nativeElement.querySelectorAll('.collapse'));
         eles.forEach((target : any) => {
            target.classList['remove']('show');
         })
      })
    }
}

}
