import React from 'react';
import '../assets/css/Home.css';


const categories = [
    
  {
    id: 1,
    title: 'Camera',
    description: 'High-quality DSLR camera for rent.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Bike',
    description: 'Mountain bike for outdoor adventures.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Laptop',
    description: 'Powerful laptop for your work needs.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Drone',
    description: 'Capture stunning aerial footage.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    title: 'Camera',
    description: 'High-quality DSLR camera for rent.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Bike',
    description: 'Mountain bike for outdoor adventures.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Laptop',
    description: 'Powerful laptop for your work needs.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Drone',
    description: 'Capture stunning aerial footage.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more items as needed
];



const CategoryItems = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Categories Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={category.image} alt={category.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
