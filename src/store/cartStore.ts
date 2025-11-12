import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Watch } from '@/types/product'
import { CartItem, CartState } from '@/types/cart'
import { toast } from 'sonner'

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (watch: Watch) => {
        set((state) => {
          const existing = state.items.find((item) => item.id === watch.id)
          if (existing) {
            toast.success('Quantité mise à jour', {
              description: `${watch.name} a été ajouté à votre panier`,
            })
            return {
              items: state.items.map((item) =>
                item.id === watch.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }
          toast.success('Article ajouté au panier', {
            description: `${watch.name} a été ajouté à votre panier`,
          })
          return {
            items: [...state.items, { ...watch, quantity: 1 }],
          }
        })
      },

      removeItem: (id: string) => {
        const item = get().items.find((item) => item.id === id)
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
        if (item) {
          toast.error('Article retiré', {
            description: `${item.name} a été retiré de votre panier`,
          })
        }
      },

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
