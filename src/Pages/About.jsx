import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <div className="container mx-auto bg-white p-8 rounded shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <img 
              src="https://media.istockphoto.com/id/950039636/vector/about-us-flat-design-orange-round-vector-icon-in-eps-10.jpg?s=612x612&w=0&k=20&c=3eXs5SjFq4TWTIi7zoWifTn9q4xulmyB53dyuPP4ypg=" 
              alt="About Us"
              className="rounded mb-8 md:mb-0"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Welcome to RentalApp, your go-to solution for renting anything you need. Our mission is to make renting easy, fast, and reliable. Whether you're looking to rent a camera for a photoshoot, a bike for a weekend adventure, or a laptop for work, we've got you covered.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in providing high-quality items at affordable prices. Our platform is designed to connect you with local renters who offer a wide range of items. Renting has never been more convenient.
            </p>
            <p className="text-gray-600">
              Thank you for choosing RentalApp. We look forward to serving you and making your rental experience as smooth as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
