import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CategoryChip } from "@/components/category-chip";
import { EarningsRow } from "@/components/earnings-row";
import { SearchBar } from "@/components/search-bar";
import { SectionHeader } from "@/components/section-header";
import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useAppTheme } from "@/context/app-theme";
import { CATEGORIES, EARNINGS, findStock } from "@/data/market";
import type { EarningsEvent } from "@/types";
import { chunk } from "@/utils/chunk";

const GUTTER = Spacing.three;
const ROWS_PER_PAGE = 3;
/** How much of the next earnings column peeks in from the right. */
const PEEK = 40;

function WatchlistEmpty() {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.watchlistEmpty, { borderColor: colors.border }]}>
      <ThemedText style={styles.watchlistText}>
        Add stocks to your watchlist to track their performance in real time
      </ThemedText>
    </View>
  );
}

function EarningsPager() {
  const { width } = useWindowDimensions();
  const columnWidth = width - GUTTER * 2 - PEEK;
  const pages = chunk(EARNINGS, ROWS_PER_PAGE);

  const renderPage = ({ item: page }: { item: EarningsEvent[] }) => (
    <View style={{ width: columnWidth }}>
      {page.map((event, index) => {
        const stock = findStock(event.symbol);
        if (!stock) return null;
        return (
          <EarningsRow
            key={event.symbol}
            stock={stock}
            event={event}
            showDivider={index < page.length - 1}
          />
        );
      })}
    </View>
  );

  return (
    <FlatList
      horizontal
      data={pages}
      keyExtractor={(page) => page[0].symbol}
      renderItem={renderPage}
      showsHorizontalScrollIndicator={false}
      snapToInterval={columnWidth + GUTTER}
      decelerationRate="fast"
      contentContainerStyle={styles.horizontalList}
      ItemSeparatorComponent={() => <View style={{ width: GUTTER }} />}
    />
  );
}

export default function DiscoverScreen() {
  const { colors } = useAppTheme();
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.padded}>
          <SearchBar
            placeholder="Search"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.horizontalList, styles.chips]}
        >
          {CATEGORIES.map((category) => (
            <CategoryChip
              key={category.id}
              label={category.label}
              icon={category.icon}
            />
          ))}
        </ScrollView>

        <View style={[styles.padded, styles.section]}>
          <SectionHeader title="Watchlist" onPress={() => {}} />
          <WatchlistEmpty />
        </View>

        <View style={styles.section}>
          <View style={styles.padded}>
            <SectionHeader title="Earnings" onPress={() => {}} />
          </View>
          <EarningsPager />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingTop: Spacing.two,
    paddingBottom: Spacing.five,
    gap: Spacing.four,
  },
  padded: {
    paddingHorizontal: GUTTER,
  },
  section: {
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  horizontalList: {
    paddingHorizontal: GUTTER,
  },
  chips: {
    gap: Spacing.two + 2,
  },
  collections: {
    gap: Spacing.three - 4,
  },
  watchlistEmpty: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.five,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  watchlistText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
    textAlign: "center",
  },
});
