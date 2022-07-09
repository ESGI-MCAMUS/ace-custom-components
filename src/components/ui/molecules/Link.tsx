import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Text } from "native-base";

interface LinkProps {
  onPress: () => void;
  children: string;
  color?: string;
}

export const Link: React.FunctionComponent<LinkProps> = ({
  onPress,
  children,
  color,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text color={color ?? Colors.text} underline fontSize={"md"}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({});
