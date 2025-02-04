import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GameLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-500 to-pink-">
        {/* Navbar */}
        <header className="sticky top-0 z-10 bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-700">Game Zone</div>
            <ul className="flex space-x-6 text-lg text-gray-800">
              <li>
                <Link to="games/avalon" className="hover:text-indigo-700">
                  Avalon
                </Link>
              </li>
              <li>
                <Link to="games/spy" className="hover:text-indigo-700">
                  Spy
                </Link>
              </li>
              <li>
                <Link to="games/down" className="hover:text-indigo-700">
                  Down
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="py-4 max-w-7xl mx-auto">{<Outlet />}</main>

        {/* Footer */}
        <footer className="bg-indigo-700 text-white py-6 text-center">
          <p>&copy; 2025 Game Zone. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default GameLayout;

// {/* Avalon Section */}
// <section id="avalon" className="max-w-7xl mx-auto px-4 py-10 bg-white shadow-lg rounded-lg mb-10">
// <h2 className="text-3xl font-semibold text-indigo-600">Avalon - The Resistance</h2>
// <p className="mt-4 text-gray-700">Join the battle for good or evil in this epic social deduction game.</p>
// </section>

// {/* Spy Section */}
// <section id="spy" className="max-w-7xl mx-auto px-4 py-10 bg-indigo-600 text-white shadow-lg rounded-lg mb-10">
// <h2 className="text-3xl font-semibold">Spy Game</h2>
// <p className="mt-4">Play the ultimate spy game and guess who is the spy!</p>
// </section>

// {/* Down Section */}
// <section id="down" className="max-w-7xl mx-auto px-4 py-10 bg-yellow-400 shadow-lg rounded-lg mb-10">
// <h2 className="text-3xl font-semibold text-gray-800">Down Game</h2>
// <p className="mt-4 text-gray-800">A fun game where you need to strategize and come out on top.</p>
// </section>
