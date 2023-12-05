import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, } from 'react-native'
import ConteinerResume from './ConteinerResume'
import ButtonsState from './ButtonsState'
import server from '../api/server'
import axios from 'axios'
import { IProductsDTO } from '../dtos/IProductsDTO'
import ListProducts from './lisProducts'

type CategoriaProps = 'celulares' | 'livros'
export type StateProps = 'sao paulo' | 'santa catarina'

export default function MainUser() {

  const [ categoria, setCategoria] = useState<CategoriaProps>()
  const [ product, setProduct ] = useState<IProductsDTO>({} as IProductsDTO)
  const [ products, setProducts ] = useState<IProductsDTO[]>([])
  const [ estado, setEstado] = useState<StateProps>()
  const isAdm = false
  
  async function handleSetCategoria(categoria:CategoriaProps){ 
    try{
      const res = await server.get(`${categoria}`).then((res) => { setProducts(res.data) , setCategoria(categoria)})

    }
    catch(error){
    console.log(error)
  }
  }

  function changeProduct(id:string){
    const product = products.filter(item => item.id === id)
    if(product){
      setProduct(product[0])
    }
  }


 function handleSetEstado(estado:StateProps){
    setEstado(estado)
  }


  useEffect(() => {
    console.log(product)
  }, [product,])

  return (
    <View className='w-screen h-screen bg-gray-200 '>
  

    <ConteinerResume product={product} imposto={estado === 'sao paulo' ? '1' : '2'} />
    
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


      <ButtonsState changeState={handleSetEstado}/>

      <Text className='ml-6 text-black' >Você selecionou o estado { estado }</Text>



      <FlatList 
        data={products}
        renderItem={ ({item}) => < ListProducts product={item} isAdm={false}  changeProduct={changeProduct} /> } 
        keyExtractor={item => item.id} 
        showsVerticalScrollIndicator
        className='flex flex-1  mb-40 h-screen'
        />
      
    </View>
  )
}
