import { Container } from '../../common/Container.component'
import { hp, wp } from '../../../utils/functions'
import { Button, Input } from 'native-base'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'

interface SendMessageBarProps {
  onSendMessage: () => void
  keyboardHeight: number
  message2Send: string
  setMessage2Send: (message: string) => void
}

export const SendMessageBar: React.FunctionComponent<SendMessageBarProps> = ({
  onSendMessage,
  keyboardHeight,
  message2Send,

  setMessage2Send,
}) => {
  return (
    <Container
      disablePaddingFix
      style={{
        marginBottom: hp('1%'),
        position: 'absolute',
        bottom: keyboardHeight,
        left: 0,
        height: hp('6%'),
        alignSelf: 'center',
      }}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Input
        placeholder='Votre message...'
        w={wp('80%')}
        size={'xl'}
        type={'text'}
        value={message2Send}
        onChangeText={(text) => setMessage2Send(text)}
      />
      <Button
        style={{
          width: wp('20%'),
        }}
        onPress={() => onSendMessage()}
      >
        Envoyer
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({})
