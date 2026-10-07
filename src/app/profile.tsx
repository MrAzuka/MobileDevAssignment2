import { Pressable, StyleSheet, View } from 'react-native';

import { Icon, type IconName } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme, type ThemePreference } from '@/context/app-theme';

const APPEARANCE_OPTIONS: { value: ThemePreference; label: string; icon: IconName }[] = [
  { value: 'system', label: 'System', icon: 'system' },
  { value: 'light', label: 'Light', icon: 'sun' },
  { value: 'dark', label: 'Dark', icon: 'moon' },
];

function AppearancePicker() {
  const { colors, preference, setPreference } = useAppTheme();

  return (
    <View
      accessibilityRole="radiogroup"
      style={[styles.picker, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {APPEARANCE_OPTIONS.map((option) => {
        const selected = preference === option.value;
        return (
          <Pressable
            key={option.value}
            onPress={() => setPreference(option.value)}
            accessibilityRole="radio"
            accessibilityState={{ checked: selected }}
            style={[styles.option, selected && { backgroundColor: colors.surfaceRaised }]}>
            <Icon
              name={option.icon}
              color={selected ? colors.text : colors.textSecondary}
              size={22}
            />
            <ThemedText
              themeColor={selected ? 'text' : 'textSecondary'}
              style={styles.optionLabel}>
              {option.label}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Appearance</ThemedText>
        <AppearancePicker />
        <ThemedText themeColor="textSecondary" style={styles.caption}>
          System matches your phone&apos;s light or dark setting.
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.three,
  },
  section: {
    gap: Spacing.two + 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 600,
  },
  picker: {
    flexDirection: 'row',
    padding: Spacing.one,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.one,
    paddingVertical: Spacing.three - 4,
    borderRadius: Radius.lg - Spacing.one,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: 600,
  },
  caption: {
    fontSize: 14,
    fontWeight: 400,
  },
});
