import { Container } from '../../common/Container.component'
import { Message } from '../../../model/messages'
import { hp } from '../../../utils/functions'
import { Text } from 'native-base'
import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Colors } from '../../../constants/Colors'

interface MessageItemProps {
  message: Message
  friendId: number
  openPopover: Dispatch<SetStateAction<boolean>>
  setMessagePopover: (message: Message) => void
  userId: number
}

export const MessageItem: React.FunctionComponent<MessageItemProps> = ({
  message,
  friendId,
  openPopover,
  setMessagePopover,
  userId,
}) => (
  <TouchableOpacity
    onLongPress={
      message.deletedAt
        ? () => null
        : () => {
            openPopover(true)
            setMessagePopover(message)
          }
    }
  >
    <Container
      disablePaddingFix
      style={{
        backgroundColor:
          message.sender_id !== friendId
            ? Colors.primary
            : Colors.friendMessageColor,
        alignSelf: message.sender_id !== friendId ? 'flex-end' : 'flex-start',
        borderRadius: 15,
        marginHorizontal: hp('2%'),
        marginVertical: hp('.25%'),
      }}
    >
      <Text
        style={{
          alignSelf: 'center',
          marginHorizontal: hp('2%'),
          marginVertical: hp('.5%'),
        }}
        italic={message.deletedAt ? true : false}
        color={message.sender_id !== friendId ? Colors.secondary : Colors.text}
      >
        {message.deletedAt ? 'Ce message a été supprimé' : message.message}
      </Text>
      {message.createdAt !== message.updatedAt && !message.deletedAt && (
        <Text
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: hp('2%'),
            marginVertical: hp('.5%'),
          }}
          italic
          fontSize={'2xs'}
          color={
            message.sender_id !== friendId ? Colors.secondary : Colors.text
          }
        >
          (Modifié)
        </Text>
      )}
    </Container>
  </TouchableOpacity>
)

const styles = StyleSheet.create({})
