import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AccountRow } from "@/components/account-row";
import { Icon } from "@/components/icon";
import { IconButton } from "@/components/icon-button";
import { LogoTile } from "@/components/logo-tile";
import { PercentBadge } from "@/components/percent-badge";
import { SectionHeader } from "@/components/section-header";
import { SummaryCard } from "@/components/summary-card";
import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useAppTheme } from "@/context/app-theme";
import { ACCOUNTS, HOME_TICKERS, NET_WORTH, SUMMARY_CARDS } from "@/data/home";
import { findStock } from "@/data/market";
import type { Stock } from "@/types";
import { formatCurrency } from "@/utils/format";

function openStock(symbol: string) {
  router.push({ pathname: "/stock/[symbol]", params: { symbol } });
}

function HomeHeader() {
  return (
    <View style={styles.header}>
      <IconButton icon="bell" accessibilityLabel="Notifications" />
      <ThemedText style={styles.headerTitle}>Home</ThemedText>
      <View style={styles.headerActions}>
        <IconButton icon="gift" accessibilityLabel="Rewards" />
        <IconButton
          icon="profile"
          accessibilityLabel="Profile"
          onPress={() => router.push("/profile")}
        />
      </View>
    </View>
  );
}

type BalanceProps = {
  amount: string;
};

function Balance({ amount }: BalanceProps) {
  const { colors } = useAppTheme();
  return (
    <View style={styles.balance}>
      <View style={styles.balanceRow}>
        <ThemedText style={styles.balanceAmount}>{amount}</ThemedText>
      </View>
      <View style={styles.netWorth}>
        <ThemedText themeColor="textSecondary" style={styles.netWorthLabel}>
          Net worth
        </ThemedText>
        <Icon name="arrowRight" color={colors.textSecondary} size={16} />
      </View>
    </View>
  );
}

function TickerStrip({ stocks }: { stocks: Stock[] }) {
  const { colors } = useAppTheme();
  return (
    <View
      style={[
        styles.tickerStrip,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      {stocks.map((stock) => (
        <Pressable
          key={stock.symbol}
          onPress={() => openStock(stock.symbol)}
          accessibilityRole="button"
          style={({ pressed }) => [styles.ticker, pressed && styles.pressed]}
        >
          <LogoTile logo={stock.logo} size={30} />
          <ThemedText style={styles.tickerSymbol}>{stock.symbol}</ThemedText>
          <PercentBadge value={stock.changePercent} />
        </Pressable>
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  const money = (value: any) => {
    return formatCurrency(value);
  };
  const tickers = HOME_TICKERS.map(findStock).filter(
    (stock) => stock !== undefined,
  );

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + Spacing.two },
      ]}
    >
      <LinearGradient
        colors={[colors.headerGlow, colors.background]}
        style={[styles.glow, { height: insets.top + 360 }]}
      />

      <HomeHeader />
      <Balance amount={money(NET_WORTH)} />

      <View style={styles.cardRow}>
        {SUMMARY_CARDS.map((card) => (
          <SummaryCard
            key={card.id}
            title={card.title}
            amount={money(card.amount)}
          />
        ))}
      </View>

      <TickerStrip stocks={tickers} />

      <View style={styles.section}>
        <SectionHeader
          title="Accounts"
          actions={
            <>
              <IconButton
                icon="pencil"
                variant="filled"
                accessibilityLabel="Edit accounts"
              />
              <IconButton
                icon="plus"
                variant="inverse"
                accessibilityLabel="Add account"
              />
            </>
          }
        />
        {ACCOUNTS.map((account) => (
          <AccountRow
            key={account.id}
            name={account.name}
            type={account.type}
            balance={money(account.balance)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.five,
    gap: Spacing.three,
  },
  glow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
  headerActions: {
    flexDirection: "row",
  },
  balance: {
    alignItems: "center",
    paddingTop: Spacing.six,
    paddingBottom: Spacing.five,
    gap: Spacing.one,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
  balanceAmount: {
    fontSize: 46,
    lineHeight: 56,
    fontWeight: 700,
  },
  netWorth: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.one,
  },
  netWorthLabel: {
    fontSize: 17,
    fontWeight: 600,
  },
  cardRow: {
    flexDirection: "row",
    gap: Spacing.three - 4,
  },
  tickerStrip: {
    flexDirection: "row",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
    gap: Spacing.four,
  },
  ticker: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two + 2,
  },
  tickerSymbol: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,
  },
  section: {
    marginTop: Spacing.four,
    gap: Spacing.three - 4,
  },
});
