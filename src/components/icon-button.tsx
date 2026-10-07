import { Pressable, StyleSheet, View } from "react-native";

import { Icon, type IconName } from "@/components/icon";
import { useAppTheme } from "@/context/app-theme";

type IconButtonProps = {
  icon: IconName;
  accessibilityLabel: string;
  onPress?: () => void;
  variant?: "plain" | "filled" | "inverse";
  size?: number;
};

export function IconButton({
  icon,
  onPress,
  variant = "plain",
  size = 44,
}: IconButtonProps) {
  const { colors } = useAppTheme();
  const background = {
    plain: "transparent",
    filled: colors.surfaceRaised,
    inverse: colors.text,
  }[variant];

  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: background,
        },
        pressed && styles.pressed,
      ]}
    >
      <Icon
        name={icon}
        color={variant === "inverse" ? colors.background : colors.text}
        size={size * 0.55}
      />
      {
        <View
          style={[
            styles.badge,
            {
              backgroundColor: colors.notification,
              borderColor: colors.background,
            },
          ]}
        />
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.6,
  },
  badge: {
    position: "absolute",
    top: 6,
    right: 7,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
