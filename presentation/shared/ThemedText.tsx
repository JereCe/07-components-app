import { Text, TextProps } from "react-native";
import React from "react";

interface Props extends TextProps {
  className?: string;
  type: "normal" | "h1" | "h2" | "semi-bold" | "link";
}

const ThemedText = ({ className, type }: Props) => {
  return <Text>ThemedText</Text>;
};

export default ThemedText;
