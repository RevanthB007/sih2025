import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface GreetingProps {
    userName: string
}

const Greeting = ({userName}: GreetingProps) => {
  return (
    <View className='w-full flex-row items-center p-4'>
      <View className='h-10 w-10 rounded-[50%] bg-blue-500 mr-2 items-center justify-center '><Text className='text-white text-xl font-bold'>{userName.charAt(0)}</Text></View>
      <Text className='text-gray-200 text-xl'>Hey {userName} 👋</Text>
    </View>
  )
}

export default Greeting

const styles = StyleSheet.create({})