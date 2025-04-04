import React from 'react'
import { Outlet } from 'react-router-dom';

const MobileLayout = () => {
    return (
        <div className="mobile-section">
            {/* Shared UI for all Mobile pages */}
            <header className="bg-gray-800 text-white py-4">
                <h1 className="text-2xl text-center">Mobile Services</h1>
            </header>
            {/* Page-specific content goes here */}
            <section className="py-6">
                <Outlet />
            </section>
        </div>
    );
}

export default MobileLayout