import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';

type AccountRowProps = {
  name: string;
  type: string;
  /** Already formatted, so the screen can mask it when balances are hidden. */
  balance: string;
  onPress?: () => void;
};

export function AccountRow({ name, type, balance, onPress }: AccountRowProps) {
  const { colors } = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: colors.surface, borderColor: colors.border },
        pressed && styles.pressed,
      ]}>
      <View>
        <ThemedText style={styles.name}>{name}</ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.type}>
          {type}
        </ThemedText>
      </View>
      <ThemedText style={styles.balance}>{balance}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three + 2,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
  },
  type: {
    fontSize: 17,
  },
  balance: {
    fontSize: 18,
    fontWeight: 500,
  },
});
