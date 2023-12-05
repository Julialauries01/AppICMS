import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ProductContext } from "../contexts/productscontext";
import { HandleEditProduct } from "../api/teste";
import { IProductsDTO } from "../dtos/IProductsDTO";

type EditProductProps = {
  nome: string;
  tipo: string;
  preco: string;
};



export default function EditProducts() {
  const {control, register, handleSubmit } = useForm<EditProductProps>();

  const { product, handleSetProduct } = useContext(ProductContext)

  const onSubmit = async (data:any) => {

    const body :IProductsDTO = {
      id:product.id,
      categoria: product.categoria,
      imposto: product.imposto,
      total:product.total,
      nome: data.nome,
      genero: data.tipo,
      marca: data.tipo,
      preco: data.preco
    }

    if (body) {
      try {
        const res = await HandleEditProduct(body).then(res => console.log('Atualizou!'))
        handleSetProduct(body)
        navigation.navigate('MainAdm')
      }
      catch(error){
          console.log(error)
      }
    }
  }


  const navigation = useNavigation();

  function handleCancel() {
    navigation.navigate("MainAdm");
  }

  return (
    <View className="w-screen h-screen bg-gray-200">
      <View className="p-4">
        <View className="bg-gray-100 w-full items-center justify-center p-5 rounded-md mb-4">
          <View className="bg-white w-80 items-center justify-center">
            <View className="w-full p-2">
              <Text className="text-teal-700 mb-2">Nome:</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="bg-gray-200 w-70 rounded-md mb-1 h-6 p-2"
                    placeholder={product.nome}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="nome"
              />

              <Text className="text-teal-700 mb-2">{product.genero ? 'Genero' : 'Marca'}</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="bg-gray-200 w-70 rounded-md mb-1 h-6 p-2"
                    placeholder={product.genero ? product.genero : product.marca }
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="tipo"
              />

              <Text className="text-teal-700 mb-2">Preco:</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="bg-gray-200 w-70 rounded-md mb-1 h-6 p-2"
                    placeholder={`${product.preco}`}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="preco"
              />
              <View className="flex-row p-4 justify-between ">
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  className="bg-teal-700 w-20 h-6 justify-center rounded-md shadow-xl p4"
                >
                  <Text className="text-white text-center justify-center" > 
                    Enviar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-teal-700 w-20 justify-center  h-6  rounded-md shadow-xl"
                  onPress={handleCancel}
                >
                  <Text className="text-white text-center justify-center">
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
