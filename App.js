import * as React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Write from './screens/WriteStoryScreen';
import Read from './screens/ReadStoryScreen';
import { KeyAvoidingView } from 'react-native-simple-toast';

export default class App extends React.Component {
  render(){
  return (
    <KeyboardAvoidingView>
      <Appcontainer/>
    </KeyboardAvoidingView>
  );
}}

const TabNavigator = createBottomTabNavigator({
  Write : {
    screen:Write
  },
  Read : {
    screen:Read
  }
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
      }
    }
  })
}
);
const Appcontainer = createAppContainer(TabNavigator);