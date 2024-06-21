import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const useLogin = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    emailOrUsername: "",
    password: "",
  });

  return { isPasswordVisible, buttonSpinner, userInfo };
};

export default useLogin;
