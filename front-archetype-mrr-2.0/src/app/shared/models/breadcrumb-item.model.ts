import { Params } from "@angular/router";

export interface BreadcrumbItem {
    label: string;
    url: string;
    params? : Params;
}