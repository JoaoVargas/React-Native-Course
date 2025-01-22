import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import "../assets/styles/global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name='index' 
        options={{
          headerShown: true
        }} 
        />
    </Stack>
  )
}

export default RootLayout
