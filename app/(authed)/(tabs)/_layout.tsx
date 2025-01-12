import React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native"; // Ensure Text is imported

export default function TabLayout() {
  const tabs = [
    {
      showFor: [],
      name: "events",
      displayName: "Events",
      icon: "calendar",
      option: {
        headerShown: false,
      },
    },
    {
      showFor: [],
      name: "tickets",
      displayName: "My Tickets",
      icon: "ticket",
      option: {
        headerShown: false,
      },
    },
    {
      showFor: [],
      name: "scan-ticket",
      displayName: "Scan Ticket",
      icon: "scan",
      option: {
        headerShown: false,
      },
    },
    {
      showFor: [],
      name: "settings",
      displayName: "Settings",
      icon: "cog",
      option: {
        headerShown: false,
      },
    },
  ];

  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            ...tab.option,
            headerTitle: tab.displayName,
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "black" : "gray",
                  fontSize: 12,
                }}
              >
                {tab.displayName}
              </Text>
            ),
            // tabBarIcon: ({ focused, color, size }) => (
            //   // Replace `TabBarIcon` with your icon component library, such as `Ionicons` or `MaterialIcons`
            //   <TabBarIcon name={tab.icon} size={size || 24} color={color || "gray"} />
            // ),
          }}
        />
      ))}
    </Tabs>
  );
}

// Example for TabBarIcon (replace with your icon library)