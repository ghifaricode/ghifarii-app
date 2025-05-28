import { useState } from 'react';
import produk from '../data/produk.json';

const ProductAvailabilityChecker = () => {
  const [kode, setKode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = () => {
    setError('');
    setResult(null);

    if (!kode) return setError('Kode produk wajib diisi');
    if (kode.length < 4) return setError('Minimal 4 karakter');

    const found = produk.find(p => p.kode_produk.toLowerCase() === kode.toLowerCase());
    setResult(found || false);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded my-6">
      <h2 className="text-xl font-bold mb-4">🛒 Cek Ketersediaan Produk</h2>
      <input
        type="text"
        placeholder="Kode Produk"
        value={kode}
        onChange={(e) => setKode(e.target.value)}
        className="border w-full p-2 rounded mb-2"
      />
      <button onClick={handleCheck} className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Cek Produk
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      {result && result.stok > 0 && (
        <div className="bg-green-100 text-green-800 p-4 mt-4 rounded">
          ✅ Produk <strong>{result.nama_produk}</strong> tersedia dengan harga Rp{result.harga}
          <br />
          Stok tersedia: <strong>{result.stok}</strong>
        </div>
      )}
      {result && result.stok === 0 && (
        <div className="bg-yellow-100 text-yellow-800 p-4 mt-4 rounded">
          ⚠️ Produk <strong>{result.nama_produk}</strong> saat ini sedang habis.
        </div>
      )}
      {result === false && <p className="text-red-600 mt-4">❌ Kode produk tidak ditemukan.</p>}
    </div>
  );
};

export default ProductAvailabilityChecker;
