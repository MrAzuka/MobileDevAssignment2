import { Pressable, StyleSheet, View } from "react-native";

import { Icon } from "@/components/icon";
import { LogoTile } from "@/components/logo-tile";
import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useAppTheme } from "@/context/app-theme";
import type { Logo } from "@/types";

type MarketCollectionCardProps = {
  title: string;
  logos: Logo[];
  onPress?: () => void;
};

const LOGO_SIZE = 36;

export function MarketCollectionCard({
  title,
  logos,
  onPress,
}: MarketCollectionCardProps) {
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
      <ThemedText style={styles.title}>{title}</ThemedText>
      <View style={styles.footer}>
        <View style={styles.logos}>
          {logos.map((logo, index) => (
            <View
              key={index}
              style={[
                styles.logoRing,
                {
                  borderColor: colors.surface,
                  marginLeft: index === 0 ? 0 : -LOGO_SIZE / 3,
                },
              ]}
            >
              <LogoTile logo={logo} size={LOGO_SIZE} shape="circle" />
            </View>
          ))}
        </View>

        <View style={[styles.arrow, { backgroundColor: colors.surfaceRaised }]}>
          <Icon name="arrowRight" color={colors.text} size={20} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 150,
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
    justifyContent: "space-between",
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logos: {
    flexDirection: "row",
  },
  arrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  logoRing: {
    borderWidth: 2,
    borderRadius: LOGO_SIZE,
  },
});
