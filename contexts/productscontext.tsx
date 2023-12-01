import React from 'react'
import { IProductsDTO } from '../dtos/IProductsDTO'

interface ContextProps {
   children: React.ReactNode
}

interface ProductProps {
   user : string
   getProduct: (category:string) => void
   category: string
   product : IProductsDTO
   handleSetProduct: (product : any) => void
   handleSetCategory: (categoria :  string) => void 
}



export function productscontext ({ children }:ContextProps){
  return (


   )
}
