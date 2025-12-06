'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductGrid from '@/components/product/ProductGrid'
import { watches, getAllCollections } from '@/data/products'
import { SortOption } from '@/types/product'

export default function CatalogContent() {
  const searchParams = useSearchParams()
  const collectionFromUrl = searchParams.get('collection')

  const [selectedCollection, setSelectedCollection] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000])

  const collections = getAllCollections()

  // Pré-sélectionner la collection depuis l'URL
  useEffect(() => {
    if (collectionFromUrl && collections.includes(collectionFromUrl)) {
      setSelectedCollection(collectionFromUrl)
    }
  }, [collectionFromUrl, collections])

  const filteredAndSortedWatches = useMemo(() => {
    let filtered = [...watches]

    // Exclure les images "Main" (collections) du catalogue
    filtered = filtered.filter((watch) => watch.color !== "Main")

    // Filter by collection
    if (selectedCollection !== 'all') {
      filtered = filtered.filter((watch) => watch.collection === selectedCollection)
    }

    // Filter by price range
    filtered = filtered.filter(
      (watch) => watch.price >= priceRange[0] && watch.price <= priceRange[1]
    )

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [selectedCollection, sortBy, priceRange])

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
          {selectedCollection !== 'all' ? selectedCollection : 'Catalogue Complet'}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          {selectedCollection !== 'all'
            ? `Découvrez toutes les variantes de ${selectedCollection}`
            : 'Explorez notre collection complète de montres de luxe'
          }
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Collection Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Collection</label>
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
            >
              <option value="all">Toutes les collections</option>
              {collections.map((collection) => (
                <option key={collection} value={collection}>
                  {collection}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium mb-2">Trier par</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
            >
              <option value="newest">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom A-Z</option>
            </select>
          </div>

          {/* Results count */}
          <div>
            <label className="block text-sm font-medium mb-2 invisible">Résultats</label>
            <p className="text-sm text-neutral-600 px-4 py-2">
              {filteredAndSortedWatches.length} montre{filteredAndSortedWatches.length > 1 ? 's' : ''} trouvée{filteredAndSortedWatches.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid watches={filteredAndSortedWatches} />
    </>
  )
}
