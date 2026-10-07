import { StyleSheet, Text, View } from "react-native";

import { Radius, Spacing } from "@/constants/theme";
import { useAppTheme } from "@/context/app-theme";
import { formatPercent } from "@/utils/format";

type PercentBadgeProps = {
  value: number;
};

export function PercentBadge({ value }: PercentBadgeProps) {
  const { colors } = useAppTheme();
  const isNegative = value < 0;
  const color = isNegative ? colors.negative : colors.positive;
  const label = (
    <Text style={[styles.label, { color }]}>{formatPercent(value)}</Text>
  );

  return (
    <View
      style={[
        styles.pill,
        {
          backgroundColor: isNegative
            ? colors.negativeSurface
            : colors.positiveSurface,
        },
      ]}
    >
      {label}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: 500,
  },
  pill: {
    paddingHorizontal: Spacing.two + 2,
    paddingVertical: Spacing.one + 2,
    borderRadius: Radius.sm + 2,
  },
});
