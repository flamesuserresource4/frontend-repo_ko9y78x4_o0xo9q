import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />

        <section id="new" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">New Arrivals</h2>
                <p className="mt-3 text-gray-700 max-w-prose">
                  Subtle statements in soft hues. Effortless layers designed to mix, match and move with you.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="#collections" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black">Shop now</a>
                  <a href="#story" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-black/10 hover:bg-gray-50">Lookbook</a>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop"
                  alt="New arrivals editorial"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="bg-[#f6f4fb] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Story</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Born from the pursuit of quiet luxury, we craft seasonless pieces that celebrate form, function and feeling. 
                  Each garment is designed to live beautifully in your wardrobe—today, tomorrow, and beyond.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
                  alt="Studio details"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
