const products = [
  {
    id: 1,
    name: "Satin Slip Dress",
    price: "$240",
    color: "Pearl",
    image:
      "https://images.unsplash.com/photo-1520975922203-b3f28f37b57a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cropped Wool Jacket",
    price: "$320",
    color: "Graphite",
    image:
      "https://images.unsplash.com/photo-1548778943-5dde6c62d8b4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pleated Midi Skirt",
    price: "$180",
    color: "Lilac",
    image:
      "https://images.unsplash.com/photo-1520975941210-7f8a698dc451?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Relaxed Linen Shirt",
    price: "$140",
    color: "Ivory",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
];

function ProductCard({ product }) {
  return (
    <a href="#" className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition-all">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <span className="text-sm text-gray-700">{product.price}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">{product.color}</p>
        <button className="mt-3 w-full rounded-full bg-gray-900 text-white py-2 text-xs font-medium hover:bg-black">Add to bag</button>
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section id="collections" className="bg-[#f6f4fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Featured Edit</h2>
          <a href="#" className="text-sm text-gray-700 hover:text-black">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
