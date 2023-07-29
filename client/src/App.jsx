import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages/index";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#000000] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="w-full flex justify-center items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <p className="text-[#ffffff] text-sm">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/nisalrenuja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] font-medium"
            >
              Nisal Renuja
            </a>
          </p>
        </div>
      </div>
    </footer>
  </BrowserRouter>
);

export default App;
