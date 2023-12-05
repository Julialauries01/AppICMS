import axios from "axios";
import { IProductsDTO } from "../dtos/IProductsDTO";
import server from "./server";


async function getIcmsProduct(product: IProductsDTO, imposto: string){
   console.log(product.categoria, imposto)
   try {
      const response = await server.put(`${product.categoria}/editar/${imposto}`, product)
      if(response){
         return response.data
      }   
   }
   catch (error) {
      console.log(JSON.stringify(error))
   }

}

async function handleDeleteItem(product: IProductsDTO) {
   try {
     const res = await server.delete(`${product.categoria}/${product.id}`);
     return res.data; 
   } catch (error) {
     console.log(error);
     throw error; 
   }
 }

 async function handleSetInsertNewProduct(product: IProductsDTO){
   try {
      const res = await server.post(`${product.categoria}/add`, product)
      res && res.data
   } catch(error){
      console.log(error)
   }
 }

 async function HandleEditProduct(product: IProductsDTO ) {
   console.log(product)
   try {
     const res = await server.put(`${product.categoria}/editar/1`, product)
     if (res) {
       console.log('caiu aqui HANDLEEDITPRODUCT') 
       return res.data
     }
   }
   catch (error){
     console.log('EDITAR caiu no erro')
   }
 }


 

export { getIcmsProduct, handleDeleteItem, handleSetInsertNewProduct, HandleEditProduct}