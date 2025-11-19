import Image from 'next/image'
import { siteConfig } from '@/data/siteConfig'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6">
            Luxonera
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            L&apos;excellence horlogère au service de votre style
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed mb-20">
          <p>
            Luxonera incarne l&apos;excellence horlogère depuis sa création.
            Spécialisés dans la distribution de montres de luxe, nous offrons
            une sélection rigoureuse des plus belles créations horlogères disponibles sur le marché.
          </p>

          <p>
            Chaque montre de notre collection est choisie pour son artisanat
            exceptionnel, son design intemporel et sa précision mécanique.
            Nous croyons que porter une montre de luxe, c&apos;est porter une œuvre
            d&apos;art au poignet, un héritage qui traverse le temps.
          </p>

          <p>
            Notre mission est de rendre accessible l&apos;excellence horlogère à travers
            une expérience d&apos;achat simple, transparente et personnalisée. Grâce à notre
            service WhatsApp, vous bénéficiez d&apos;un accompagnement sur mesure pour trouver
            la montre qui correspond parfaitement à votre style et vos attentes.
          </p>

          <p>
            Chaque montre Luxonera est garantie authentique et accompagnée de tous
            les certificats nécessaires. Nous nous engageons à vous offrir non seulement
            une montre d&apos;exception, mais aussi un service client irréprochable.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center p-8 bg-neutral-50 rounded-lg">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-display mb-3">Authenticité</h3>
            <p className="text-neutral-600">
              Toutes nos montres sont garanties 100% authentiques avec certificats d&apos;origine
            </p>
          </div>

          <div className="text-center p-8 bg-neutral-50 rounded-lg">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-display mb-3">Excellence</h3>
            <p className="text-neutral-600">
              Une sélection exigeante des plus belles pièces horlogères du monde
            </p>
          </div>

          <div className="text-center p-8 bg-neutral-50 rounded-lg">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-display mb-3">Service</h3>
            <p className="text-neutral-600">
              Un accompagnement personnalisé via WhatsApp pour votre satisfaction
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-black text-white rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-display text-accent-gold mb-2">100%</p>
              <p className="text-neutral-400">Montres authentiques</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display text-accent-gold mb-2">2 ans</p>
              <p className="text-neutral-400">Garantie internationale</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display text-accent-gold mb-2">24/7</p>
              <p className="text-neutral-400">Service WhatsApp</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display text-accent-gold mb-2">12+</p>
              <p className="text-neutral-400">Collections exclusives</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-neutral-50 to-white p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Prêt à découvrir votre prochaine montre?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous sur WhatsApp pour un conseil personnalisé
            et trouvez la montre qui vous correspond
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}?text=Bonjour!%20Je%20suis%20intéressé%20par%20vos%20montres%20de%20luxe`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
