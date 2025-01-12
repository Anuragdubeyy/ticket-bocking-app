import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";

export default function Root() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <Slot />
    </>
  );
}
