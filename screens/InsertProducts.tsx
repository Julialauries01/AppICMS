import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller ,SubmitHandler} from 'react-hook-form'
import server from '../api/server'
import { handleSetInsertNewProduct } from '../api/teste';
import { IProductsDTO } from '../dtos/IProductsDTO';

type CategoriaProps = 'celulares' | 'livros'

type InputProps = {
  nome : string
  genero: string
  preco: string
}

export default function InsertProducts() {

  const { control ,register, handleSubmit, formState: { errors } } = useForm<InputProps>()

  const onSubmit : SubmitHandler<InputProps> = data => getProductData(data)
  const [ categoria, setCategoria] = useState<CategoriaProps>()

  
  async function getProductData(data: IProductsDTO){

    if(categoria && data){
      const body = {
        nome: data.nome,
        preco: data.preco,
        marca: data.genero,
        genero: data.genero,
        categoria
      }

      try {
          const res = await handleSetInsertNewProduct(body).then(res => console.log(res))
          console.log('inseriu o body')
          navigation.navigate('MainAdm')

      }
      catch(error) {
        console.log(error)
      }
    
    } else{
      return Alert.alert('Escolha uma categoria!')
    }


  }


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
    <View className=' bg-gray-200'>
    <Text className='  text-black  ml-6' >Você selecionou a categoria { categoria }</Text>

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
                      className='bg-gray-200 w-70 rounded-md mb-1 h-6 p-2'
                      placeholder='Digite o nome'
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}                  
                  />
                  )}
                name='nome'
              />

              <Text className='text-teal-700 mb-2'>Tipo:</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput 
                      className='bg-gray-200 w-70 rounded-md mb-1 h-6 p-2'
                      placeholder='Digite o Tipo'
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}                  
                  />
                  )}
                  name='genero'
              />


        <Text className='text-teal-700 mb-2 '>Preco:</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
                className='bg-gray-200 w-70 rounded-md mb-1 h-6 p-2'
                placeholder='Digite o preco'
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}                  
            />
            )}
            name='preco'
        />
           
              <View className='flex-row p-4 justify-between '>
                <TouchableOpacity title='Submit' onPress={handleSubmit(onSubmit)} className='bg-teal-700 w-20 h-6 justify-center rounded-md shadow-xl p4'>
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
    </>
  );
}