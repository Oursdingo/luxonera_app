'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import CartItem from '@/components/cart/CartItem'
import WhatsAppCheckout from '@/components/cart/WhatsAppCheckout'
import Button from '@/components/ui/Button'

export default function CartPage() {
  const items = useCartStore((state) => state.items)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container-luxury">
        <h1 className="text-4xl md:text-5xl font-display mb-12">Votre Panier</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 mx-auto mb-6 text-neutral-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className="text-2xl font-display mb-4">Votre panier est vide</h2>
            <p className="text-neutral-600 mb-8">
              Découvrez notre collection de montres de luxe
            </p>
            <Link href="/catalog">
              <Button variant="primary" size="lg">
                Découvrir la Collection
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h2 className="text-2xl font-display mb-6">
                  Articles ({items.length})
                </h2>
                <div className="divide-y divide-neutral-200">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Link href="/catalog">
                  <Button variant="ghost">
                    ← Continuer mes achats
                  </Button>
                </Link>
              </div>
            </div>

            {/* Checkout */}
            <div>
              <WhatsAppCheckout />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
