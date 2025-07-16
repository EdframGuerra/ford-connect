import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class AppStateService {

  private _isMenuEnabled = new BehaviorSubject<boolean>(false);

  isMenuEnabled$ = this._isMenuEnabled.asObservable();

  constructor() {}

  enableMenu(): void {
    this._isMenuEnabled.next(true);
  }

  disableMenu(): void {
    this._isMenuEnabled.next(false);
  }
}
