// @ts-nocheck
import { Container } from '../../common/Container.component'
import { Message } from '../../../model/messages'
import { hp } from '../../../utils/functions'
import { Text } from 'native-base'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../../constants/Colors'

interface MessageFeedItemProps {
  message: Message
  friendId: number
  userId?: number
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
          ? 'flex-end'
          : 'flex-start',
      borderRadius: 15,
      marginHorizontal: hp('2%'),
      marginVertical: hp('.25%'),
    }}
  >
    <Text
      fontSize={'md'}
      style={{
        alignSelf: 'flex-start',
        marginHorizontal: hp('2%'),
        marginVertical: hp('.5%'),
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
      fontSize={'xs'}
      style={{
        alignSelf: 'center',
        marginHorizontal: hp('2%'),
        marginVertical: hp('.5%'),
      }}
      textAlign='center'
      italic
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
)

const styles = StyleSheet.create({})
