import { Tabs } from "expo-router";

import { Icon } from "@/components/icon";
import { useAppTheme } from "@/context/app-theme";

const ICON_SIZE = 26;

export default function TabLayout() {
  const { colors } = useAppTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.border,
        },
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "homeFilled" : "home"}
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Tabs.Screen
        name="move"
        options={{
          title: "Move",
          tabBarIcon: ({ color }) => (
            <Icon name="transfer" color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <Icon name="activity" color={color} size={ICON_SIZE} />
          ),
        }}
      />
    </Tabs>
  );
}
