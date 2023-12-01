import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { StateProps } from './MainUser'

interface ButtonStateProps {
  changeState: (estado: StateProps) => void
}

export default function ButtonsState( { changeState }:ButtonStateProps) {

  return (
    <>
    <View className=' flex-row p-6  items-center justify-between '>
      <Text className='text-center'>Escolha um Estado </Text> 
      <TouchableOpacity className=' ml-4 bg-teal-700 w-22 h-10 rounded ' onPress={() => changeState('sao paulo') } >
            <Text  className='text-center p-3  text-white'>Sao Paulo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className=' ml-2 bg-teal-700 w-20 h-10 rounded' onPress={() =>  changeState('santa catarina')} >
            <Text  className='text-center p-3  text-white'>Santa Catarina</Text>
          </TouchableOpacity>
          
    </View>


    </>
  )
}
