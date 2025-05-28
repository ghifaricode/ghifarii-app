import testimonials from '../data/testimonials.json';

export default function TestimonialSection() {
    return (
        <section id="testimoni" className="py-12 bg-gray-100">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Apa Kata Mereka?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded shadow">
                            <div className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                                <div className="text-left">
                                    <p className="font-bold">{item.name}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{item.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
