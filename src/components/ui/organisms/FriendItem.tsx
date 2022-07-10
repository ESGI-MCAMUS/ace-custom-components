import { Container } from "../../common/Container.component";
import { User } from "../../../model/application";
import { hp, wp } from "../../../utils/functions";
import { Avatar, Divider, Text } from "native-base";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";

interface FriendItemProps {
  friend: Partial<User> | undefined;
  onDelete?: () => void;
  onAdd?: () => void;
}

export const FriendItem: React.FunctionComponent<FriendItemProps> = ({
  friend,
  onDelete,
  onAdd,
}) => (
  <>
    <Container
      disablePaddingFix
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{
        marginVertical: hp(".5%"),
      }}
    >
      <Avatar
        bg={Colors.primary}
        source={
          friend?.profile_picture === null
            ? require("../../../assets/images/avatar.png")
            : { uri: friend!.profile_picture }
        }
        style={{
          marginRight: wp("2%"),
        }}
        size="md"
      />
      <Text
        fontSize={"md"}
        color="black"
        style={{
          marginRight: wp("2%"),
        }}
      >
        {friend?.firstname} {friend?.lastname} ({friend?.username})
      </Text>
      {onAdd && (
        <TouchableOpacity onPress={onAdd}>
          <Image
            source={require("../../../assets/images/friend_add.png")}
            style={{
              width: hp("4%"),
              height: hp("4%"),
              tintColor: Colors.primary,
              marginRight: wp("2%"),
            }}
          />
        </TouchableOpacity>
      )}
      {onDelete && (
        <TouchableOpacity onPress={onDelete}>
          <Image
            source={require("../../../assets/images/delete_friend.png")}
            style={{
              width: hp("4%"),
              height: hp("4%"),
              tintColor: Colors.danger,
            }}
          />
        </TouchableOpacity>
      )}
    </Container>
  </>
);

const styles = StyleSheet.create({});
