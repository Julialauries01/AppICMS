import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, } from 'react-native'
import server from '../api/server'
import { IProductsDTO } from '../dtos/IProductsDTO'
import ListProducts from './lisProducts'
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'
import { ProductContext } from '../contexts/productscontext'



type CategoriaProps = 'celulares' | 'livros'



export default function MainAdm() {
  const navigation = useNavigation();
  


  const [ categoria, setCategoria] = useState<CategoriaProps>()
  const [ products, setProducts ] = useState<IProductsDTO[]>([])
  const { product, handleSetProduct } = useContext(ProductContext)
  const isAdm = true


  async function handleSetCategoria(categoria:CategoriaProps){ 

    try{
      const res = await server.get(`${categoria}`).then((res) => { setProducts(res.data) , setCategoria(categoria)})

    }
    catch(error){
    console.log('a')
  }
  }

 


  useEffect(() => {
    categoria && handleSetCategoria(categoria)
  }, [product])

  function handleInsertProducts(){
  navigation.navigate('InsertProducts')
  }

  return (
    <View className='w-screen h-screen bg-gray-200 '>
  

  <View className=' flex-row p-6  items-center justify-between'>
      <Text className='text-center	'>Inserir novo produto</Text> 
      <TouchableOpacity onPress={handleInsertProducts}>
        <Icon name="add" size={22} color={"black"} />
       </TouchableOpacity>
    </View>

    <View className=' flex-row p-6  items-center justify-between'>
      <Text className='text-center	'>Escolha um Produto</Text> 
      <TouchableOpacity className='ml-4 bg-teal-700 w-22 h-10 rounded ' onPress={() => handleSetCategoria('celulares')}  >
            <Text  className='text-center p-3  text-white'>Celulares</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className='ml-2 bg-teal-700 w-20 h-10 rounded' onPress={() => handleSetCategoria('livros')} >
            <Text  className='text-center p-3  text-white'>Livros</Text>
          </TouchableOpacity>
    </View>

    <Text className='ml-6 text-black ' >Você selecionou a categoria { categoria }</Text>




      <FlatList 
        data={products}
        renderItem={ ({item}) => < ListProducts product={item} isAdm={true}  changeProduct={handleSetProduct} /> } 
        keyExtractor={item => item.id} 
        />
    </View>
  )
}
