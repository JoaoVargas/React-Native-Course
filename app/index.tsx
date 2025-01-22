import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-background text-foreground'>
      <Text className='text-3xl font-pbold'>pinto</Text>
      <Link href='/home'>Go to home</Link>
      <Text >
        TEste
      </Text>
    </View>
  )
}

export default index