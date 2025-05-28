import products from '../data/products.json';
import React from 'react';
// const products = [
//   {
//     id: 1,
//     name: 'Sayur bayam Organik',
//     price: 'Rp 25.000',
//     image: '/img/sayur.jpg',
//   },
//   {
//     id: 2,
//     name: 'Buah Segar',
//     price: 'Rp 30.000',
//     image: '/img/buah.jpg',
//   },
//   // Tambahkan produk lainnya sesuai kebutuhan
// ];

export default function ProductSection() {
  return (
    <section id="produk" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Produk Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">
                  {product.name}
                </h3>
                <p className="text-green-600 mb-4">{product.price}</p>
                <a
                  href="#"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Beli Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
