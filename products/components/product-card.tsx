// https://tailwindcomponents.com/component/e-commerce-product-card
'use client';
import Image from "next/image"
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"
import { Product } from '@/app/dashboard/products/products'
type Props = Product 
import Star from './Star'
import { addProductToCart, deleteProductFromCart } from '@/shopping-cart/actions/actions'
import Button from './Button'
import { useRouter } from 'next/navigation';

export const ProductCard = ({id, image, name, price, rating}: Props) => {

  const router = useRouter()

  const handleAdd = () => {
    addProductToCart(id)
    router.refresh();
  }

  const handleDelete = () => {
    deleteProductFromCart(id);
    router.refresh();
  }

  return (
    <div className="bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100">
      
      {/* Product Image */}
      <div className="p-2">
        <Image
            width={500}
            height={500}
            className="rounded" 
            src={image}
            alt="product image" />
      </div>
      
      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{name}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          

          {/* Stars */}
          
            {
              Array(rating).fill(0).map((x,i)=><Star key={i} />)
            }

          {/* Rating Number */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating.toFixed(2)}
          </span>
        </div>


        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {price}</span>
          
          <div className="flex">
            <Button icon={IoAddCircleOutline} color='blue' onClick={handleAdd} />
            <Button icon={IoTrashOutline} color='red' onClick={handleDelete} />
          </div>
          
        </div>


      </div>
    </div>
  )
}