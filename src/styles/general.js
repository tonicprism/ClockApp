import { colors, fonts } from "./index";
import { StyleSheet } from "react-native";
const general = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    height: "15%",
    padding: "10%",
  },
  headerText: {
    color: colors.textPrimaryColor,
    fontSize: fonts.title,
  },
  normalText: {
    color: colors.textPrimaryColor,
    fontSize: fonts.title,
  },
  alternativeText: {
    color: colors.textTitleColor,
    fontSize: fonts.title,
  },
  circleBackground: {
    borderColor: colors.textTitleColor,
    borderWidth: 5,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
});

export default general;
