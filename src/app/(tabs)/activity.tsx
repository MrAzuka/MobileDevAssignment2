import { useState } from 'react';
import { ScrollView, SectionList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryChip } from '@/components/category-chip';
import { SearchBar } from '@/components/search-bar';
import { ThemedText } from '@/components/themed-text';
import { TransactionRow } from '@/components/transaction-row';
import { Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';
import { ACTIVITY_FILTERS, TRANSACTIONS } from '@/data/activity';
import type { Transaction, TransactionKind } from '@/types';

type Filter = 'all' | TransactionKind;
type Section = { title: string; data: Transaction[] };

/** Groups consecutive transactions that share a date label (the data is newest first). */
function groupByDate(transactions: Transaction[]): Section[] {
  const sections: Section[] = [];
  for (const transaction of transactions) {
    const last = sections[sections.length - 1];
    if (last?.title === transaction.dateLabel) {
      last.data.push(transaction);
    } else {
      sections.push({ title: transaction.dateLabel, data: [transaction] });
    }
  }
  return sections;
}

export default function ActivityScreen() {
  const { colors } = useAppTheme();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const search = query.trim().toLowerCase();
  const visible = TRANSACTIONS.filter(
    (transaction) =>
      (filter === 'all' || transaction.kind === filter) &&
      (transaction.title.toLowerCase().includes(search) ||
        transaction.account.toLowerCase().includes(search)),
  );

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: colors.background }]} edges={['top']}>
      <SectionList
        sections={groupByDate(visible)}
        keyExtractor={(transaction) => transaction.id}
        keyboardShouldPersistTaps="handled"
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <ThemedText style={styles.title}>Activity</ThemedText>
            <SearchBar placeholder="Search activity" value={query} onChangeText={setQuery} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filtersRow}
              contentContainerStyle={styles.filters}>
              {ACTIVITY_FILTERS.map((option) => (
                <CategoryChip
                  key={option.id}
                  label={option.label}
                  selected={filter === option.id}
                  onPress={() => setFilter(option.id)}
                />
              ))}
            </ScrollView>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <ThemedText themeColor="textSecondary" style={styles.sectionTitle}>
            {section.title}
          </ThemedText>
        )}
        renderItem={({ item }) => (
          <TransactionRow
            title={item.title}
            account={item.account}
            amount={item.amount}
            icon={item.icon}
            pending={item.pending}
          />
        )}
        ListEmptyComponent={
          <ThemedText themeColor="textSecondary" style={styles.empty}>
            No activity matches your search.
          </ThemedText>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.five,
  },
  header: {
    gap: Spacing.three,
    marginBottom: Spacing.two,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: Spacing.three,
  },
  /** Bleeds to the screen edges so chips scroll off-screen, not off the padding. */
  filtersRow: {
    marginHorizontal: -Spacing.three,
  },
  filters: {
    gap: Spacing.two + 2,
    paddingHorizontal: Spacing.three,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    marginTop: Spacing.four,
    marginBottom: Spacing.one,
  },
  empty: {
    textAlign: 'center',
    marginTop: Spacing.five,
  },
});
