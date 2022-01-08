
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import CreatePost from '../screens/CreatePost'
import Login from '../screens/Login'


const Stack = createStackNavigator()
const InstaNavigator = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator  initialRouteName='login' screenOptions={{headerShown:false}}>
              <Stack.Screen   name='home' component={HomeScreen} />
              <Stack.Screen  options={{headerShown: true, headerTitle: 'Create a post' , headerTintColor: 'white', headerStyle:{backgroundColor: 'black'}}}  name='createPost' component={CreatePost} />
              <Stack.Screen  options={{headerShown: false, headerTitle: 'Create a post' , headerTintColor: 'white', headerStyle:{backgroundColor: 'black'}}}  name='login' component={Login} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}
export default InstaNavigator