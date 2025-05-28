import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import TestimonialSection from "../components/TestimonialsSection";

export default function Guest() {
  return (
    <>
      <HeroSection />

      {/* 🔎 Layanan Cek Mandiri */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center font-serif">
          <h2 className="text-3xl font-bold text-green-800 mb-10">🔎 Layanan Cek Mandiri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/cek-poin"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:bg-blue-50 border border-blue-200"
            >
              <img src="/icons/poin.svg" alt="Cek Poin" className="mx-auto w-12 mb-4" />
              <p className="font-semibold text-green-800">Cek Poin Reward Sedap</p>
            </Link>
            <Link
              to="/cek-pesanan"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:bg-green-50 border border-green-200"
            >
              <img src="/icons/pesanan.svg" alt="Cek Pesanan" className="mx-auto w-12 mb-4" />
              <p className="font-semibold text-green-800">Cek Status Pesanan</p>
            </Link>
            <Link
              to="/cek-member"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:bg-yellow-50 border border-yellow-200"
            >
              <img src="/icons/member.svg" alt="Cek Member" className="mx-auto w-12 mb-4" />
              <p className="font-semibold text-green-800">Cek Keanggotaan</p>
            </Link>
            <Link
              to="/cek-produk"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:bg-red-50 border border-red-200"
            >
              <img src="/icons/produk.svg" alt="Cek Produk" className="mx-auto w-12 mb-4" />
              <p className="font-semibold text-green-800">Cek Ketersediaan Produk</p>
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />
      <ProductSection />
      <TestimonialSection />
    </>
  );
}
