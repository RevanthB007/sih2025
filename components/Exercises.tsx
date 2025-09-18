import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ExerciseBoxProps {
    exName: string;
}
const ExerciseBox = ({exName}:ExerciseBoxProps) => {
    return (
        <View className='max-w-12 min-h-12 bg-gray-800 rounded-lg m-1 items-center justify-center'>
            <Text className='text-white text-2xl font-bold'>{exName}</Text>
            
        </View>
    )
}
const Exercises = ({}) => {
  return (
    <View className='w-full'>
      <Text>Set new Records</Text>
      <View className='flex-row'>
        
      </View>
    </View>
  )
}

export default Exercises

const styles = StyleSheet.create({})