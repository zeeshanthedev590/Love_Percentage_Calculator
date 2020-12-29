import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Result({ data }) {
  //   console.log(data);
  if (data == "loading") {
    return (
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
        }}
      >
        ---
      </Text>
    );
  }
  if (data.message) {
    return (
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          backgroundColor: "red",
        }}
      >
        Try Again
      </Text>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>
          {data.fname} & {data.sname}
        </Text>
        <Text style={{ fontSize: 30 }}>{data.percentage}%</Text>
        <Text style={{ fontSize: 30 }}>{data.result}</Text>
      </View>
    );
  }
}

export default Result;
