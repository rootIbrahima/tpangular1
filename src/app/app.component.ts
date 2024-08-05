import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports:[
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'tpAngular1';
}
