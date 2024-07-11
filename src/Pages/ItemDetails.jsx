import React from 'react';

const ItemDetailForRent = ({ item }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <div className="container mx-auto bg-white p-8 rounded shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="text-2xl font-semibold text-gray-800 mb-4">${item.rentalPrice} / day</div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailForRent;
