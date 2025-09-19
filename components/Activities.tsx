import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const activities = ["Running", "Cycling", "Swimming", "Yoga", "Hiking"];
const Activities = () => {
  return (
    <View className='w-full mt-4 bg-gray-600 min-h-40 h-48 rounded-xl'>

      <Text className='text-white text-2xl font-bold m-4'>Your Activities 🚀</Text>
        <View className='flex-row'>
            {activities.map((activity, index) => (
                <View key={index} className='w-full max-w-[88px] min-h-[80px] bg-gray-900 rounded-lg m-1 items-center justify-center shadow-xl border-black border'>
                    <Text className='text-white text-center text-lg font-semibold'>{activity}</Text>
                </View>
            ))}
        </View>

    </View>
  )
}

export default Activities

const styles = StyleSheet.create({})