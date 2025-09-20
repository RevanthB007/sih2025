import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Barchart from './Barchart'

const Progress = () => {
  return (
    <View>
      <Text>Overall Progress</Text>
      <Barchart/>
    </View>
  )
}

export default Progress

const styles = StyleSheet.create({})