import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionTile } from '@/components/action-tile';
import { SearchBar } from '@/components/search-bar';
import { SectionHeader } from '@/components/section-header';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';
import { MOVE_MONEY_ACTIONS, SEND_AND_PAY_ACTIONS } from '@/data/move';
import type { MoveAction } from '@/types';
import { chunk } from '@/utils/chunk';

const TILE_GAP = Spacing.three - 4;

type ActionGridProps = {
  actions: MoveAction[];
  tone: 'accent' | 'neutral';
};

/** Two-column grid; rows are built explicitly so both tiles share the width exactly. */
function ActionGrid({ actions, tone }: ActionGridProps) {
  return (
    <View style={styles.grid}>
      {chunk(actions, 2).map((row) => (
        <View key={row[0].id} style={styles.gridRow}>
          {row.map((action) => (
            <ActionTile
              key={action.id}
              label={action.label}
              icon={action.icon}
              iconText={action.iconText}
              tone={tone}
            />
          ))}
          {row.length === 1 && <View style={styles.gridSpacer} />}
        </View>
      ))}
    </View>
  );
}

export default function MoveScreen() {
  const { colors } = useAppTheme();
  const [query, setQuery] = useState('');

  const filter = (actions: MoveAction[]) =>
    actions.filter((action) => action.label.toLowerCase().includes(query.trim().toLowerCase()));
  const moveMoney = filter(MOVE_MONEY_ACTIONS);
  const sendAndPay = filter(SEND_AND_PAY_ACTIONS);

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <ThemedText style={styles.title}>Move</ThemedText>
        <SearchBar placeholder="What do you want to do?" value={query} onChangeText={setQuery} />

        {moveMoney.length > 0 && (
          <View style={styles.section}>
            <SectionHeader title="Move money" />
            <ActionGrid actions={moveMoney} tone="accent" />
          </View>
        )}

        {sendAndPay.length > 0 && (
          <View style={styles.section}>
            <SectionHeader title="Send and pay" />
            <ActionGrid actions={sendAndPay} tone="neutral" />
          </View>
        )}
      </ScrollView>
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
    gap: Spacing.three,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: Spacing.three,
  },
  section: {
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  grid: {
    gap: TILE_GAP,
  },
  gridRow: {
    flexDirection: 'row',
    gap: TILE_GAP,
  },
  gridSpacer: {
    flex: 1,
  },
});
