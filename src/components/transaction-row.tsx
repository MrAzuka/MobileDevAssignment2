import { Pressable, StyleSheet, View } from 'react-native';

import { Icon, type IconName } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';
import { formatCurrency } from '@/utils/format';

type TransactionRowProps = {
  title: string;
  account: string;
  /** Positive for money in (shown green with "+"), negative for money out. */
  amount: number;
  icon: IconName;
  pending?: boolean;
  onPress?: () => void;
};

export function TransactionRow({
  title,
  account,
  amount,
  icon,
  pending = false,
  onPress,
}: TransactionRowProps) {
  const { colors } = useAppTheme();
  const isIncoming = amount > 0;
  const formatted = `${isIncoming ? '+' : '−'}${formatCurrency(Math.abs(amount))}`;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={[styles.iconCircle, { backgroundColor: colors.surfaceRaised }]}>
        <Icon name={icon} color={colors.text} size={18} />
      </View>
      <View style={styles.body}>
        <ThemedText numberOfLines={1} style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.subtitle}>
          {pending ? `${account} · Pending` : account}
        </ThemedText>
      </View>
      <ThemedText style={[styles.amount, isIncoming && { color: colors.positive }]}>
        {formatted}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.two + 4,
  },
  pressed: {
    opacity: 0.6,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
  },
  amount: {
    fontSize: 16,
    fontWeight: 500,
  },
});
