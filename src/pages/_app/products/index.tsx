import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../../../components/ProductList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'Produtos - SyntaxWear' }
    ]
  })
})

function RouteComponent() {
  return (
    <section className='container pt-44 md:pt-60 pb-10 px-2 md:px-10 mb-10'>
      <h1 className='text-3xl text-center mb-3'>Lista de Produtos</h1>
      <h2 className='text-center mb-10 p-2'>Conforto expecional para suas aventuras do dia-a-dia</h2>
      <ProductList products={products} />
    </section>
  )
}
