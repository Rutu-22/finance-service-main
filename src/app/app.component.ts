import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { LoaderService } from './common/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarExpanded = true;
  title = 'Workstation Hub Service';
  isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(private loader: LoaderService) {}
}
