import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller ,SubmitHandler} from 'react-hook-form'
import server from '../api/server'

type CategoriaProps = 'celulares' | 'livros'

type InputProps = {
  nome : string
  gender: string
  price: number
}

export default function InsertProducts() {

  const { control ,register, handleSubmit, formState: { errors } } = useForm<InputProps>()

  const onSubmit : SubmitHandler<InputProps> = data => console.log(data)
  const [ categoria, setCategoria] = useState<CategoriaProps>()



  const navigation = useNavigation();

  
    function handleCancel(){
      navigation.navigate('MainAdm')
  
      }

      function handleSetCategoria(categoria:CategoriaProps){
        setCategoria(categoria)
        console.log(categoria)
  }
  
  return (

      <>  
    <View className=' flex-row p-6  bg-gray-200 items-center justify-between'>
      <Text className='text-center	'>Escolha a categoria</Text> 
      <TouchableOpacity className='ml-4 bg-teal-700 w-22 h-10 rounded ' onPress={() => handleSetCategoria('celulares')}  >
            <Text  className='text-center p-3  text-white'>Celulares</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className='ml-2 bg-teal-700 w-20 h-10 rounded' onPress={() => handleSetCategoria('livros')} >
            <Text  className='text-center p-3  text-white'>Livros</Text>
          </TouchableOpacity>

    </View>

    <View className='w-screen h-screen bg-gray-200'>
      <View className='p-4'>
        <View className='bg-gray-100 w-full items-center justify-center p-5 rounded-md mb-4'>
          <View className='bg-white w-80 items-center justify-center'>
            <View className='w-full p-2'>
              <Text className='text-teal-700 mb-2'>Nome:</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput 
                      className='bg-gray-200 w-70 rounded-md mb-1 h-6'
                      placeholder='Digite o nome'
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}                  
                  />
                  )}
                name='nome'
              />

              <Text className='text-teal-700 mb-2'>Gênero:</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput 
                      className='bg-gray-200 w-70 rounded-md mb-1 h-6'
                      placeholder='Digite o genero'
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}                  
                  />
                  )}
                  name='gender'
              />


        <Text className='text-teal-700 mb-2'>Preco:</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
                className='bg-gray-200 w-70 rounded-md mb-1 h-6'
                placeholder='Digite o preco'
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}                  
            />
            )}
            name='price'
        />
           
              <View className='flex-row p-4 justify-between '>
                <Button title='Submit' onPress={handleSubmit(onSubmit)} className='bg-teal-700 w-20 h-6 justify-center rounded-md shadow-xl p4'>
                  <Text className='text-white text-center justify-center' >Enviar</Text>
                </Button>
                
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
    </>
  );
}