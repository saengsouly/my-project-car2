import React from 'react';

const CarDetailModal = ({ car, onClose }) => {
    if (!car) return null;

    const getConditionText = (condition) => {
        const conditions = {
            'excellent': 'ดีเยี่ยม',
            'good': 'ดี',
            'fair': 'พอใช้'
        };
        return conditions[condition] || condition;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ข้อความของคุณถูกส่งเรียบร้อยแล้ว! เราจะติดต่อกลับในเร็วๆ นี้');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">{car.brand} {car.model} {car.year}</h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times text-2xl"></i>
                        </button>
                    </div>

                    <div className="mb-6">
                        <div className="w-full h-80 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img src={car.images[0]} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover" />
                        </div>
                        {/* You can add a gallery here if car.images has more than one image */}
                        <div className="flex space-x-2 overflow-x-auto">
                            {car.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Gallery thumbnail ${index + 1}`}
                                    className="w-20 h-16 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-600"
                                    // onClick={() => setMainImage(img)} // Optional: to change main image on click
                                />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-lg mb-4">รายละเอียดรถ</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">ยี่ห้อ:</span>
                                    <span className="font-medium">{car.brand}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">รุ่น:</span>
                                    <span className="font-medium">{car.model}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">ปี:</span>
                                    <span className="font-medium">{car.year}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">เลขไมล์:</span>
                                    <span className="font-medium">{car.mileage.toLocaleString()} กม.</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">ราคา:</span>
                                    <span className="font-bold text-xl text-blue-600">฿{car.price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">สภาพ:</span>
                                    <span className="font-medium">{getConditionText(car.condition)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">หมายเลขตัวถัง:</span>
                                    <span className="font-medium">{car.vin}</span>
                                </div>
                                <div className="py-2">
                                    <span className="text-gray-600">รายละเอียด:</span>
                                    <p className="mt-2">{car.description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4">ติดต่อสอบถาม</h4>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" placeholder="ชื่อ-นามสกุล" className="w-full p-3 border border-gray-300 rounded-lg" required />
                                <input type="tel" placeholder="เบอร์โทรศัพท์" className="w-full p-3 border border-gray-300 rounded-lg" required />
                                <input type="email" placeholder="อีเมล" className="w-full p-3 border border-gray-300 rounded-lg" required />
                                <textarea placeholder="ข้อความ" rows="4" className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
                                <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-medium">
                                    <i className="fas fa-paper-plane mr-2"></i>ส่งข้อความ
                                </button>
                            </form>

                            <div className="mt-6">
                                <h5 className="font-medium mb-3">แชร์ไปยัง</h5>
                                <div className="flex space-x-3">
                                    <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">
                                        <i className="fab fa-line"></i>
                                    </button>
                                    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                                        <i className="fab fa-facebook"></i>
                                    </button>
                                    <button className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailModal;