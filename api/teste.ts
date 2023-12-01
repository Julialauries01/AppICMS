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

async function deleteItem(product: IProductsDTO) {
    
   try {
      const res = await axios.delete(`${product.categoria}/${product.id}`)
      res && console.log(res.data)
   }
   catch(error){
     console.log(error)
   }
   
 }

export { getIcmsProduct, deleteItem }