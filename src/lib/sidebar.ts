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

    // General styles
    '[style.--ax-sidebar-width]': 'width() ?? null',
    '[style.--ax-sidebar-height]': 'height() ?? null',
    '[style.--ax-sidebar-padding]': 'padding() ?? null',

    // Width
    '[style.--ax-sidebar-left-width]': 'side() === "left" ? width() ?? null : null',
    '[style.--ax-sidebar-right-width]': 'side() === "right" ? width() ?? null : null',

    // Height
    '[style.--ax-sidebar-top-height]': 'side() === "top" ? height() ?? null : null',
    '[style.--ax-sidebar-bottom-height]': 'side() === "bottom" ? height() ?? null : null',

    // Collapsed
    '[style.--ax-sidebar-left-collapsed-offset]': 'side() === "left" ? collapsedOffset() ?? null : null',
    '[style.--ax-sidebar-right-collapsed-offset]': 'side() === "right" ? collapsedOffset() ?? null : null',
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
   * @description The side of the sidebar, which can be 'left', 'right', 'top', or 'bottom'.
   * @public
   * @type {*}
   */
  public side = input<S | undefined>();

  /**
   * @description The width of the sidebar.
   * @public
   * @type {*}
   */
  public width = input<string | null>(null);

  /**
   * @description The height of the sidebar.
   * @public
   * @type {*}
   */
  public height = input<string | null>(null);

  /**
   * @description The padding inside the sidebar.
   * @public
   * @type {*}
   */
  public padding = input<string | null>(null);

  /**
   * @description Left sidebar collapsed offset.
   * @public
   * @type {*}
   */
  public collapsedOffset = input<string | null>(null);
}
