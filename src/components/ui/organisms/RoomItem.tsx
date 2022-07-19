import { Container } from "../../common/Container.component";
import { Room } from "../../../model/room";
import * as React from "react";
import { Colors } from "../../../constants/Colors";
import { Spacer } from "../../common/Spacer";
import { hp, wp } from "../../../utils/functions";
import { Link } from "../molecules/Link";
import { Avatar, Button, Divider, Text } from "@react-native-material/core";

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

      <Text
        variant="h5"
        style={{
          fontWeight: "bold",
        }}
      >
        {room.name}
      </Text>
      <Divider
        style={{
          width: wp("20%"),
        }}
      />
      <Container
        justifyContent="center"
        alignItems="center"
        direction="column"
        disablePaddingFix
      >
        <Avatar
          autoColor
          image={
            room.creator.profile_picture === null
              ? require("@images/avatar.png")
              : { uri: room.creator.profile_picture }
          }
        />
        <Text>{`Fil de disussion créé par ${room.creator.firstname} ${room.creator.lastname}`}</Text>
        <Text style={{ fontStyle: "italic" }}>{room.creator.username}</Text>
        <Spacer space="1%" />
        <Text style={{ fontStyle: "italic" }}>
          {new Date(room.createdAt).toLocaleDateString()} à{" "}
          {new Date(room.createdAt).toLocaleTimeString()}
        </Text>
      </Container>
      <Divider
        style={{
          width: wp("20%"),
        }}
      />
      <Button onPress={openFeed} title={"Ouvrir la discussion"} />
      <Spacer space="2%" />
      <Link onPress={onReport}>Signaler</Link>
      <Spacer space="2%" />
    </Container>
    <Spacer space="5%" />
  </>
);
