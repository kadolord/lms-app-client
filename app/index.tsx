import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/(routes)/onboarding"} />;
};

export default index;
