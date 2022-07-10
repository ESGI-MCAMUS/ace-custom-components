import { Container } from "../../common/Container.component";
import { Room } from "../../../model/room";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Avatar, Button, Divider, Text } from "native-base";
import { Spacer } from "../../common/Spacer";
import { hp, wp } from "../../../utils/functions";
import { Link } from "../molecules/Link";

interface RoomItemProps {
  room: Room;
  openFeed: () => void;
  onReport: () => void;
}

export const RoomItem: React.FunctionComponent<RoomItemProps> = ({
  room,
  openFeed,
  onReport,
}) => (
  <>
    <Container
      disablePaddingFix
      justifyContent="center"
      alignItems="center"
      color={Colors.secondary}
      style={{
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "100%",
        borderRadius: 10,
      }}
    >
      <Spacer space="2%" />

      <Text bold fontSize={"2xl"}>
        {room.name}
      </Text>
      <Divider width={wp("20%")} my="2" backgroundColor={Colors.inactive} />
      <Container
        justifyContent="center"
        alignItems="center"
        direction="column"
        disablePaddingFix
      >
        <Avatar
          bg={Colors.primary}
          source={
            room.creator.profile_picture === null
              ? require("../../../assets/images/avatar.png")
              : { uri: room.creator.profile_picture }
          }
          size="md"
        />
        <Text
          fontSize={"md"}
        >{`Fil de disussion créé par ${room.creator.firstname} ${room.creator.lastname}`}</Text>
        <Text fontSize={"sm"} italic>
          {room.creator.username}
        </Text>
        <Spacer space="1%" />
        <Text fontSize={"sm"} italic>
          {new Date(room.createdAt).toLocaleDateString()} à{" "}
          {new Date(room.createdAt).toLocaleTimeString()}
        </Text>
      </Container>
      <Divider width={wp("20%")} my="2" backgroundColor={Colors.inactive} />

      <Button onPress={openFeed}>Ouvrir la discussion</Button>
      <Spacer space="2%" />
      <Link onPress={onReport}>Signaler</Link>
      <Spacer space="2%" />
    </Container>
    <Spacer space="5%" />
  </>
);

const styles = StyleSheet.create({});
