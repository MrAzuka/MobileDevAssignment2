import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { Icon } from '@/components/icon';
import { Radius, Spacing } from '@/constants/theme';
import { useAppTheme } from '@/context/app-theme';

type SearchBarProps = Pick<TextInputProps, 'value' | 'onChangeText' | 'onSubmitEditing'> & {
  placeholder: string;
};

export function SearchBar({ placeholder, ...inputProps }: SearchBarProps) {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Icon name="search" color={colors.textSecondary} size={20} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        returnKeyType="search"
        style={[styles.input, { color: colors.text }]}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    height: 56,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
  input: {
    flex: 1,
    fontSize: 17,
    height: '100%',
  },
});
