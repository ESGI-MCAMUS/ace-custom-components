import { Spacer } from '../../common/Spacer'
import { Skeleton } from 'native-base'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'

interface MessageSkeletonProps {}

export const MessageSkeleton: React.FunctionComponent<
  MessageSkeletonProps
> = ({}) => (
  <>
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
    <Skeleton.Text px='5' />
    <Spacer space={'2%'} />
  </>
)

const styles = StyleSheet.create({})
