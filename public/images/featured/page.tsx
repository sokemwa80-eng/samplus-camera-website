import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentSlug = decodeURIComponent(params.slug).trim().toLowerCase();

  const product = products.find(
    (p) => p.slug?.trim().toLowerCase() === currentSlug
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        Product not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-8 text-red-500 font-bold hover:text-red-400"
        >
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Product Image */}
          <div className="bg-white rounded-3xl p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={900}
              className="w-full max-h-[600px] object-contain"
              priority
            />
          </div>

          {/* Product Details */}
          <div>

            <p className="text-gray-400 text-lg mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {product.name}
            </h1>

            {product.oldPrice && (
              <p
                className="text-3xl md:text-5xl font-black text-white mb-2"
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  textDecorationThickness: "4px",
                }}
              >
                {product.oldPrice}
              </p>
            )}

            <p className="text-5xl md:text-7xl font-black text-red-500 mb-8">
              {product.price}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Description
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description ||
                  "Professional camera equipment available at Samplus Camera."}
              </p>
            </div>

            {product.specs && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Specifications
                </h2>

                <ul className="space-y-2 text-gray-300">
                  {product.specs.map((spec: string) => (
                    <li key={spec}>
                      ✓ {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href="https://wa.me/254720082614"
              target="_blank"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-2xl"
            >
              Order via WhatsApp
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}