import { hasCookie, getCookie } from 'cookies-next'
import { setCookie } from 'cookies-next/client';

interface Props {
  [id: string]: number
}
export const getCookieCart = (): Props => {
  if(hasCookie('cart')){
    const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}')
    return cookieCart;
  }
  return {};
}

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  if(cookieCart[id]){
    cookieCart[id] = cookieCart[id] + 1;
  }else{
    cookieCart[id] = 1;
  }
  setCookie('cart', JSON.stringify(cookieCart));
}

export const deleteProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  if(cookieCart[id]){
    delete cookieCart[id];
  }
  setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if(cookieCart[id]){
    const cookiesInCart = cookieCart[id] -= 1;

    if(cookiesInCart <= 0){
      delete cookieCart[id];
    }else{
      cookieCart[id] = cookiesInCart;
    }
  }
  setCookie('cart', JSON.stringify(cookieCart));
}