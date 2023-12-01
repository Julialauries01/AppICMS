export interface IProductsDTO {
   id: string,
   categoria: string,
   nome: string,
   preco: number,
   imposto: number,
   marca?: string,
   genero?: string,
   total: number,
   tipo?: string,
}
