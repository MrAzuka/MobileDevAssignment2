import { Pressable, StyleSheet } from 'react-native';

import { Icon, type IconName } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';

type CategoryChipProps = {
  label: string;
  icon?: IconName;
  /** Filled with the text colour, for the active filter. */
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryChip({ label, icon, selected = false, onPress }: CategoryChipProps) {
  const { colors } = useAppTheme();
  const foreground = selected ? colors.background : colors.text;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={({ pressed }) => [
        styles.chip,
        {
          borderColor: selected ? colors.text : colors.border,
          backgroundColor: selected ? colors.text : pressed ? colors.surface : 'transparent',
        },
      ]}>
      {icon && <Icon name={icon} color={foreground} size={18} />}
      <ThemedText style={[styles.label, { color: foreground }]}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    height: 44,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 1.5,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
  },
});
