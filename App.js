import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { Appbar } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import Result from "./Result";

export default class App extends Component {
  state = {
    fname: "",
    sname: "",
    result: "loading",
  };
  Submitit = () => {
    // console.log("call ho rha ha");
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
          // Api Key
          "X-RapidAPI-Key":
            "d4c6f0bceamshfd3c7421a325062p10b1c2jsnedbdc20f5d80",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => this.setState({ result: data }));
  };
  render() {
    return (
      <View style={styles.body}>
        <Appbar.Header>
          <Appbar.Content
            style={styles.center}
            title="Love % Calculator"
            subtitle="By Zeeshan Khalid"
          />
        </Appbar.Header>
        <TextInput
          onChangeText={(text) => this.setState({ fname: text })}
          style={styles.input}
          label="Enter The Name Of Person1"
        />
        <TextInput
          onChangeText={(text) => this.setState({ sname: text })}
          style={styles.input}
          label="Enter The Name Of Person2"
        />
        <Button
          style={styles.btn}
          icon={require("./assets/heart.png")}
          mode="contained"
          onPress={this.Submitit}
        >
          Calculate
        </Button>
        <Result data={this.state.result} />
        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  center: {
    alignItems: "center",
  },
  input: {
    margin: 20,
  },
  btn: {
    margin: 40,
    marginBottom: 10,
  },
});
