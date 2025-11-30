"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Watch } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import Button from "@/components/ui/Button";

interface ProductCardProps {
  watch: Watch;
}

export default function ProductCard({ watch }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(watch);
  };

  // Gestion sécurisée des images
  const mainImage =
    !imageError && watch.images?.main
      ? watch.images.main
      : "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80";

  const hoverImage = watch.images?.gallery?.[0] || mainImage;

  return (
    <Link
      href={`/watch/${watch.slug}`}
      className="group block w-full sm:w-[300px] md:w-[340px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conteneur principal */}
      <article className="bg-white rounded-xl shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-500">
        {/* === Image principale === */}
        <div className="relative w-full h-[380px] overflow-hidden bg-neutral-50">
          {/* Image par défaut */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={mainImage}
              alt={watch.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>

          {/* Image de survol */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={hoverImage}
              alt={`${watch.name} - Vue 2`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {watch.featured && (
              <span className="bg-accent-gold text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                Nouveauté
              </span>
            )}
            {!watch.inStock && (
              <span className="bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Rupture
              </span>
            )}
          </div>

          {/* Bouton rapide */}
          <div
            className={`absolute inset-x-4 bottom-4 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
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

        {/* === Informations produit === */}
        <div className="p-6 h-[200px] flex flex-col">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2 line-clamp-1">
            {watch.collection}
          </p>
          <h3 className="font-display text-lg sm:text-xl mb-1 group-hover:text-accent-gold transition-colors line-clamp-2">
            {watch.name}
          </h3>
          <p className="text-base sm:text-lg font-semibold mb-auto">
            {formatPrice(watch.price)}
          </p>

          {/* Spécifications courtes */}
          <div className="mt-4 pt-4 border-t border-neutral-200 text-xs text-neutral-600 space-y-1">
            {watch.specifications?.movement && (
              <p className="line-clamp-1">{watch.specifications.movement}</p>
            )}
            {watch.specifications?.diameter && (
              <p className="line-clamp-1">{watch.specifications.diameter}</p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
