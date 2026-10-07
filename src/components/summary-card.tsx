import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useAppTheme } from "@/context/app-theme";

type SummaryCardProps = {
  title: string;
  amount: string;
  onPress?: () => void;
};

export function SummaryCard({ title, amount, onPress }: SummaryCardProps) {
  const { colors } = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.text}>
        <ThemedText themeColor="textSecondary" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText style={styles.amount}>{amount}</ThemedText>
      </View>
      <ThemedText
        themeColor="textSecondary"
        style={[styles.text, styles.footnote]}
      ></ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
    gap: Spacing.two,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    paddingHorizontal: Spacing.three,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
  },
  amount: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 600,
  },
  footnote: {
    fontSize: 14,
    lineHeight: 18,
  },
});
