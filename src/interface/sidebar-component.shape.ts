import { InputSignal } from "@angular/core";

export interface SidebarComponentShape<S extends string = 'left' | 'right' | 'top' | 'bottom'> {
  side?: InputSignal<S | undefined>;
  collapsed?: InputSignal<boolean>;
}
