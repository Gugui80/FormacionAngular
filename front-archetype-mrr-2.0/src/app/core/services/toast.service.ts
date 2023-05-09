import { Injectable, TemplateRef } from '@angular/core';
import { ToastItem } from 'src/app/shared/models/toast-item.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastList: ToastItem[] = [];

  constructor() { }

  showToasts( content: string | TemplateRef<any>, options: any = {} ): void {
    this.toastList.push({ content, ...options });
  }

  removeToast( toastToDelete: ToastItem ): void {
    this.toastList = this.toastList.filter( (toast) => toast !== toastToDelete);
  }

  clearToastList(): void {
    this.toastList.splice(0, this.toastList.length);
  }
}
