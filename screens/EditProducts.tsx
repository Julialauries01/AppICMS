import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function EditProducts() {

  const [productName, setProductName] = useState('');
  const [productGenre, setProductGenre] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const navigation = useNavigation();

  
    function handleCancel(){
      navigation.navigate('MainAdm')
  
      }
  

  const handleSend = () => {
    console.log('Nome:', productName);
    console.log('Gênero:', productGenre);
    console.log('Preço:', productPrice);
  };

  return (
    <View className='w-screen h-screen bg-gray-200'>
      <View className='p-4'>
        <View className='bg-gray-100 w-full items-center justify-center p-5 rounded-md mb-4'>
          <View className='bg-white w-80 items-center justify-center'>
            <View className='w-full p-2'>
              <Text className='text-teal-700 mb-2'>Nome:</Text>
              <TextInput className='bg-gray-200 w-70 rounded-md mb-1 h-6'
                value={productName}
                onChangeText={(text) => setProductName(text)}
              />
            
              <Text className='text-teal-700 mb-2'>Gênero:</Text>
              <TextInput className='bg-gray-200 w-70 rounded-md mb-1 h-6'
                value={productGenre}
                onChangeText={(text) => setProductGenre(text)}
              />
              <Text className='text-teal-700 mb-2'>Preço:</Text>
              <TextInput
              className='bg-gray-200 w-70 rounded-md mb-1 h-6'
                value={productPrice}
                onChangeText={(text) => setProductPrice(text)}
              />
              <View className='flex-row p-4 justify-between '>
                <TouchableOpacity  onPress={handleSend} className='bg-teal-700 w-20 h-6 justify-center rounded-md shadow-xl p4'>
                  <Text className='text-white text-center justify-center' >Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-teal-700 w-20 justify-center  h-6  rounded-md shadow-xl'
                onPress={handleCancel}>
                  <Text  className='text-white text-center justify-center' >Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}