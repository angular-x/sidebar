import { Component, HostBinding, inject, input } from '@angular/core';
import { SIDEBAR_CONFIGURATION } from '../token';
import { SidebarConfiguration, SidebarComponentShape } from '../interface';
import { DEFAULT_SIDEBAR_CONFIGURATION } from './default-configuration.const';
/**
 * @description
 * @export
 * @class Sidebar
 * @template {string} [T='']
 * @template {string} [S='left' | 'right' | 'top' | 'bottom']
 */
@Component({
  selector: 'ax-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss', '../styles/index.scss'],
  host: {
    'role': 'complementary',
    '[attr.aria-label]': 'ariaLabel() || null',
  }
})
export class Sidebar<
  S extends string = 'left' | 'right' | 'top' | 'bottom',
> implements SidebarComponentShape<S> {
  protected configuration: SidebarConfiguration = {
    ...DEFAULT_SIDEBAR_CONFIGURATION,
    ...(inject(SIDEBAR_CONFIGURATION, { optional: true }) ?? {}),
  } as SidebarConfiguration;

  @HostBinding('class')
  get hostClass(): string {
    return [
      this.configuration.base,
      this.side() === 'left' && this.configuration.left,
      this.side() === 'right' && this.configuration.right,
      this.side() === 'top' && this.configuration.top,
      this.side() === 'bottom' && this.configuration.bottom,
      this.collapsed() && this.configuration.collapsed,
    ].filter(Boolean).join(' ');
  }

  /**
   * @description
   * @public
   * @type {*}
   */
  public ariaLabel = input<string | null>(null);

  /**
   * @description
   * @public
   * @type {*}
   */
  public collapsed = input<boolean>(false);

  /**
   * @description
   * @public
   * @type {*}
   */
  public side = input<S | undefined>();
}
