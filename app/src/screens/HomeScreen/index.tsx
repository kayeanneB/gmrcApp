import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Styles } from "./style";
import Button from "../../components/Button";

class HomeScreen extends React.Component<any, any>{
  render(){
    return <ScrollView contentContainerStyle={Styles.scrollContainer}>
      <Text>HOME</Text>
      <Button onPress={this.props.navigation.navigate()}>GO To Samples</Button>
    </ScrollView>
  }
}

export default HomeScreen
