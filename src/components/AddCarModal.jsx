import React, { useState } from 'react';

const AddCarModal = ({ onClose, onAddCar }) => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: '',
        price: '',
        mileage: '',
        condition: '',
        type: '',
        vin: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCar(formData);
        setFormData({ // Reset form
            brand: '', model: '', year: '', price: '', mileage: '',
            condition: '', type: '', vin: '', description: ''
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">เพิ่มรถใหม่</h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times text-2xl"></i>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="brand" placeholder="ยี่ห้อ" value={formData.brand} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required />
                            <input type="text" name="model" placeholder="รุ่น" value={formData.model} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required />
                            <input type="number" name="year" placeholder="ปี" value={formData.year} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required />
                            <input type="number" name="price" placeholder="ราคา" value={formData.price} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required />
                            <input type="number" name="mileage" placeholder="เลขไมล์" value={formData.mileage} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required />
                            <select name="condition" value={formData.condition} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required>
                                <option value="">เลือกสภาพ</option>
                                <option value="excellent">ดีเยี่ยม</option>
                                <option value="good">ดี</option>
                                <option value="fair">พอใช้</option>
                            </select>
                            <select name="type" value={formData.type} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required>
                                <option value="">ประเภทรถ</option>
                                <option value="sedan">เซดาน</option>
                                <option value="suv">SUV</option>
                                <option value="hatchback">แฮทช์แบ็ก</option>
                                <option value="pickup">กระบะ</option>
                            </select>
                            <input type="text" name="vin" placeholder="หมายเลขตัวถัง (VIN)" value={formData.vin} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg" required />
                        </div>
                        <textarea name="description" placeholder="รายละเอียดเพิ่มเติม" rows="4" value={formData.description} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>

                        <div className="flex space-x-4">
                            <button type="button" onClick={onClose} className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-400 transition">
                                ยกเลิก
                            </button>
                            <button type="submit" className="flex-1 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                                เพิ่มรถ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCarModal;