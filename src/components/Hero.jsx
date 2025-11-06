import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#e8def7]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-xl">
          <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
            New • AW Collection
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            The Fragrance of Creativity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-prose">
            A minimalist curation of elevated essentials. Discover fluid silhouettes, serene textures, and statements that whisper.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors">Shop the edit</a>
            <a href="#story" className="inline-flex items-center justify-center rounded-full bg-white/80 text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-black/10 hover:bg-white transition-colors">Our story</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e8def7] via-transparent to-transparent opacity-70" />
    </section>
  );
}
