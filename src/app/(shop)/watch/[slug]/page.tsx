"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { getWatchBySlug, watches } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { openWhatsAppChat } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function WatchPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const watch = getWatchBySlug(resolvedParams.slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  if (!watch) {
    notFound();
  }

  const allImages = [watch.images.main, ...(watch.images.gallery || [])];

  const placeholderImage =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="800"%3E%3Crect fill="%23f5f5f5" width="800" height="800"/%3E%3Ctext fill="%23999" font-family="serif" font-size="48" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ELuxonera%3C/text%3E%3C/svg%3E';

  const handleAddToCart = () => {
    addItem(watch);
  };

  const handleWhatsAppOrder = () => {
    const message = `Bonjour! Je suis intéressé par la montre ${
      watch.name
    } (${formatPrice(
      watch.price
    )}). Pouvez-vous me donner plus d&apos;informations?`;
    openWhatsAppChat(message);
  };

  // Get color variants from same collection (excluding Main and current watch)
  const colorVariants = watches
    .filter(
      (w) =>
        w.collection === watch.collection &&
        w.id !== watch.id &&
        w.color !== "Main"
    )
    .slice(0, 6);

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury">
        {/* Product Detail */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative w-full h-[600px] mb-4 bg-neutral-50 rounded-lg overflow-hidden">
              <Image
                src={
                  !imageError && allImages[selectedImage]
                    ? allImages[selectedImage]
                    : placeholderImage
                }
                alt={watch.name}
                fill
                className="object-contain p-4"
                priority
                onError={() => setImageError(true)}
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                    setImageError(false);
                  }}
                  className={`relative w-full h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-black"
                      : "border-transparent hover:border-neutral-300"
                  }`}
                >
                  <Image
                    src={img || placeholderImage}
                    alt={`${watch.name} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              {watch.collection}
            </p>
            <h1 className="text-4xl md:text-5xl font-display mb-4">
              {watch.name}
            </h1>
            {watch.color && watch.color !== "Main" && (
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-800 rounded-full">
                  <span className="w-3 h-3 rounded-full bg-neutral-400"></span>
                  <span className="font-medium">{watch.color}</span>
                </span>
              </div>
            )}
            <p className="text-3xl font-medium mb-6">
              {formatPrice(watch.price)}
            </p>

            <div className="prose prose-lg mb-8">
              <p className="text-neutral-700 leading-relaxed">
                {watch.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {watch.inStock ? (
                <span className="text-green-600 font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  En stock
                </span>
              ) : (
                <span className="text-red-600 font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Rupture de stock
                </span>
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
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-0"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Commander
              </Button>
            </div>

            {/* Specifications */}
            {watch.specifications && (
              <div className="border-t border-neutral-200 pt-8">
                <h2 className="text-2xl font-display mb-6">Spécifications</h2>
                <dl className="space-y-4">
                  {watch.specifications.movement && (
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <dt className="font-medium text-neutral-800">
                        Mouvement
                      </dt>
                      <dd className="text-neutral-600">
                        {watch.specifications.movement}
                      </dd>
                    </div>
                  )}
                  {watch.specifications.case && (
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <dt className="font-medium text-neutral-800">Boîtier</dt>
                      <dd className="text-neutral-600">
                        {watch.specifications.case}
                      </dd>
                    </div>
                  )}
                  {watch.specifications.diameter && (
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <dt className="font-medium text-neutral-800">Diamètre</dt>
                      <dd className="text-neutral-600">
                        {watch.specifications.diameter}
                      </dd>
                    </div>
                  )}
                  {watch.specifications.waterResistance && (
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <dt className="font-medium text-neutral-800">
                        Étanchéité
                      </dt>
                      <dd className="text-neutral-600">
                        {watch.specifications.waterResistance}
                      </dd>
                    </div>
                  )}
                  {watch.specifications.strap && (
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <dt className="font-medium text-neutral-800">Bracelet</dt>
                      <dd className="text-neutral-600">
                        {watch.specifications.strap}
                      </dd>
                    </div>
                  )}
                </dl>

                {/* Features */}
                {watch.specifications.features &&
                  watch.specifications.features.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Caractéristiques</h3>
                      <ul className="space-y-2">
                        {watch.specifications.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-neutral-600"
                          >
                            <span className="text-accent-gold mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>

        {/* Color Variants */}
        {colorVariants.length > 0 && (
          <div>
            <h2 className="text-3xl font-display mb-8">
              Autres couleurs disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {colorVariants.map((variant) => (
                <ProductCard key={variant.id} watch={variant} mode="product" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
