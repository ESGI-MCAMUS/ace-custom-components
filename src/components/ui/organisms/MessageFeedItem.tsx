//@ts-nocheck
import { Container } from "../../common/Container.component";
import { Message } from "../../../model/messages";
import { hp } from "../../../utils/functions";
import * as React from "react";
import { Colors } from "../../../constants/Colors";
import { Text } from "@react-native-material/core";

interface MessageFeedItemProps {
  message: Message;
  friendId: number;
  userId?: number;
}

export const MessageFeedItem: React.FunctionComponent<MessageFeedItemProps> = ({
  message,
  friendId,
  userId,
}) => (
  <Container
    disablePaddingFix
    style={{
      backgroundColor:
        message.sender_id !== friendId
          ? Colors.primary
          : Colors.friendMessageColor,
      alignSelf:
        message.sender_id !== friendId || userId === message.sender_id
          ? "flex-end"
          : "flex-start",
      borderRadius: 15,
      marginHorizontal: hp("2%"),
      marginVertical: hp(".25%"),
    }}
  >
    <Text
      style={{
        alignSelf: "flex-start",
        marginHorizontal: hp("2%"),
        marginVertical: hp(".5%"),
      }}
      color={
        message.sender_id !== friendId || userId === message.sender_id
          ? Colors.secondary
          : Colors.text
      }
    >
      {message.message}
    </Text>
    <Text
      style={{
        alignSelf: "center",
        marginHorizontal: hp("2%"),
        marginVertical: hp(".5%"),
        fontSize: hp("1%"),
        textAlign: "center",
        fontStyle: "italic",
      }}
      color={
        message.sender_id !== friendId || userId === message.sender_id
          ? Colors.secondary
          : Colors.text
      }
    >
      {`${new Date(message.createdAt).toLocaleString()} par ${
        message.sender.firstname
      } ${message.sender.lastname} (${message.sender.username})`}
    </Text>
  </Container>
);
