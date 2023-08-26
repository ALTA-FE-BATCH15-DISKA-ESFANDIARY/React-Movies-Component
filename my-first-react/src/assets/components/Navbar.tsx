import { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-black shadow p-4 fixed top-0 mb-4 w-full">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="/" className="text-white font-bold hover:text-cyan-400">Now Playing Movies</a>
          </li>
          <li>
            <a href="/favorites" className="text-white font-bold hover:text-cyan-400">Favorite Movies</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
