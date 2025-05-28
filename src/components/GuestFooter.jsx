export default function GuestFooter() {
    return (
        <footer className="bg-green-700 text-white py-10 mt-10">
            <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6">
                <div>
                    <h4 className="font-bold mb-2">Kontak Kami</h4>
                    <p>Email: info@sedap.com</p>
                    <p>Telp: +62 812 3456 7890</p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Sosial Media</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Partner</h4>
                    <img src="/img/partner.png" alt="Partner" className="h-12" />
                </div>
            </div>
        </footer>
    );
}
