import { Watch } from './product'

export interface CartItem extends Watch {
  quantity: number
}

export interface CartState {
  items: CartItem[]
  addItem: (watch: Watch) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export interface CheckoutData {
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  customerName?: string
  customerPhone?: string
}
