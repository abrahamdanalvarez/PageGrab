import type { ComponentChildren } from 'preact';
import { IconMore } from '../shared/icons';
import { useMenu } from './ZoomMenu';
import { t } from './i18n';

export interface MoreMenuItem {
  label: string;
  title?: string;
  kbd?: string;
  icon: ComponentChildren;
  disabled?: boolean;
  onSelect: () => void;
}

/**
 * The topbar's overflow: the actions used less often than crop/blur and
 * save, so Save image and PDF can stand out. `status` briefly replaces the
 * trigger's label (e.g. "Copied") so a result from inside the menu stays visible.
 */
export function MoreMenu({ items, status }: { items: MoreMenuItem[]; status?: string }) {
  const { mounted, closing, wrapRef, popoverRef, triggerProps, run } = useMenu();
  return (
    <div class="zoom-menu more-menu" ref={wrapRef}>
      <button
        {...triggerProps}
        class="icon-btn labeled-action btn-fixed"
        title={t('editorMoreActions')}
      >
        <IconMore size={16} />
        <span>{status ?? t('editorMoreActions')}</span>
      </button>
      {mounted ? (
        <div
          class={`zoom-popover${closing ? ' is-closing' : ''}`}
          role="menu"
          aria-orientation="vertical"
          ref={popoverRef}
          inert={closing}
        >
          {items.map((item) => (
            <button
              key={item.label}
              class="zoom-item more-item"
              role="menuitem"
              tabIndex={-1}
              title={item.title}
              disabled={item.disabled}
              onClick={() => run(item.onSelect)}
            >
              <span class="more-item-label">
                {item.icon}
                {item.label}
              </span>
              {item.kbd ? <kbd>{item.kbd}</kbd> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
