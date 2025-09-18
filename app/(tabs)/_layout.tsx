
import React from 'react'
import { Tabs } from 'expo-router'
import { House, Dumbbell, BarChart3, User } from "lucide-react-native"

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF', // iOS blue, you can customize this
        tabBarInactiveTintColor: '#8E8E93', // iOS gray
        tabBarStyle: {
          paddingTop: 6,
          backgroundColor:'#0f0D23',
          },
      }}
    >
        <Tabs.Screen
        name='index'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <House color={color} size={30} />
            )
        }}
        />
        
        <Tabs.Screen
        name='workout'
        options={{
            title: 'Workout',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Dumbbell color={color} size={30} />
            )
        }}
        />
        
        <Tabs.Screen
        name='stats'
        options={{
            title: 'Stats',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <BarChart3 color={color} size={30} />
            )
        }}
        />

        <Tabs.Screen
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size , focused }) => (
              <User color={color} size={30} />
            )
        }}
        />

    </Tabs>
  )
}

export default _Layout