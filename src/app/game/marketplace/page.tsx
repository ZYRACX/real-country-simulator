'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
const marketplaceItems = [
    { name: "Wood", price: 10, type: "resource" },
    { name: "Stone", price: 15, type: "resource" },
    { name: "Iron", price: 25, type: "resource" },
    { name: "Gold", price: 50, type: "resource" },
];

function Marketplace() {
    const [searchTerm, setSearchTerm] = useState(""); // State for the search input
    const router = useRouter();

    const handleBuy = (itemName: string) => {
        router.push(`/game/marketplace/buy/${itemName}`);
    };

    const handleSell = (itemName: string, price: number) => {
        router.push(`/game/marketplace/sell/${itemName}`);
    };

    const filteredItems = marketplaceItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter items based on search term
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Marketplace</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col"
                    >
                        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                        <p className="text-sm text-gray-600">Price: ${item.price}</p>
                        <div className="flex justify-evenly mt-4">
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                                onClick={() => handleBuy(item.name)}
                            >
                                Buy
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                                onClick={() => handleSell(item.name)}
                            >
                                Sell
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Marketplace;
