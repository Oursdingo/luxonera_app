import { siteConfig } from "@/data/siteConfig";
import { CheckoutData } from "@/types/cart";

export const WHATSAPP_NUMBER = siteConfig.whatsapp.number;

export function formatCartForWhatsApp(cart: CheckoutData): string {
  let message = "🛍️ NOUVELLE COMMANDE LUXONERA\n\n";

  message += "👤 INFORMATIONS CLIENT:\n";
  message += "------------------\n";
  if (cart.customerName) {
    message += `Nom: ${cart.customerName}\n`;
  }
  if (cart.customerPhone) {
    message += `📱 Téléphone: ${cart.customerPhone}\n`;
  }

  // Informations du destinataire si différent
  if (cart.recipient) {
    message += "\n🎁 DESTINATAIRE DE LA LIVRAISON:\n";
    message += "------------------\n";
    message += `Prénom: ${cart.recipient.firstName}\n`;
    message += `Nom: ${cart.recipient.lastName}\n`;
    message += `📱 Téléphone: ${cart.recipient.phone}\n`;
  }

  // Message de livraison personnalisé
  if (cart.deliveryMessage) {
    message += "\n💬 MESSAGE DE LIVRAISON:\n";
    message += "------------------\n";
    message += `${cart.deliveryMessage}\n`;
  }

  message += "\n📦 ARTICLES:\n";
  message += "------------------\n";

  cart.items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    if (item.collection) {
      message += `   - Collection: ${item.collection}\n`;
    }
    if (item.color) {
      message += `   - Couleur: ${item.color}\n`;
    }
    message += `   - Quantité: ${item.quantity}\n`;
    if (item.price !== undefined) {
      message += `   - Prix: ${item.price.toLocaleString("fr-FR")} FCFA\n\n`;
    } else {
      message += `   - Prix: Sur demande\n\n`;
    }
  });

  message += "------------------\n";
  message += `💰 TOTAL: ${cart.total.toLocaleString("fr-FR")} FCFA\n\n`;
  message += "✅ Merci de confirmer cette commande pour procéder au paiement.";

  return encodeURIComponent(message);
}

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function openWhatsAppCheckout(cart: CheckoutData): void {
  const message = formatCartForWhatsApp(cart);
  const url = createWhatsAppLink(message);
  window.open(url, "_blank");
}

export function openWhatsAppChat(customMessage?: string): void {
  const defaultMessage = "Bonjour! Je suis intéressé par vos montres.";
  const message = encodeURIComponent(customMessage || defaultMessage);
  const url = createWhatsAppLink(message);
  window.open(url, "_blank");
}
