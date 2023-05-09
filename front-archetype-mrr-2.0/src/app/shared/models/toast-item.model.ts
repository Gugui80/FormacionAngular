import { TemplateRef } from '@angular/core';

export interface ToastItem {
    header?: string;
    content: string | TemplateRef<any>;
    delay?: number;
    classname?: string;
  }