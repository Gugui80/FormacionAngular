import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { ToastItem } from '../../models/toast-item.model';

@Component({
  selector: 'app-mrr-toaster',
  templateUrl: './mrr-toaster.component.html',
  styleUrls: ['./mrr-toaster.component.scss'],
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' }
})
export class MrrToasterComponent implements OnInit, OnDestroy {

  constructor(
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    /*this.showToastSuccess();
    this.showToastInfo();
    this.showToastError();*/
  }

  isTemplate( toast: ToastItem ) {
    return toast.content instanceof TemplateRef;
  }

  showToastSuccess() {
    this.toastService.showToasts('Operación resuelta con éxito', { classname: 'bg-success text-light', delay: 5000 });
  }

  showToastInfo() {
    this.toastService.showToasts('Información recibida', { classname: 'bg-info text-light', delay: 5000 });
  }

  showToastError() {
    this.toastService.showToasts('Error en la llamada', { classname: 'bg-danger text-light', delay: 5000 });
  }

  showToast() {
    this.toastService.showToasts('Toaster estandar');
  }

  private buildToastItem( bodyInfo: string, headerInfo?: string, delayTime?: number ): ToastItem {
    const toastContent: ToastItem = { header: headerInfo, content: bodyInfo, delay: delayTime };
    
    return toastContent;
  }

  ngOnDestroy(): void {
    this.toastService.clearToastList();
  }
}
