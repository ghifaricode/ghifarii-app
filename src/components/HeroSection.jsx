import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Selamat Datang di Toko Organik Kami
          </h1>
          <p className="text-green-700 mb-6">
            Temukan berbagai produk organik berkualitas untuk hidup sehat Anda.
          </p>
          <a
            href="#produk"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Belanja Sekarang
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/img/hero1.png"
            alt="Produk Organik"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
