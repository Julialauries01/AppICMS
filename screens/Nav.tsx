// Nav.js

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Nav() {

  const { navigate } = useNavigation()

  return (
    <View className='bg-teal-700 w-full h-28 items-start justify-center pt-9 pl-5 '>
    <TouchableOpacity onPress={() =>  navigate('MainAdm')}>
      <Icon name='menu' size={32} color={'white'} />
    </TouchableOpacity>
    </View>
  );
}
