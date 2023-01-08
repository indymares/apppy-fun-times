import _ from 'lodash'
import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack = createNativeStackNavigator()

function LogoTitle() {
  return (
    <Image
      resizeMode="contain"
      source={{
        uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/586eb2a4-2bfc-4d6c-a977-7832b91b9c02/ddrcbsj-16539b24-38a5-4d6d-aaf2-58e31d93cfbb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NmViMmE0LTJiZmMtNGQ2Yy1hOTc3LTc4MzJiOTFiOWMwMlwvZGRyY2Jzai0xNjUzOWIyNC0zOGE1LTRkNmQtYWFmMi01OGUzMWQ5M2NmYmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0GML1845gZvUed_lc2fp9adF75uMpAkTg7vCnWvErlw',
      }}
      style={{ width: 100, height: 35 }}
    />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
