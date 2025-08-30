import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

const Homepage = ({ cars, showCarDetail, setCurrentPage }) => {
    const [brandFilter, setBrandFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [featuredCars, setFeaturedCars] = useState([]);

    useEffect(() => {
        setFeaturedCars(cars.filter(car => car.featured));
    }, [cars]);

    const searchCars = () => {
        // This function will navigate to the listings page with filters applied.
        // For simplicity, we'll just navigate to the listings page in this demo.
        // In a real app, you might pass filter state or use a global state manager.
        setCurrentPage('listings');
        // You would typically pass the filters to the Listingspage or a global state here
    };

    return (
        <div id="homepage" className="page">
            <section className="hero-bg text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold mb-6">ค้นหารถมือสองคุณภาพ</h2>
                    <p className="text-xl mb-8 opacity-90">รถมือสองคุณภาพดี ราคาเป็นธรรม พร้อมบริการหลังการขายที่ดีที่สุด</p>

                    <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500">
                                <option value="">เลือกยี่ห้อ</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Mazda">Mazda</option>
                                <option value="Nissan">Nissan</option>
                                <option value="BMW">BMW</option>
                                <option value="Mercedes">Mercedes-Benz</option>
                            </select>
                            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500">
                                <option value="">เลือกปี</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500">
                                <option value="">ช่วงราคา</option>
                                <option value="0-500000">ต่ำกว่า 500,000</option>
                                <option value="500000-1000000">500,000 - 1,000,000</option>
                                <option value="1000000-2000000">1,000,000 - 2,000,000</option>
                                <option value="2000000+">มากกว่า 2,000,000</option>
                            </select>
                            <button onClick={searchCars} className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-medium">
                                <i className="fas fa-search mr-2"></i>ค้นหา
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-4">🔥 โปรโมชั่นพิเศษ</h3>
                    <p className="text-xl mb-6">ลดราคาสูงสุด 100,000 บาท สำหรับรถยนต์คุณภาพพรีเมียม</p>
                    <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                        ดูโปรโมชั่นทั้งหมด
                    </button>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">รถแนะนำ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCars.map(car => (
                            <CarCard key={car.id} car={car} showCarDetail={showCarDetail} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;