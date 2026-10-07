import { StyleSheet, Text, View } from 'react-native';

import { Radius } from '@/constants/theme';
import type { Logo } from '@/types';

type LogoTileProps = {
  logo: Logo;
  size?: number;
  shape?: 'rounded' | 'circle';
};

export function LogoTile({ logo, size = 44, shape = 'rounded' }: LogoTileProps) {
  const fontSize = logo.mark.length > 1 ? size * 0.3 : size * 0.5;

  return (
    <View
      style={[
        styles.tile,
        {
          width: size,
          height: size,
          borderRadius: shape === 'circle' ? size / 2 : Radius.sm + 2,
          backgroundColor: logo.background,
        },
      ]}>
      <Text style={[styles.mark, { color: logo.color, fontSize }]}>{logo.mark}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    fontWeight: 800,
  },
});
