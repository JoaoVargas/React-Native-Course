import React from 'react'
import { Tabs } from 'expo-router'

import { icons } from '../../constants'
import { Image, Text, View } from 'react-native'

const TabIcon = ({icon, color}: {
  icon: any
  color: string
}) => {
  return (
    <View className='flex flex-col items-center justify-center gap-2'>
      <Image 
        source={icon} 
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'  
      />
    </View>
  )
}

const TabLable = ({name, focused, color}: {
  name: string
  focused: boolean
  color: string
}) => {
  return (
    <Text 
      className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
      style={{color: color}}
    >
      {name}
    </Text>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          headerShown: false,
          animation: 'shift',
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            title: 'Home',
            tabBarLabel: ({focused, color}) => (
              <TabLable 
                name='Home'
                focused={focused}
                color={color}
              />
            ),
            tabBarIcon: ({color}) => (
              <TabIcon
                icon={icons.home}  
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='bookmark'
          options={{
            title: 'Bookmarks',
            tabBarLabel: ({focused, color}) => (
              <TabLable 
                name='Bookmarks'
                focused={focused}
                color={color}
              />
            ),
            tabBarIcon: ({color}) => (
              <TabIcon
                icon={icons.bookmark}  
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='create'
          options={{
            title: 'Create',
            tabBarLabel: ({focused, color}) => (
              <TabLable 
                name='Create'
                focused={focused}
                color={color}
              />
            ),
            tabBarIcon: ({color}) => (
              <TabIcon
                icon={icons.plus}  
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: 'Profile',
            tabBarLabel: ({focused, color}) => (
              <TabLable 
                name='Profile'
                focused={focused}
                color={color}
              />
            ),
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.menu}  
                color={color}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout