import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-xl font-bold text-white mb-2">RentalApp</h3>
            <p className="text-gray-400">
              Your go-to app for renting anything you need. Easy, fast, and reliable.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block hover:text-white">Home</a>
              <a href="#about" className="block hover:text-white">About</a>
              <a href="#services" className="block hover:text-white">Services</a>
              <a href="#contact" className="block hover:text-white">Contact</a>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M9.197 21V12.375H6v-3.5h3.197V6.657c0-3.084 1.786-4.792 4.625-4.792 1.34 0 2.744.236 2.744.236v3.125h-1.547c-1.526 0-2.001.945-2.001 1.912v2.337h3.406l-.544 3.5h-2.862V21h-3.562z"/></svg>
              </a>
              <a href="#twitter" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557a9.983 9.983 0 01-2.828.775 4.927 4.927 0 002.165-2.723c-.947.56-1.996.97-3.112 1.193a4.92 4.92 0 00-8.388 4.482A13.978 13.978 0 011.671 3.15a4.916 4.916 0 001.523 6.568A4.902 4.902 0 01.96 9.713v.061a4.92 4.92 0 003.946 4.827 4.936 4.936 0 01-2.212.085 4.926 4.926 0 004.6 3.417 9.876 9.876 0 01-6.102 2.103c-.396 0-.787-.023-1.175-.067A13.952 13.952 0 007.548 21c9.058 0 14.01-7.507 14.01-14.008 0-.213-.005-.426-.015-.637A10.012 10.012 0 0024 4.557z"/></svg>
              </a>
              <a href="#instagram" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.97.24 2.423.405a4.92 4.92 0 011.775 1.009 4.92 4.92 0 011.009 1.775c.165.454.351 1.253.405 2.423.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.97-.405 2.423a4.92 4.92 0 01-1.009 1.775 4.92 4.92 0 01-1.775 1.009c-.454.165-1.253.351-2.423.405-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.423-.405a4.92 4.92 0 01-1.775-1.009 4.92 4.92 0 01-1.009-1.775c-.165-.454-.351-1.253-.405-2.423C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.405-2.423a4.92 4.92 0 011.009-1.775A4.92 4.92 0 015.422 2.57c.454-.165 1.253-.351 2.423-.405C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072 5.765.13 4.702.357 3.78.816c-.933.464-1.747 1.078-2.53 1.861C.357 3.462-.256 4.276-.72 5.209c-.459.922-.686 1.985-.744 3.272C-.011 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.287.285 2.35.744 3.272.464.933 1.078 1.747 1.861 2.53.784.784 1.597 1.398 2.53 1.861.922.459 1.985.686 3.272.744 1.28.059 1.689.072 4.948.072 3.259 0 3.668-.013 4.948-.072 1.287-.058 2.35-.285 3.272-.744.933-.464 1.747-1.078 2.53-1.861.784-.784 1.398-1.597 1.861-2.53.459-.922.686-1.985.744-3.272.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.287-.285-2.35-.744-3.272-.464-.933-1.078-1.747-1.861-2.53-.784-.784-1.597-1.398-2.53-1.861-.922-.459-1.985-.686-3.272-.744C15.668.013 15.259 0 12 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">© 2024 RentalApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
