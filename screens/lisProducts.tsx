import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IProductsDTO } from "../dtos/IProductsDTO";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { handleDeleteItem } from '../api/teste'
import { ProductContext} from "../contexts/productscontext";


interface ListProductsProps {
  product: IProductsDTO;
  changeProduct: (id: string) => void;
  isAdm: boolean
}


export default function ListProducts({
  product,
  changeProduct,
  isAdm = false
}: ListProductsProps) {

  const { handleSetProduct } = useContext(ProductContext)

  const navigation = useNavigation();
  

  function handleEditProducts() {
    handleSetProduct(product)
    navigation.navigate('EditProducts')
    }

    async function handleDelete() {
      try {
        const res = await handleDeleteItem(product);
        handleSetProduct({})
        console.log(res); 
      } catch (error) {
        console.log('Erro na exclusão do produto:', error);
      }
    }

  return (
    <TouchableOpacity onPress={() => changeProduct(product.id)}>
      <View className="p-4">
        <View className="bg-gray-100 w-full items-center justify-center p-5 rounded-md ">
          <View className="bg-white w-80 items-center justify-center shadow-md rounded-md ">
            <View className=" w-full   h-22 items-start	rounded	p-2">
            <View className=" w-full flex-row items-start">

            <View className="flex-row w-60">
                  <Text className="text-teal-700 ">{product.nome}</Text>
                  </View>

          { isAdm &&  
             <View className="flex-row w-10 items-end  justify-end "  >

                  <TouchableOpacity  onPress={handleEditProducts}  className=" items-end  justify-end  ml-30" >
                     <Icon name="edit" size={22} color={"black"} />
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={handleDelete} >
                     <Icon name="delete" size={22} color={"black"} />
                  </TouchableOpacity>
               </View>
}
</View>

            <View className=" items-start flex-row"  >

              <Text className="mt-6 w-30">
                {product.genero ? product.genero : product.marca}
              </Text>
              <Text className=" mt-6 ml-52  w-30">R${product.preco}</Text>
            </View>
            </View>
            </View>
          </View>
        </View>
      
    </TouchableOpacity>
  );
}
