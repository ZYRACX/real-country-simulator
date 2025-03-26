const inventory = [
    {
        name: "Wood",
        amount: 100,
    },
    {
        name: "Stone",
        amount: 100,
    },
    {
        name: "Iron",
        amount: 100,
    },
    {
        name: "Gold",
        amount: 100,
    },
];

function InventoryDisplay({ inventoryData }: { inventoryData: any }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inventoryData.map((item: any, index: number) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.amount}x</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                            Buy
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Sell
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Example usage within a component:
function Inventory() {
    return (
        <div>
            <InventoryDisplay inventoryData={inventory} />
        </div>
    );
}

export default Inventory;