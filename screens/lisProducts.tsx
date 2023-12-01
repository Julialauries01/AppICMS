import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IProductsDTO } from "../dtos/IProductsDTO";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

interface ListProductsProps {
  product: IProductsDTO;
  changeProduct: (id: string) => void;
}

export default function ListProducts({
  product,
  changeProduct,
}: ListProductsProps) {


  const navigation = useNavigation();

  function handleEditProducts(){
    navigation.navigate('EditProducts')
    }

  return (
    <TouchableOpacity onPress={() => changeProduct(product.id)}>
      <View className="p-4">
        <View className="bg-gray-100 w-full items-center justify-center p-5 rounded-md  mb-1">
          <View className="bg-white w-80 items-center justify-center shadow-md rounded-md ">
            <View className=" w-full h-20 items-start	rounded	p-2">


   

               <View className="flex-row items-center  justify-between w-full">
                  <Text className="text-teal-700 ">{product.nome}</Text>
                  <TouchableOpacity  onPress={handleEditProducts}  className="ml-32" >
                     <Icon name="edit" size={22} color={"black"} />
                  </TouchableOpacity>
                  
                  <TouchableOpacity >
                     <Icon name="delete" size={22} color={"black"} />
                  </TouchableOpacity>
                
               </View>
              <Text className=" mt-4">
                {product.genero ? product.genero : product.marca}
              </Text>
              <Text className=" ml-52">R${product.preco}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
