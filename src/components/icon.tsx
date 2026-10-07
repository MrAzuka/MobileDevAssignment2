import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import type { ColorValue } from 'react-native';

type SymbolName = Exclude<SymbolViewProps['name'], string>;

/**
 * One name per icon, mapped to an SF Symbol on iOS and a Material Symbol on
 * Android and web, so components never deal with platform-specific names.
 */
const ICONS = {
  bell: { ios: 'bell', android: 'notifications', web: 'notifications' },
  gift: { ios: 'gift', android: 'redeem', web: 'redeem' },
  profile: { ios: 'person.crop.circle', android: 'account_circle', web: 'account_circle' },
  eye: { ios: 'eye', android: 'visibility', web: 'visibility' },
  eyeSlash: { ios: 'eye.slash', android: 'visibility_off', web: 'visibility_off' },
  arrowRight: { ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' },
  chevronRight: { ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' },
  close: { ios: 'xmark', android: 'close', web: 'close' },
  pencil: { ios: 'pencil', android: 'edit', web: 'edit' },
  plus: { ios: 'plus', android: 'add', web: 'add' },
  search: { ios: 'magnifyingglass', android: 'search', web: 'search' },
  stocks: { ios: 'chart.line.uptrend.xyaxis', android: 'monitoring', web: 'monitoring' },
  options: { ios: 'chart.xyaxis.line', android: 'ssid_chart', web: 'ssid_chart' },
  futures: { ios: 'square.stack.3d.up', android: 'layers', web: 'layers' },
  crypto: { ios: 'bitcoinsign.circle', android: 'currency_bitcoin', web: 'currency_bitcoin' },
  transfer: { ios: 'arrow.left.arrow.right', android: 'swap_horiz', web: 'swap_horiz' },
  convert: { ios: 'arrow.triangle.2.circlepath', android: 'sync', web: 'sync' },
  card: { ios: 'creditcard', android: 'credit_card', web: 'credit_card' },
  bill: { ios: 'doc.text', android: 'receipt_long', web: 'receipt_long' },
  friends: { ios: 'person.2', android: 'group', web: 'group' },
  globe: { ios: 'globe', android: 'language', web: 'language' },
  send: { ios: 'paperplane', android: 'send', web: 'send' },
  request: { ios: 'tray.and.arrow.down', android: 'move_to_inbox', web: 'move_to_inbox' },
  home: { ios: 'house', android: 'home', web: 'home' },
  homeFilled: { ios: 'house.fill', android: 'home', web: 'home' },
  activity: { ios: 'clock', android: 'schedule', web: 'schedule' },
  buy: { ios: 'arrow.down.left', android: 'south_west', web: 'south_west' },
  sell: { ios: 'arrow.up.right', android: 'north_east', web: 'north_east' },
  deposit: { ios: 'arrow.down', android: 'south', web: 'south' },
  withdraw: { ios: 'arrow.up', android: 'north', web: 'north' },
  dividend: { ios: 'dollarsign.circle', android: 'paid', web: 'paid' },
  system: { ios: 'circle.lefthalf.filled', android: 'contrast', web: 'contrast' },
  sun: { ios: 'sun.max', android: 'light_mode', web: 'light_mode' },
  moon: { ios: 'moon', android: 'dark_mode', web: 'dark_mode' },
} satisfies Record<string, SymbolName>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  color: ColorValue;
  size?: number;
};

export function Icon({ name, color, size = 22 }: IconProps) {
  return <SymbolView name={ICONS[name]} tintColor={color} size={size} />;
}
