import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

const Listingspage = ({ cars, showCarDetail }) => {
    const [currentFilteredCars, setCurrentFilteredCars] = useState([]);
    const [sortBy, setSortBy] = useState('price-low');
    const [conditionFilter, setConditionFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Helper to get all unique car types for the filter dropdown
    const allCarTypes = [...new Set(cars.map(car => car.type))];

    // Function to apply filters and sorting
    const applyFiltersAndSort = () => {
        let tempCars = [...cars];

        // Apply filters
        tempCars = tempCars.filter(car => {
            let matches = true;

            if (conditionFilter && car.condition !== conditionFilter) matches = false;
            if (typeFilter && car.type !== typeFilter) matches = false;
            if (minPrice && car.price < parseInt(minPrice)) matches = false;
            if (maxPrice && car.price > parseInt(maxPrice)) matches = false;

            return matches;
        });

        // Apply sorting
        tempCars.sort((a, b) => {
            if (sortBy === 'price-low') {
                return a.price - b.price;
            } else if (sortBy === 'price-high') {
                return b.price - a.price;
            } else if (sortBy === 'year-new') {
                return b.year - a.year;
            } else if (sortBy === 'year-old') {
                return a.year - b.year;
            }
            return 0;
        });

        setCurrentFilteredCars(tempCars);
        setCurrentPage(1); // Reset to first page after filters/sort change
    };

    useEffect(() => {
        applyFiltersAndSort();
    }, [cars, sortBy, conditionFilter, typeFilter, minPrice, maxPrice]); 

    // Pagination logic
    const totalPages = Math.ceil(currentFilteredCars.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const carsToShow = currentFilteredCars.slice(startIndex, endIndex);

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`px-4 py-2 border border-gray-300 rounded-lg transition ${
                        i === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div id="listingspage" className="page">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">รายการรถทั้งหมด</h2>
                    <div className="flex space-x-4">
                        <select
                            id="sortBy"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="price-low">ราคาต่ำ - สูง</option>
                            <option value="price-high">ราคาสูง - ต่ำ</option>
                            <option value="year-new">ปีใหม่ - เก่า</option>
                            <option value="year-old">ปีเก่า - ใหม่</option>
                        </select>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h4 className="font-semibold mb-4">กรองรายการ</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <select
                            id="conditionFilter"
                            value={conditionFilter}
                            onChange={(e) => setConditionFilter(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">สภาพรถ</option>
                            <option value="excellent">ดีเยี่ยม</option>
                            <option value="good">ดี</option>
                            <option value="fair">พอใช้</option>
                        </select>
                        <select
                            id="typeFilter"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">ประเภทรถ</option>
                            {allCarTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            id="minPrice"
                            placeholder="ราคาต่ำสุด"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="number"
                            id="maxPrice"
                            placeholder="ราคาสูงสุด"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    {/* The "Apply Filters" button is no longer strictly needed as filters apply on change,
                        but you could keep it to explicitly trigger if desired, or for more complex filters. */}
                    {/* <button onClick={applyFiltersAndSort} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        ใช้ตัวกรอง
                    </button> */}
                </div>

                <div id="carGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {carsToShow.length > 0 ? (
                        carsToShow.map(car => (
                            <CarCard key={car.id} car={car} showCarDetail={showCarDetail} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-600 text-lg">
                            ไม่พบรถยนต์ที่ตรงกับตัวกรองของคุณ
                        </p>
                    )}
                </div>

                <div id="pagination" className="flex justify-center mt-12 space-x-2">
                    {renderPaginationButtons()}
                </div>
            </div>
        </div>
    );
};

export default Listingspage;