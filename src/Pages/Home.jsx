import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Camera",
    description: "High-quality DSLR camera for rent.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Bike",
    description: "Mountain bike for outdoor adventures.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Laptop",
    description: "Powerful laptop for your work needs.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Drone",
    description: "Capture stunning aerial footage.",
    image: "https://via.placeholder.com/150",
  },
  
  // Add more items as needed
];

const items = [
  {
    id: 1,
    owner: "Jason",
    itemName: "Motorcycle",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    owner: "Daniel",
    itemName: "Canon SL2",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    owner: "Cody",
    itemName: "6-person board",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    owner: "Jason",
    itemName: "Chainsaw",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 5,
    owner: "Benjamin",
    itemName: "Travel trailer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 6,
    owner: "Carly",
    itemName: "Electric scooters",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 7,
    owner: "Keili",
    itemName: "Snorkel",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  
];

const Category = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Available Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to="/category/items">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Featured Items
        </h2>
        <div className="relative overflow-hidden">
          <div className="scrolling-wrapper">
            {items.map((item) => (
              <div
                key={item.id}
                className="scrolling-item bg-white shadow-md rounded p-4 m-2 w-48"
              >
                <Link to="/item/id">
                  <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <div className="text-blue-600 font-semibold">{`${item.owner}'s`}</div>
                  <div className="text-gray-800">{item.itemName}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
