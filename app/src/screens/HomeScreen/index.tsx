import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Styles } from "./style";

class HomeScreen extends React.Component<any, any>{
  render(){
    return <ScrollView contentContainerStyle={Styles.scrollContainer}>
      <Text>HOME</Text>
    </ScrollView>
  }
}

export default HomeScreen
