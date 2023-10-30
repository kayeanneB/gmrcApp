import React from 'react'
import { TouchableOpacity } from "react-native";
import Text from "../Text"

export class Button extends React.Component<any, any>{
  state = {
    pressed: false
  }

  resetPressedState = () => {
    this.setState({
      pressed: false,
    });
  };

  render(){
    return <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
      <Text>{this.props.title}</Text>
    </TouchableOpacity>
  }
}

export default Button
