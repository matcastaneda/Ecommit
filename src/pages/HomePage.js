import { React, useState } from 'react';
import { Toaster } from 'react-hot-toast';

// * Import Component
import EmojiList from '../components/EmojiList/EmojiList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const HomePage = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      {/* Banner */}
      <Header />

      {/* Componente para buscar emojis */}
      <div className="container-ecommit flex justify-center items-center px-10 mt-10">
        <div className="relative flex items-center w-full md:w-5/6">
          <input
            type="text"
            id="search"
            placeholder="Encuentra tu Emoji . . ."
            className="placeholder:italic text-gray-500 placeholder:text-gray-400 block w-full bg-white border rounded-md py-3 px-5 pr-11 pt-4 shadow-sm focus:outline-none focus:border-gray-500 text-lg"
            onChange={e => setSearch(e.target.value)}
          />
          <label className="absolute right-5 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Emojis */}
      <main className="container-ecommit main">
        <EmojiList search={search} />
      </main>

      <Footer autor={'Matías Castañeda'} usuario={'matcastaneda'} />

      <Toaster position="top-center" />
    </>
  );
};

export default HomePage;
