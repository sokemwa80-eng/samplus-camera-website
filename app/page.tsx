import { Camera, MessageCircle, ShoppingBag } from "lucide-react";
import { products } from "../data/products";

const categories = [
  "Cameras",
  "Video Cameras",
  "Cinema Cameras",
  "Wireless Video Transmitters & Receivers",
  "Drones",
  "Audio",
  "Livestreaming",
  "Lighting",
  "Accessories",
  "Lenses",
  "Action Cameras",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/95 border-b border-red-600">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 whitespace-nowrap">
            <Camera className="text-red-600 w-7 h-7 md:w-8 md:h-8" />
            <span className="text-xl md:text-4xl font-black whitespace-nowrap">
              <span className="text-red-600">SAMPLUS</span>{" "}
              <span className="text-white">CAMERA</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10 font-bold text-xl">
            <a href="#" className="text-red-500">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/254720082614"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 px-3 md:px-6 py-2 md:py-3 rounded-2xl font-bold flex items-center gap-2 whitespace-nowrap text-sm md:text-base"
          >
            <MessageCircle size={22} />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* JIJI BANNER */}
      <div className="bg-black border-b border-red-600 py-3">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-4 px-4">
          <span className="text-white font-extrabold uppercase text-sm md:text-xl">
            SHOP IN OUR STORE ON
          </span>

          <a
            href="https://jiji.co.ke/shop/sampluscamera"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2 rounded-full text-sm md:text-lg transition"
          >
            JIJI.CO.KE
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[170px] md:min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt="Camera"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-6 w-full">
          <div className="w-full">
            <h1 className="hidden md:block text-8xl font-black leading-none mb-6 mt-0">
              <span className="text-red-600">SAMPLUS</span>{" "}
              <span className="text-white">CAMERA</span>
            </h1>

           <p className="hidden md:block md:text-xl lg:text-2xl text-gray-200 md:leading-8 md:mb-8 text-left w-full">
              Professional Cameras, Video Equipment, Drones, Audio Gear,
              Livestreaming Equipment and Accessories. We provide high-quality
              products for photographers, videographers, content creators,
              journalists and businesses. Whether you are capturing memories,
              producing content, or growing your brand, Samplus Camera has the
              right equipment to bring your vision to life.
            </p>

           <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-0">
              <a
                href="#products"
                className="bg-red-600 hover:bg-red-700 px-5 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-base md:text-xl flex items-center justify-center gap-3 transition whitespace-nowrap"
              >
                <ShoppingBag size={24} />
                Shop Products
              </a>

              <a
                href="https://wa.me/254720082614"
                target="_blank"
                className="hidden md:flex border border-white/30 hover:bg-white hover:text-black px-5 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-base md:text-xl items-center justify-center gap-3 transition whitespace-nowrap"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
  id="products"
  className="relative z-40 py-10 md:py-16 px-4 md:px-6 bg-black -mt-45 md:-mt-70"
>
        <div className="max-w-7xl mx-auto px-2 md:px-0">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (item) => item.category === category
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div key={category} className="mb-24">
                <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 whitespace-nowrap">
                    {category}
                  </h2>
                  <div className="w-32 h-1 bg-red-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                  {categoryProducts.map((item) => (
                    <div
                      key={item.name}
                      className="product-card bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
                    >
                      <div className="bg-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="product-image w-full h-40 md:h-64 object-contain"
                        />
                      </div>

                      <div className="p-4 md:p-6">
                        <h3 className="text-sm md:text-xl font-bold mb-3 md:mb-4 min-h-[55px] md:min-h-[70px]">
                          {item.name}
                        </h3>

                        <p className="text-xl md:text-3xl font-black text-red-500">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-black border-t border-red-600">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-6xl font-black mb-6 whitespace-nowrap">
                ABOUT <span className="text-red-600">SAMPLUS</span> CAMERA
              </h2>

              <div className="w-20 h-1 bg-red-600 mb-8" />

              <p className="text-base md:text-xl text-gray-300 leading-7 md:leading-8 max-w-3xl">
                At Samplus Camera, we are passionate about empowering creators,
                professionals, and businesses with the right tools to bring their
                vision to life. From high-quality cameras to professional
                accessories, we provide reliable equipment, expert advice, and
                exceptional service. Whether you are capturing memories,
                producing content, or growing your brand, Samplus Camera is your
                trusted partner.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/Featured/hero-camera.png"
                alt="Samplus Camera"
                className="hidden md:block absolute right-0 top-0 h-full w-1/2 object-contain opacity-70"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">
            {[
              ["QUALITY PRODUCTS", "We offer only genuine and high-quality camera gear."],
              ["EXPERT SUPPORT", "Our team is always ready to help you make the right choice."],
              ["FAST DELIVERY", "Quick and reliable delivery across Kenya."],
              ["TRUSTED PARTNER", "Hundreds of creators and businesses trust us."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-red-600 font-black text-xl mb-3">
                  {title}
                </h3>
                <p className="text-gray-300 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            WHY CHOOSE <span className="text-red-600">SAMPLUS</span> CAMERA?
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>

          <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-7 mb-12">
            We are more than just a camera store. We are a one-stop shop for
            photographers, videographers, content creators, and businesses that
            want the best equipment and unmatched customer service.
          </p>
        </div>
      </section>
      {/* TRUSTED BRANDS */}
      <section className="py-10 px-6 bg-black border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">

          <img src="/brands/canon.png" alt="Canon" className="h-30 mx-auto" />

          <img src="/brands/nikon.png" alt="Nikon" className="h-30 mx-auto" />

          <img src="/brands/sony.png" alt="Sony" className="h-30 mx-auto" />

          <img src="/brands/panasonic.png" alt="Panasonic" className="h-30 mx-auto" />

          <img src="/brands/lumix.png" alt="Lumix" className="h-30 mx-auto" />

          <img src="/brands/dji.png" alt="DJI" className="h-30 mx-auto" />

          <img src="/brands/blackmagic.png" alt="Blackmagic Design" className="h-30 mx-auto" />

          <img src="/brands/red.png" alt="RED Digital Cinema" className="h-30 mx-auto" />

          <img src="/brands/sigma.png" alt="Sigma" className="h-12 mx-auto" />

          <img src="/brands/tamron.png" alt="Tamron" className="h-30 mx-auto" />

          <img src="/brands/godox.png" alt="Godox" className="h-20 mx-auto" />

        </div>
      </section>
{/* MPESA PAYMENT */}
<section className="py-12 md:py-16 px-4 md:px-6 bg-black border-t border-white/10">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
      PAY VIA <span className="text-green-500">M-PESA</span>
    </h2>

    <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>

    <img
      src="/images/mpesa-till.jpg"
      alt="Samplus Camera M-Pesa Till Number"
      className="w-full rounded-3xl shadow-2xl"
    />

  </div>
</section>
      {/* CONTACT */}
      <section id="contact" className="py-10 px-6 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-black text-red-500 mb-4 whitespace-nowrap">
            Contact Samplus Camera
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-6 md:leading-7 mb-4">
            Simara Mall (Former Tuskys, Opposite National Archives), 4th Floor,
            Room F63, Nairobi.
          </p>

          <p className="text-2xl md:text-3xl font-black text-white mb-6">
            +254 720 082 614
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254720082614"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl font-bold text-xl transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="https://jiji.co.ke/shop/sampluscamera"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl font-bold text-xl transition"
            >
              Visit Jiji Shop
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
  <h3 className="text-xl font-bold text-red-500 mb-4">
    Follow Samplus Camera
  </h3>

  <div className="flex flex-wrap justify-center gap-6 text-white">
    <a
      href="https://x.com/SamplusCamera"
      target="_blank"
      className="hover:text-red-500"
    >
      X (Twitter)
    </a>

    <a
      href="https://tiktok.com/@sampluscamera"
      target="_blank"
      className="hover:text-red-500"
    >
      TikTok
    </a>

    <a
      href="https://instagram.com/samplus_camera"
      target="_blank"
      className="hover:text-red-500"
    >
      Instagram
    </a>

    <a
      href="https://facebook.com/sampluscamera"
      target="_blank"
      className="hover:text-red-500"
    >
      Facebook
    </a>

    <a
      href="https://youtube.com/@sampluscamera"
      target="_blank"
      className="hover:text-red-500"
    >
      YouTube
    </a>
  </div>
</div>
      </section>
    </main>
  );
}
