import { InjectionToken } from '@angular/core';
import { SidebarConfiguration } from '../interface';

export const SIDEBAR_CONFIGURATION =
  new InjectionToken<Partial<SidebarConfiguration>>(
    'SIDEBAR_CONFIGURATION'
  );
