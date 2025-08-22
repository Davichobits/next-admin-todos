import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { products, type Product } from '../products/products';
import { ItemCard } from '@/shopping-cart/components/item-card';


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

  return (
    <div>
      <h1 className='text-5xl'>Productos en el carrito</h1>
      <hr className='mb-2' />
      <div className='flex flex-col sm:fle-row gap-2 w-full'>
        {
          productsInCart.map(({product, quantity})=> <ItemCard key={product.id} product={product} quantity={quantity} /> )
        }
      </div>
    </div>
  );
}