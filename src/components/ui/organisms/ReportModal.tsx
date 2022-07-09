import { convertTypeToTitile, selectValue } from '../../../utils/reportModal'
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Input,
  Modal,
  Select,
  Text,
  useToast,
} from 'native-base'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../../constants/Colors'

interface ReportModalProps {
  isOpen: boolean
  onClose: () => void
  reportType: 'user' | 'room' | 'message'
  reportedItemId: number
  useCreateReportMutation: any
  setLoading: any
  applicationState: any
}

export const ReportModal: React.FunctionComponent<ReportModalProps> = ({
  isOpen,
  onClose,
  reportType,
  reportedItemId,
  useCreateReportMutation,
  setLoading,
  applicationState,
}) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const [reportTypeValue, setReportTypeValue] = React.useState<
    | 'IDENTITY_THEFT'
    | 'SPAM'
    | 'HACKED_ACCOUNT'
    | 'INAPROPIATE_CONTENT'
    | 'OTHER'
    | undefined
  >()
  // @ts-ignore
  const { user } = useSelector(applicationState)

  const [reportComment, setReportComment] = React.useState('')

  const [addReport, addReportResult] = useCreateReportMutation()

  React.useEffect(() => {
    console.log(addReportResult)
    if (addReportResult.isLoading) {
      dispatch(setLoading(true))
    } else if (addReportResult.isError) {
      dispatch(setLoading(false))
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Box bg={Colors.danger} px='2' py='1' rounded='sm' mb={5}>
              <Text color={Colors.secondary}>
                Impossible de créer le signalement ! Veuillez réessayer plus
                tard
              </Text>
            </Box>
          )
        },
      })
    } else if (addReportResult.isSuccess) {
      dispatch(setLoading(false))
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Box bg={Colors.success} px='2' py='1' rounded='sm' mb={5}>
              <Text color={Colors.secondary}>
                Votre signalement a été émis avec succès !
              </Text>
            </Box>
          )
        },
      })
      onClose()
    }
  }, [addReportResult])

  return (
    <Modal isOpen={isOpen} onClose={onClose} animationPreset='slide'>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{`Signaler ${convertTypeToTitile(
          reportType
        )}`}</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Type de signalement</FormControl.Label>
            <Select
              selectedValue={reportTypeValue}
              minWidth='200'
              accessibilityLabel='Choisir une raison'
              placeholder='Choisir une raison'
              _selectedItem={{
                bg: Colors.primary,
                color: Colors.secondary,
                endIcon: <CheckIcon size='5' />,
              }}
              mt={1}
              /* @ts-ignore */
              onValueChange={(itemValue) => setReportTypeValue(itemValue)}
            >
              {selectValue.map(
                (item: { text: string; value: string }, index) => (
                  <Select.Item
                    key={index}
                    label={item.text}
                    value={item.value}
                  />
                )
              )}
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label>Commentaire</FormControl.Label>
            <Input
              value={reportComment}
              onChangeText={(text) => setReportComment(text)}
              placeholder='Commentaire...'
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant='ghost' colorScheme='blueGray' onPress={onClose}>
              Annuler
            </Button>
            <Button
              onPress={() => {
                console.log({
                  user_reporter: user.id,
                  user_reported: reportType === 'user' ? reportedItemId : null,
                  message_reported:
                    reportType === 'message' ? reportedItemId : null,
                  room_reported: reportType === 'room' ? reportedItemId : null,
                  subject: reportTypeValue!,
                  explanation: reportComment,
                })

                addReport({
                  user_reporter: user.id,
                  user_reported: reportType === 'user' ? reportedItemId : null,
                  message_reported:
                    reportType === 'message' ? reportedItemId : null,
                  room_reported: reportType === 'room' ? reportedItemId : null,
                  subject: reportTypeValue!,
                  explanation: reportComment,
                })
              }}
            >
              Signaler
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

const styles = StyleSheet.create({})
