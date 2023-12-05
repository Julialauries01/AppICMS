import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Nav from './Nav'
import { IProductsDTO } from '../dtos/IProductsDTO'
import { getIcmsProduct } from '../api/teste'


interface ContainerResumeProps {
  product: IProductsDTO
  imposto: '1' | '2'

}

export default  function ConteinerResume({ product, imposto}: ContainerResumeProps) {
  const [teste,setTeste] = useState<IProductsDTO>()  

  useEffect(() => {
   const fetch = async () => {
    if(product && imposto){
      try {
        const productSelected =  await getIcmsProduct(product,imposto).then(res => setTeste(res))
        console.log('Iniciou',teste)
      } catch(error) {
        console.log(error)
      }
    }
   }
   fetch()
  }, [product.categoria,imposto]) 
  
  return (

    <View className='p-3 flex items-center m-6 bg-white rounded-md shadow-md'>
      <Text className='text-teal-700 text-center '>Resumo</Text> 
      <View className=' w-full h-28 flex items-start	'>
      <Text className='text-center text-start mt-3'>Nome: {teste && teste.nome}</Text> 
      <Text className='text-center mt-4'>{teste?.marca ? 'Marca:' : 'Genero:'} {teste?.marca} {teste?.genero}</Text> 
            <View className=' w-full h-28 flex items-start justify-between  flex-row'>

      <Text className='text-center mt-4'>Preço: {teste && teste.preco}</Text> 
      <Text className='text-center mt-4'>Imposto: {teste && teste.imposto}</Text> 
      <Text className='text-center mt-4'>Total:{teste && teste.total}</Text> 
      </View>
      </View>
    </View> 

  )
}
