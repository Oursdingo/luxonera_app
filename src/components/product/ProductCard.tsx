'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Watch } from '@/types/product'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'
import Button from '@/components/ui/Button'

interface ProductCardProps {
  watch: Watch
}

export default function ProductCard({ watch }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(watch)
  }

  const imageSrc = !imageError && watch.images.main
    ? watch.images.main
    : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ELuxonera%3C/text%3E%3C/svg%3E'

  const secondaryImage = watch.images.gallery?.[0] || imageSrc

  return (
    <Link
      href={`/watch/${watch.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          {/* Main Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src={imageSrc}
              alt={watch.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>

          {/* Secondary Image on Hover */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={secondaryImage}
              alt={`${watch.name} - Vue 2`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {watch.featured && (
              <span className="bg-accent-gold text-black text-xs font-medium px-3 py-1 rounded-full">
                Nouveauté
              </span>
            )}
            {!watch.inStock && (
              <span className="bg-neutral-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                Rupture
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <div
            className={`absolute inset-x-4 bottom-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              onClick={handleAddToCart}
              disabled={!watch.inStock}
              variant="primary"
              size="sm"
              className="w-full"
            >
              Ajouter au panier
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            {watch.collection}
          </p>
          <h3 className="font-display text-xl mb-2 group-hover:text-accent-gold transition-colors">
            {watch.name}
          </h3>
          <p className="text-lg font-medium">{formatPrice(watch.price)}</p>

          {/* Specifications Preview */}
          <div className="mt-4 pt-4 border-t border-neutral-100 text-xs text-neutral-600 space-y-1">
            <p>{watch.specifications.movement}</p>
            <p>{watch.specifications.diameter}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
