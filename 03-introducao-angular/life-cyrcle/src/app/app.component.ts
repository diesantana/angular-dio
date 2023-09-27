import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'life-cyrcle';
  isALiveLifeCycle: boolean = true;

  destruirLifeCycle(): void{
    this.isALiveLifeCycle = false;
  }

}
