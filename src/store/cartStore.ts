import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Watch } from '@/types/product'
import { CartItem, CartState } from '@/types/cart'

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (watch: Watch) =>
        set((state) => {
          const existing = state.items.find((item) => item.id === watch.id)
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === watch.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }
          return {
            items: [...state.items, { ...watch, quantity: 1 }],
          }
        }),

      removeItem: (id: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id: string, quantity: number) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== id),
            }
          }
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          }
        }),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getTotalItems: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: 'luxonera-cart',
    }
  )
)
