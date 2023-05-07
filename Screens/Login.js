import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/base";

const Login = ({ navigation }) => {
  const [otp, setOtp] = useState(true);
  const [verift, setVerify] = useState(false);
  const otpSend = () => {
    setOtp(false);
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>
          HEY THERE <Text style={styles.colorGreen}>!</Text>
        </Text>

        <Text style={styles.loginText}>HOW YOU </Text>
        <Text style={[styles.loginText, styles.colorGreen]}>FEELIŃ ?</Text>
      </View>
      <View style={styles.LogRegFormContainer}>
        <Input label="EMAIL / PHONE" placeholder="Enter email or phone" />
        {!otp && (
          <>
            <Input label="OTP" placeholder="Enter OTP" />
            <Text style={styles.logRegFormTextOTP}>
              Did not recived OTP?{" "}
              <Text style={styles.colorGreen}>
                Wait for <Text>01:20s</Text>
              </Text>
              {/* <Text style={style.colorGreen}>Send Again</Text> */}
            </Text>
          </>
        )}
        {otp && (
          <Button
            title="SEND OTP"
            color="#3abf78"
            buttonStyle={{
              padding: 18,
              borderRadius: 25,
              margin: 6,
              marginBottom: 10,
            }}
            onPress={otpSend}
          />
        )}

        {!otp && (
          <Button
            title="VERIFY OTP"
            color="#3abf78"
            buttonStyle={{
              padding: 18,
              borderRadius: 25,
              margin: 6,
              marginBottom: 10,
            }}
            onPress={() => setVerify(true)}
          />
        )}
        <Button
          title="CONTINUE WITH GOOGLE"
          icon={{
            name: "google-plus-square",
            type: "font-awesome",
            size: 30,
            color: "#3abf78",
          }}
          color="white"
          type="outline"
          titleStyle={{ color: "#3abf78", marginLeft: 5 }}
          buttonStyle={{
            padding: 15,
            borderRadius: 25,
            margin: 6,
            borderColor: "#3abf78",
            borderWidth: 1.5,
            marginBottom: 10,
          }}
        />
        <Text style={styles.logRegFormText}>
          New To Feeliń ?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.colorGreen}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
  },
  loginText: {
    fontSize: 60,
    fontWeight: 900,
  },
  loginTextContainer: {
    textAlign: "left",
    marginBottom: 40,
  },
  colorGreen: {
    color: "#3abf78",
  },
  LogRegFormContainer: {
    flex: 1,
  },
  colorGreen: {
    color: "#3abf78",
  },
  logRegFormText: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  logRegFormTextOTP: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "right",
    marginTop: -10,
    marginBottom: 40,
  },
});
