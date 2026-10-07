/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#6B6B6B',
    surface: '#F4F4F4',
    surfaceRaised: '#E9E9E9',
    border: '#E2E2E2',
    positive: '#2E8B3E',
    positiveSurface: '#E2F3E4',
    negative: '#D64532',
    negativeSurface: '#FBE5E1',
    accent: '#2F5BD3',
    accentSurface: '#E3EAFB',
    chartNeutral: '#8A8A8A',
    chartMarker: '#3B7BF0',
    headerGlow: '#E6E6E6',
    tabBar: '#FAFAFA',
    notification: '#F04438',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#9A9A9A',
    surface: '#1A1A1A',
    surfaceRaised: '#262626',
    border: '#2C2C2C',
    positive: '#5DBB63',
    positiveSurface: '#1E3A23',
    negative: '#F2735F',
    negativeSurface: '#3D1F1A',
    accent: '#8AB4F8',
    accentSurface: '#1E2A40',
    chartNeutral: '#9E9E9E',
    chartMarker: '#4C8DF6',
    headerGlow: '#2B2B2B',
    tabBar: '#121212',
    notification: '#F04438',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

/** Either palette; read the active one with `useAppTheme()` from `@/context/app-theme`. */
export type Palette = Record<ThemeColor, string>;

/** The promo banner artwork is dark in both themes, so its colours do not switch. */
export const PromoColors = {
  text: '#ffffff',
  buttonLabel: '#000000',
  gradient:['#0B0B0B', '#16123A', '#4A3BD1'],
  art: 'rgba(255, 255, 255, 0.35)',
} as const;

export const Radius = {
  sm: 8,
  md: 14,
  lg: 22,
  pill: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
