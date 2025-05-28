import { Link } from 'react-router-dom';
import Logo from './Logo'; // pastikan path-nya sesuai dengan struktur foldermu

export default function GuestHeader() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Logo />
                <nav className="space-x-4">
                    <a href="#about" className="text-gray-700 hover:text-green-600">Tentang</a>
                    <a href="#produk" className="text-gray-700 hover:text-green-600">Produk</a>
                    <a href="#testimoni" className="text-gray-700 hover:text-green-600">Testimoni</a>
                </nav>
                <div>
                    <Link to="/login" className="text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">Login</Link>
                    <Link to="/register" className="text-sm text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-100 ml-2">Register</Link>
                </div>
            </div>
        </header>
    );
}
