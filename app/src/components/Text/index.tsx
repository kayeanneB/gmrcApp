import React from 'react'
import { Text } from "react-native";

export class StyledText extends React.PureComponent<any,any>{
  render(){
    const {children, style = null, ...props} = this.props
    return <Text style={style} {...props}>
      {children}
    </Text>
  }
}

export default StyledText
