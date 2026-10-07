import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Icon, type IconName } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';

type ActionTileProps = {
  label: string;
  icon: IconName;
  /** Replaces the icon with a short brand mark, e.g. "VISA". */
  iconText?: string;
  /** `accent` tints the icon square blue; `neutral` keeps it grey. */
  tone?: 'accent' | 'neutral';
  onPress?: () => void;
};

export function ActionTile({ label, icon, iconText, tone = 'neutral', onPress }: ActionTileProps) {
  const { colors } = useAppTheme();
  const iconColor = tone === 'accent' ? colors.accent : colors.text;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.tile,
        { backgroundColor: colors.surface, borderColor: colors.border },
        pressed && styles.pressed,
      ]}>
      <View
        style={[
          styles.iconBox,
          { backgroundColor: tone === 'accent' ? colors.accentSurface : colors.surfaceRaised },
        ]}>
        {iconText ? (
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[
              styles.iconText,
              { color: iconColor, fontSize: iconText.length > 4 ? 8 : 11 },
            ]}>
            {iconText}
          </Text>
        ) : (
          <Icon name={icon} color={iconColor} size={20} />
        )}
      </View>
      <ThemedText style={styles.label} numberOfLines={2}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    minHeight: 112,
    gap: Spacing.three,
    padding: Spacing.three,
    paddingTop: Spacing.three - 2,
    borderRadius: Radius.lg,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.7,
  },
  iconBox: {
    minWidth: 36,
    height: 36,
    alignSelf: 'flex-start',
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  iconText: {
    fontWeight: 800,
    fontStyle: 'italic',
  },
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 500,
  },
});
