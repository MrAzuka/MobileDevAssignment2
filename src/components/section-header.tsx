import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Icon } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';

type SectionHeaderProps = {
  title: string;
  /** When set, the title becomes tappable and shows a chevron. */
  onPress?: () => void;
  /** Buttons rendered on the right, e.g. edit and add. */
  actions?: ReactNode;
};

export function SectionHeader({ title, onPress, actions }: SectionHeaderProps) {
  const { colors } = useAppTheme();
  return (
    <View style={styles.row}>
      <Pressable
        disabled={!onPress}
        onPress={onPress}
        accessibilityRole={onPress ? 'button' : 'header'}
        style={({ pressed }) => [styles.titleRow, pressed && styles.pressed]}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        {onPress && <Icon name="chevronRight" color={colors.text} size={16} />}
      </Pressable>
      {actions && <View style={styles.actions}>{actions}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 44,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 600,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  pressed: {
    opacity: 0.6,
  },
});
