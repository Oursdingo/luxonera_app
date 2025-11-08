'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { getWatchBySlug, watches } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'
import Button from '@/components/ui/Button'
import WatchViewer from '@/components/canvas/WatchViewer'
import ProductCard from '@/components/product/ProductCard'
import { openWhatsAppChat } from '@/lib/whatsapp'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function WatchPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const watch = getWatchBySlug(resolvedParams.slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showViewer3D, setShowViewer3D] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  if (!watch) {
    notFound()
  }

  const allImages = [watch.images.main, ...watch.images.gallery]

  const handleAddToCart = () => {
    addItem(watch)
  }

  const handleWhatsAppOrder = () => {
    const message = `Bonjour! Je suis intéressé par la montre ${watch.name} (${formatPrice(watch.price)}). Pouvez-vous me donner plus d'informations?`
    openWhatsAppChat(message)
  }

  // Get related watches from same collection
  const relatedWatches = watches
    .filter((w) => w.collection === watch.collection && w.id !== watch.id)
    .slice(0, 3)

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury">
        {/* Product Detail */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <div>
            {/* Main Image or 3D Viewer */}
            <div className="relative aspect-square mb-4 bg-neutral-50 rounded-lg overflow-hidden">
              {showViewer3D && watch.model3d ? (
                <WatchViewer modelPath={watch.model3d} />
              ) : (
                <Image
                  src={allImages[selectedImage] || '/images/placeholder.jpg'}
                  alt={watch.name}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index)
                    setShowViewer3D(false)
                  }}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index && !showViewer3D
                      ? 'border-black'
                      : 'border-transparent hover:border-neutral-300'
                  }`}
                >
                  <Image
                    src={img || '/images/placeholder.jpg'}
                    alt={`${watch.name} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
              {watch.model3d && (
                <button
                  onClick={() => setShowViewer3D(true)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all bg-neutral-100 flex items-center justify-center ${
                    showViewer3D ? 'border-black' : 'border-transparent hover:border-neutral-300'
                  }`}
                >
                  <span className="text-2xl">3D</span>
                </button>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              {watch.collection}
            </p>
            <h1 className="text-4xl md:text-5xl font-display mb-4">{watch.name}</h1>
            <p className="text-3xl font-medium mb-6">{formatPrice(watch.price)}</p>

            <div className="prose prose-lg mb-8">
              <p className="text-neutral-700">{watch.description}</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {watch.inStock ? (
                <span className="text-green-600 font-medium">✓ En stock</span>
              ) : (
                <span className="text-red-600 font-medium">Rupture de stock</span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={!watch.inStock}
                variant="primary"
                size="lg"
                className="flex-1"
              >
                Ajouter au panier
              </Button>
              <Button
                onClick={handleWhatsAppOrder}
                variant="secondary"
                size="lg"
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                Commander sur WhatsApp
              </Button>
            </div>

            {/* Specifications */}
            <div className="border-t border-neutral-200 pt-8">
              <h2 className="text-2xl font-display mb-6">Spécifications</h2>
              <dl className="space-y-4">
                <div className="flex justify-between py-3 border-b border-neutral-100">
                  <dt className="font-medium">Mouvement</dt>
                  <dd className="text-neutral-600">{watch.specifications.movement}</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-100">
                  <dt className="font-medium">Boîtier</dt>
                  <dd className="text-neutral-600">{watch.specifications.case}</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-100">
                  <dt className="font-medium">Diamètre</dt>
                  <dd className="text-neutral-600">{watch.specifications.diameter}</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-100">
                  <dt className="font-medium">Étanchéité</dt>
                  <dd className="text-neutral-600">{watch.specifications.waterResistance}</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-100">
                  <dt className="font-medium">Bracelet</dt>
                  <dd className="text-neutral-600">{watch.specifications.strap}</dd>
                </div>
              </dl>

              {/* Features */}
              <div className="mt-6">
                <h3 className="font-medium mb-3">Caractéristiques</h3>
                <ul className="space-y-2">
                  {watch.specifications.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-neutral-600">
                      <span className="text-accent-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedWatches.length > 0 && (
          <div>
            <h2 className="text-3xl font-display mb-8">Montres similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedWatches.map((relatedWatch) => (
                <ProductCard key={relatedWatch.id} watch={relatedWatch} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
