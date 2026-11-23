import { useEffect, useState } from 'preact/hooks';
import { getSettings, onSettingsChanged, setSettings } from '../shared/storage';
import { IconBolt } from '../shared/icons';
import { t } from './i18n';

/**
 * Express status as a small toggle beside the capture label: the toolbar
 * icon's behavior is invisible from the editor, so the state and its switch
 * stay in view without taking a row from the screenshot.
 */
export function ExpressChip() {
  const [on, setOn] = useState<boolean | null>(null);
  useEffect(() => {
    let active = true;
    const read = () =>
      void getSettings()
        .then((settings) => {
          if (active) setOn(settings.expressMode);
        })
        .catch(() => {
          /* A failed settings read must never block editing. */
        });
    read();
    // The icon's right-click checkbox and the settings page write the same flag.
    onSettingsChanged(read);
    return () => {
      active = false;
    };
  }, []);
  if (on === null) return null;
  return (
    <button
      type="button"
      class={`express-chip${on ? ' is-on' : ''}`}
      aria-pressed={on}
      aria-label={t('expressLabel')}
      title={
        on
          ? `${t('editorExpressOn')} ${t('settingsExpressHint')}`
          : `${t('editorExpressOff')} ${t('editorExpressOffHint')}`
      }
      onClick={() => {
        setOn(!on);
        void setSettings({ expressMode: !on });
      }}
    >
      <IconBolt size={14} />
      <span aria-hidden="true">{t('editorExpressChip')}</span>
    </button>
  );
}
