'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { dishes } from './orderData'

export function CardGrid() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState([])
  const [checkoutView, setCheckoutView] = useState(false)

  const handleAddToCart = (dish) => {
    const existingItem = cartItems.find((item) => item.name === dish.name)
    if (existingItem) {
      toast({
        description: 'Item já está no carrinho',
        variant: 'destructive',
      })
    } else {
      setCartItems([
        ...cartItems,
        { ...dish, quantity: 1, totalPrice: dish.price },
      ])
      toast({
        description: 'Item adicionado ao carrinho',
        variant: 'destructive',
      })
    }
  }

  const handleQuantityChange = (dish, delta) => {
    const existingItem = cartItems.find((item) => item.name === dish.name)
    if (existingItem) {
      const updatedQuantity = Math.max(existingItem.quantity + delta, 1)
      setCartItems(
        cartItems.map((item) =>
          item.name === dish.name
            ? {
                ...item,
                quantity: updatedQuantity,
                totalPrice: updatedQuantity * item.price,
              }
            : item,
        ),
      )
    } else {
      if (delta > 0) {
        setCartItems([
          ...cartItems,
          {
            ...dish,
            quantity: delta,
            totalPrice: delta * dish.price,
          },
        ])
      }
    }
  }

  const getQuantity = (dish) => {
    const item = cartItems.find((item) => item.name === dish.name)
    return item ? item.quantity : 1
  }

  const getTotalPrice = (dish) => {
    const item = cartItems.find((item) => item.name === dish.name)
    return item ? item.totalPrice : dish.price
  }

  const getTotalCartPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0)
  }

  const handleCheckout = () => {
    setCheckoutView(true)
  }

  const handleOrder = () => {
    setCartItems([])
    setCheckoutView(false)
    toast({
      description: 'Seu pedido está a caminho!',
      variant: 'destructive',
    })
  }

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 px-4 pb-24 pt-10 sm:grid-cols-2 sm:px-0">
      {dishes.map((dish) => (
        <Card
          key={dish.name}
          className="flex w-full flex-row items-start rounded-md bg-zinc-900 text-white"
        >
          <img
            src={dish.photo}
            alt={dish.name}
            className="size-40 rounded-l-md object-cover"
          />
          <div className="flex-1 space-y-2 p-4">
            <h5 className="font-serif text-lg">{dish.name}</h5>
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold">{`$${dish.price}`}</span>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="btn font-serif hover:border-gray-500 hover:text-gray-500">
                    ADICIONAR
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 text-white sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{dish.name}</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <img
                      src={dish.photo}
                      alt="Dish"
                      className="mb-4 h-48 w-full object-cover"
                    />
                    <div className="mb-4 flex items-center space-x-4">
                      <button
                        className="btn font-serif hover:border-gray-500 hover:text-gray-500"
                        onClick={() => handleQuantityChange(dish, -1)}
                      >
                        -
                      </button>
                      <span>{getQuantity(dish)}</span>
                      <button
                        className="btn font-serif hover:border-gray-500 hover:text-gray-500"
                        onClick={() => handleQuantityChange(dish, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="btn font-serif hover:border-gray-500 hover:text-gray-500"
                        onClick={() => handleAddToCart(dish)}
                      >
                        Adicionar ao carrinho
                      </button>
                      <span className="font-bold">{`$${getTotalPrice(dish)}`}</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Card>
      ))}
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn fixed bottom-5 right-5 font-serif hover:border-gray-500 hover:text-gray-500">
            Ver Carrinho ({cartItems.length})
          </button>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {checkoutView ? 'Finalizar Pedido' : 'Carrinho de Compras'}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {checkoutView ? (
              <div>
                <div className="mb-4">
                  <label className="mb-2 block">Endereço</label>
                  <input type="text" className="w-full p-2 text-black" />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block">Número do Cartão</label>
                  <input type="text" className="w-full p-2 text-black" />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block">Data de Validade</label>
                  <input type="text" className="w-full p-2 text-black" />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block">CVV</label>
                  <input type="text" className="w-full p-2 text-black" />
                </div>
                <button
                  className="btn w-full font-serif hover:border-gray-500 hover:text-gray-500"
                  onClick={handleOrder}
                >
                  Fazer Pedido
                </button>
              </div>
            ) : (
              <>
                {cartItems.length === 0 ? (
                  <p className="text-center">Seu carrinho está vazio</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.name} className="mb-4 flex justify-between">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>${item.totalPrice.toFixed(2)}</span>
                    </div>
                  ))
                )}
                {cartItems.length > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${getTotalCartPrice().toFixed(2)}</span>
                    </div>
                    <button
                      className="btn mt-4 w-full font-serif hover:border-gray-500 hover:text-gray-500"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  )
}
