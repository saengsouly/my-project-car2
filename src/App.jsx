import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Listingspage from './components/Listingspage';
// import Adminpage from './pages/Adminpage';
import CarDetailModal from './components/CarDetailModal';
import AddCarModal from './components/AddCarModal';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isCarDetailModalOpen, setIsCarDetailModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);

    // Sample Data (ideally fetched from an API)
    const [cars, setCars] = useState([
        {
            id: 1,
            brand: 'Toyota',
            model: 'Camry',
            year: 2022,
            price: 1250000,
            mileage: 15000,
            condition: 'excellent',
            type: 'sedan',
            vin: 'JT2BF28K123456789',
            status: 'available',
            featured: true,
            images: ['https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Toyota+Camry'],
            description: 'รถสภาพดีเยี่ยม ใช้งานน้อย เจ้าของเดียว'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
            year: 2021,
            price: 950000,
            mileage: 25000,
            condition: 'good',
            type: 'sedan',
            vin: 'JHMFC1F16BX123456',
            status: 'available',
            featured: true,
            images: ['https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Honda+Civic'],
            description: 'รถยนต์ประหยัดน้ำมัน เหมาะสำหรับใช้ในเมือง'
        },
        {
            id: 3,
            brand: 'BMW',
            model: 'X3',
            year: 2023,
            price: 2800000,
            mileage: 8000,
            condition: 'excellent',
            type: 'suv',
            vin: 'WBAXG9C50ED123456',
            status: 'sold',
            featured: true,
            images: ['https://via.placeholder.com/400x300/1F2937/FFFFFF?text=BMW+X3'],
            description: 'SUV หรูหรา พร้อมระบบขับขี่อัตโนมัติ'
        },
        {
            id: 4,
            brand: 'Mazda',
            model: 'CX-5',
            year: 2020,
            price: 1100000,
            mileage: 35000,
            condition: 'good',
            type: 'suv',
            vin: 'JM3KFBCM1L0123456',
            status: 'available',
            featured: false,
            images: ['https://via.placeholder.com/400x300/059669/FFFFFF?text=Mazda+CX-5'],
            description: 'SUV ขนาดกลาง เหมาะสำหรับครอบครัว'
        },
        {
            id: 5,
            brand: 'Nissan',
            model: 'Navara',
            year: 2021,
            price: 850000,
            mileage: 40000,
            condition: 'good',
            type: 'pickup',
            vin: 'JN1TBNT40U0123456',
            status: 'available',
            featured: false,
            images: ['https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Nissan+Navara'],
            description: 'กระบะทนทาน เหมาะสำหรับงานหนัก'
        },
        {
            id: 6,
            brand: 'Mercedes',
            model: 'C-Class',
            year: 2022,
            price: 2200000,
            mileage: 12000,
            condition: 'excellent',
            type: 'sedan',
            vin: 'WDDGF4HB1EA123456',
            status: 'available',
            featured: true,
            images: ['https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Mercedes+C-Class'],
            description: 'รถหรูระดับพรีเมียม ออฟชั่นครบครัน'
        }
    ]);

    const [messages, setMessages] = useState([
        {
            id: 1,
            carId: 1,
            name: 'คุณสมชาย',
            phone: '081-234-5678',
            email: 'somchai@email.com',
            message: 'สนใจรถ Toyota Camry ครับ ขอดูรถได้ไหมครับ',
            date: '2024-03-15',
            status: 'new'
        },
        {
            id: 2,
            carId: 2,
            name: 'คุณสมหญิง',
            phone: '082-345-6789',
            email: 'somying@email.com',
            message: 'Honda Civic ยังมีอยู่ไหมคะ ต่อรองราคาได้ไหม',
            date: '2024-03-14',
            status: 'replied'
        }
    ]);

    const showCarDetail = (carId) => {
        const car = cars.find(c => c.id === carId);
        setSelectedCar(car);
        setIsCarDetailModalOpen(true);
    };

    const closeCarDetail = () => {
        setIsCarDetailModalOpen(false);
        setSelectedCar(null);
    };

    const addCar = (newCarData) => {
        const newId = cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 1;
        const newCar = {
            id: newId,
            status: 'available',
            featured: false,
            images: [`https://via.placeholder.com/400x300/6B7280/FFFFFF?text=${newCarData.brand}+${newCarData.model}`],
            description: newCarData.description || 'ไม่มีรายละเอียดเพิ่มเติม',
            ...newCarData
        };
        setCars([...cars, newCar]);
        setIsAddCarModalOpen(false);
        alert('เพิ่มรถใหม่เรียบร้อยแล้ว!');
    };

    const updateCarStatus = (carId) => {
        setCars(cars.map(car =>
            car.id === carId
                ? { ...car, status: car.status === 'available' ? 'sold' : 'available' }
                : car
        ));
    };

    const deleteCar = (carId) => {
        if (window.confirm('คุณแน่ใจหรือไม่ที่จะลบรถคันนี้?')) {
            setCars(cars.filter(car => car.id !== carId));
            alert('ลบรถเรียบร้อยแล้ว!');
        }
    };

    const updateMessageStatus = (messageId) => {
        setMessages(messages.map(msg =>
            msg.id === messageId
                ? { ...msg, status: 'replied' }
                : msg
        ));
        alert('ส่งการตอบกลับเรียบร้อยแล้ว! (Demo)');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onAddCarClick={() => setIsAddCarModalOpen(true)} />

            {currentPage === 'home' && <Homepage cars={cars} showCarDetail={showCarDetail} setCurrentPage={setCurrentPage} />}
            {currentPage === 'listings' && <Listingspage cars={cars} showCarDetail={showCarDetail} />}
            {currentPage === 'admin' && (
                <Adminpage
                    cars={cars}
                    messages={messages}
                    updateCarStatus={updateCarStatus}
                    deleteCar={deleteCar}
                    updateMessageStatus={updateMessageStatus}
                    showAddCarForm={() => setIsAddCarModalOpen(true)}
                />
            )}

            {isCarDetailModalOpen && selectedCar && (
                <CarDetailModal car={selectedCar} onClose={closeCarDetail} />
            )}

            {isAddCarModalOpen && (
                <AddCarModal onClose={() => setIsAddCarModalOpen(false)} onAddCar={addCar} />
            )}
        </div>
    );
}

export default App;