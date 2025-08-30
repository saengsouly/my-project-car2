import React from 'react';

const CarCard = ({ car, showCarDetail }) => {
    const getConditionText = (condition) => {
        const conditions = {
            'excellent': 'ดีเยี่ยม',
            'good': 'ดี',
            'fair': 'พอใช้'
        };
        return conditions[condition] || condition;
    };

    const getTypeText = (type) => {
        const types = {
            'sedan': 'เซดาน',
            'suv': 'SUV',
            'hatchback': 'แฮทช์แบ็ก',
            'pickup': 'กระบะ'
        };
        return types[type] || type;
    };

    const statusClass = car.status === 'available' ? 'status-available' : 'status-sold';
    const statusText = car.status === 'available' ? 'พร้อมขาย' : 'ขายแล้ว';

    return (
        <div className="car-card bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
                <img src={car.images[0]} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                    <span className={`${statusClass} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {statusText}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="price-tag text-white px-4 py-2 rounded-full font-bold text-lg">
                        ฿{car.price.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{car.brand} {car.model}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div><i className="fas fa-calendar mr-2"></i>ปี {car.year}</div>
                    <div><i className="fas fa-tachometer-alt mr-2"></i>{car.mileage.toLocaleString()} กม.</div>
                    <div><i className="fas fa-star mr-2"></i>{getConditionText(car.condition)}</div>
                    <div><i className="fas fa-car mr-2"></i>{getTypeText(car.type)}</div>
                </div>
                <button
                    onClick={() => showCarDetail(car.id)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    <i className="fas fa-eye mr-2"></i>ดูรายละเอียด
                </button>
            </div>
        </div>
    );
};

export default CarCard;