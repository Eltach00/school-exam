import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
  standalone: true,
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  imports: [CommonModule],
})
export class LoaderComponent {
  isLoading: Observable<boolean> = this.loaderService.loading$;

  constructor(private readonly loaderService: LoaderService) {}
}
