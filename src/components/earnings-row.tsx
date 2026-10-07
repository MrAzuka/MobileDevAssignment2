import { StyleSheet, View } from "react-native";

import { LogoTile } from "@/components/logo-tile";
import { PercentBadge } from "@/components/percent-badge";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAppTheme } from "@/context/app-theme";
import type { EarningsEvent, Stock } from "@/types";
import { formatCurrency } from "@/utils/format";

type EarningsRowProps = {
  stock: Stock;
  event: EarningsEvent;
  showDivider?: boolean;
  onPress?: () => void;
};

export function EarningsRow({
  stock,
  event,
  showDivider = false,
  onPress,
}: EarningsRowProps) {
  const { colors } = useAppTheme();
  return (
    <View>
      <LogoTile logo={stock.logo} />
      <View
        style={[
          styles.body,
          showDivider && { borderBottomColor: colors.border },
        ]}
      >
        <View style={styles.left}>
          <ThemedText numberOfLines={1} style={styles.primary}>
            {stock.name}
          </ThemedText>
          <View style={styles.tickerLine}>
            <ThemedText themeColor="textSecondary" style={styles.secondary}>
              {stock.symbol}
            </ThemedText>
            <PercentBadge value={stock.changePercent} />
          </View>
        </View>
        <View style={styles.right}>
          <ThemedText style={styles.primary}>
            {formatCurrency(event.epsEstimate)} EPS est.
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.secondary}>
            {event.date}, {event.session}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
  },
  pressed: {
    opacity: 0.6,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  left: {
    flex: 1,
  },
  tickerLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
  right: {
    alignItems: "flex-end",
  },
  primary: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 600,
  },
  secondary: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 400,
  },
});
