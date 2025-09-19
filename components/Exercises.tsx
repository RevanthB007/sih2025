import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ExerciseBoxProps {
    exName: string;
}
interface ExercisesProps {
    exercises?: string[];
}


const ExerciseBox = ({exName}:ExerciseBoxProps) => {
    return (
        <View className='w-full  max-w-[88px] min-h-[80px] bg-gray-900 rounded-lg m-1 items-center justify-center shadow-xl border-black border'>
            <Text className='text-white text-center text-lg font-semibold'>{exName}</Text>
            
        </View>
    )
}
const Exercises = ({exercises}:ExercisesProps) => {
  return (
    <View className=' mt-2 bg-gray-600 min-h-40 h-48 rounded-xl'>
      <Text className='text-white text-2xl font-bold m-4 text-center'>Set new Records 📝</Text>
      <View className='flex-row'>
        {exercises?.map((ex,i) => <ExerciseBox key={i} exName={ex}/> )}
      </View>
    </View>
  )
}

export default Exercises

const styles = StyleSheet.create({})