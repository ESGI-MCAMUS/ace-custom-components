import { Container } from "../../common/Container.component";
import { hp } from "../../../utils/functions";
import { Avatar, Menu, Pressable, Text } from "native-base";
import * as React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { Colors } from "../../../constants/Colors";
import { ReportModal } from "./ReportModal";

interface HeaderChatProps {
  title: string;
  picture?: string | null;
  onBack: () => void;
  userId?: number;
  useCreateReportMutation: any;
  setLoading: any;
  applicationState: any;
}

export const HeaderChat: React.FunctionComponent<HeaderChatProps> = ({
  title,
  picture,
  onBack,
  userId,
  useCreateReportMutation,
  setLoading,
  applicationState,
}) => {
  const [reportPopup, setReportPopup] = React.useState(false);
  return (
    <Container
      disablePaddingFix
      justifyContent="center"
      alignItems="center"
      color={Colors.secondary}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: hp("13%"),
        width: "100%",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10,
      }}
    >
      <ReportModal
        isOpen={reportPopup}
        onClose={() => setReportPopup(false)}
        reportType={"user"}
        reportedItemId={userId ?? -1}
        useCreateReportMutation={useCreateReportMutation}
        setLoading={setLoading}
        applicationState={applicationState}
      />
      <TouchableOpacity
        onPress={onBack}
        style={{
          position: "absolute",
          left: hp("2%"),
          alignSelf: "center",
          top: hp("7%"),
        }}
      >
        <Image
          source={require("../../../assets/images/back.png")}
          style={{
            width: hp("3.5%"),
            height: hp("3.5%"),
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          right: hp("2%"),
          alignSelf: "center",
          top: hp("7%"),
        }}
      >
        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <Image
                  source={require("../../../assets/images/menu.png")}
                  style={{
                    width: hp("3.5%"),
                    height: hp("3.5%"),
                  }}
                />
              </Pressable>
            );
          }}
        >
          <Menu.Item onPress={() => setReportPopup(true)}>Signaler</Menu.Item>
        </Menu>
      </View>

      <Container direction="column" justifyContent="center" alignItems="center">
        {picture !== "remove_image" && (
          <Avatar
            bg={Colors.primary}
            source={
              picture === null
                ? require("../../../assets/images/avatar.png")
                : { uri: picture }
            }
            size="sm"
          />
        )}
        <Text bold fontSize={"lg"}>
          {title}
        </Text>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({});
