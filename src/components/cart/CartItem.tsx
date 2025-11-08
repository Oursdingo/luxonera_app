'use client'

import Image from 'next/image'
import { CartItem as CartItemType } from '@/types/cart'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="flex gap-4 py-6 border-b border-neutral-200">
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 bg-neutral-50 rounded-lg overflow-hidden">
        <Image
          src={item.images.main || '/images/placeholder.jpg'}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-lg mb-1 truncate">{item.name}</h3>
        <p className="text-sm text-neutral-500 mb-2">{item.collection}</p>
        <p className="font-medium">{formatPrice(item.price)}</p>
      </div>

      {/* Quantity & Remove */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.id)}
          className="text-neutral-400 hover:text-red-600 transition-colors"
          aria-label="Supprimer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 border border-neutral-300 rounded">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="px-3 py-1 hover:bg-neutral-100 transition-colors"
            aria-label="Diminuer"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-3 py-1 hover:bg-neutral-100 transition-colors"
            aria-label="Augmenter"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
