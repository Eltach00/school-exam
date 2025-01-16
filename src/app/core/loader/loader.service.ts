import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  loading$: Observable<boolean>;
  private activeRequests: number = 0;
  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {
    this.loading$ = this.loadingSubject.asObservable();
  }

  show(): void {
    this.activeRequests += 1;
    this.updateLoadingState();
  }

  hide(): void {
    if (this.activeRequests > 0) {
      this.activeRequests -= 1;
    }
    this.updateLoadingState();
  }

  private updateLoadingState(): void {
    this.loadingSubject.next(this.activeRequests > 0);
  }
}
