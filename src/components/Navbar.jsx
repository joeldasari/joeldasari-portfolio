import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop Menu  */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 max-w-5xl mx-auto p-4 flex justify-between items-center">
        <a href="#" className="text-lg font-bold">
          Joel Dasari
        </a>
        {/* Desktop Menu Links  */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#home"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        {/* Mobile Menu Button  */}
        <AlignJustify
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        />
      </div>
      {/* Mobile Menu  */}
      <div
        onClick={(e) =>
          e.target === e.currentTarget ? setIsOpen(false) : null
        }
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full overflow-hidden"
        } md:hidden fixed inset-0 z-50 transition-transform ease-in-out duration-500 h-full`}
      >
        <div className="w-[50%] bg-black rounded-l-2xl border-l border-gray-700 absolute top-0 bottom-0 right-0 p-4 flex flex-col gap-4">
          <X
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          />
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors duration-300 mt-12"
          >
            Home
          </a>
          <hr className="border-gray-700" />
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <hr className="border-gray-700" />
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Skills
          </a>
          <hr className="border-gray-700" />
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
          <hr className="border-gray-700" />
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
          <hr className="border-gray-700" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
