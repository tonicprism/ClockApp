import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { general } from "../styles/index";
import moment from "moment";

export default () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("LTS"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <View style={general.header}>
        <Text style={general.headerText}>Clock App</Text>
      </View>
      <View style={general.container}>
        <View style={general.circleBackground}>
          <Text style={general.alternativeText}>{time}</Text>
        </View>
      </View>
    </>
  );
};
