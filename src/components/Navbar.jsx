import React from 'react';

const Navbar = ({ currentPage, setCurrentPage, onAddCarClick }) => {
    const navButtons = [
        { name: 'หน้าแรก', page: 'home' },
        { name: 'รายการรถ', page: 'listings' },
        { name: 'จัดการระบบ', page: 'admin' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-car text-3xl text-blue-600"></i>
                        <h1 className="text-2xl font-bold text-gray-800">AutoDeal Pro</h1>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {navButtons.map((btn) => (
                            <button
                                key={btn.page}
                                onClick={() => setCurrentPage(btn.page)}
                                className={`nav-btn text-gray-700 hover:text-blue-600 font-medium ${currentPage === btn.page ? 'text-blue-600' : ''}`}
                            >
                                {btn.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onAddCarClick}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            <i className="fas fa-plus mr-2"></i>ลงขายรถ
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;