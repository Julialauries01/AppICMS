import React, { createContext, useState } from 'react'
import { IProductsDTO } from '../dtos/IProductsDTO'
import { handleDeleteItem } from '../api/teste'

interface ContextProps {
   children: React.ReactNode
}

interface ProductProps {
   product : IProductsDTO
   handleSetProduct: (product : any) => void
}

export const ProductContext = createContext({} as ProductProps)



export function ProductsContextContainer ({ children }:ContextProps) {
   const [ product, setProduct ] = useState<any>()

   function handleSetProduct(product:any){
      setProduct(product)
   }

   return (
      <ProductContext.Provider value={ { product, handleSetProduct} } >
         {children}
      </ProductContext.Provider>
   )
}
