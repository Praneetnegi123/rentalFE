import React, { useState } from "react";

const UserDashboard = ({ user, rentedItems, listedItems }) => {
  const [activeTab, setActiveTab] = useState("listedItems");

  user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  rentedItems = [
    { id: 1, name: "Laptop", dueDate: "2024-07-15", price: 50 },
    { id: 2, name: "Camera", dueDate: "2024-07-20", price: 30 },
  ];

  listedItems = [
    { id: 1, name: "Bike", availability: "Available", price: 20 },
    { id: 2, name: "Tent", availability: "Not Available", price: 10 },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "listedItems":
        return (
          <div>
            {listedItems.length === 0 ? (
              <p>No items currently listed.</p>
            ) : (
              <ul>
                {listedItems.map((item) => (
                  <li key={item.id} className="mb-2 p-2 border rounded">
                    <div className="font-semibold">{item.name}</div>
                    <div>
                      <strong>Availability:</strong> {item.availability}
                    </div>
                    <div>
                      <strong>Price:</strong> ${item.price}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      case "rentedItems":
        return (
          <div>
            {rentedItems.length === 0 ? (
              <p>No items currently on rent.</p>
            ) : (
              <ul>
                {rentedItems.map((item) => (
                  <li key={item.id} className="mb-2 p-2 border rounded">
                    <div className="font-semibold">{item.name}</div>
                    <div>
                      <strong>Rent Due:</strong> {item.dueDate}
                    </div>
                    <div>
                      <strong>Price:</strong> ${item.price}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="mb-2">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="mb-2">
          <strong>Email:</strong> {user.email}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-4">
        <div className="flex mb-4 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "listedItems"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("listedItems")}
          >
            My Items
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "rentedItems"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("rentedItems")}
          >
            Borrowed Items
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDashboard;
