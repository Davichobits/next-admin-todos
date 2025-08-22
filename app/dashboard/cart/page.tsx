import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { products, type Product } from '../products/products';
import { ItemCard } from '@/shopping-cart/components/item-card';
import { WidgetItem } from '@/components';

export const metadata: Metadata = {
  title: 'Carrito de compras',
  description: 'Contenido del carrito de compras'
}

interface CartCookies {
  [id:string]: number
}

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart:CartCookies ): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)){
    const product = products.find(prod => prod.id === id);
    if (product){
      productsInCart.push({
        product: product,
        quantity: cart[id],
      })
    }
  }

  return productsInCart;
}

export default async function CartPage() {

  const cookiesStore = await cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as CartCookies;

  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <div>
      <h1 className='text-5xl'>Productos en el carrito</h1>
      <hr className='mb-2' />
      <div className='flex flex-col sm:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full sm:w-8/12'>
          {
            productsInCart.map(({product, quantity})=> <ItemCard key={product.id} product={product} quantity={quantity} /> )
          }
        </div>
        <div className='flex flex-col gap-2 w-full sm:w-4/12'>
          <WidgetItem title='Total a pagar'>
            <div className='mt-2 flex justify-center gap-4'>
              <h3 className='text-3xl font-bold text-gray-700'>${(totalToPay*1.15).toFixed(2)}</h3>
            </div>
            <div>Impuestos 15%: <span className='font-bold'>${(totalToPay*0.15).toFixed(2)}</span></div>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}