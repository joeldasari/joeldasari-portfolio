import { MapPin } from "lucide-react";
import myImage from "../../assets/icon.png";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-12 flex flex-col items-center justify-around"
    >
      <div className="text-center px-4 flex flex-col items-center gap-6">
        <img
          className="size-36 rounded-full mx-auto border-4 border-gray-700"
          src={myImage}
          alt="image"
        />
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I am Joel</h1>

        <div className="bg-stone-800 flex items-center gap-2 text-white p-2 rounded text-xs">
          <MapPin className="size-3" /> Orlando, Florida
        </div>

        <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg">
          A <span className="font-bold text-white">Fullstack Developer</span>{" "}
          who loves crafting clean, scalable web applications. My goal is to
          build solutions that offers exceptional performance and a delightful
          user experience.
        </p>
        <div className="flex items-center gap-8">
          <a
            className="bg-blue-500 text-white text-xs md:text-sm font-medium px-4 py-2 rounded"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="bg-white text-black text-xs md:text-sm font-medium px-4 py-2 rounded"
            target="_blank"
            href="https://drive.google.com/file/d/1Ar8DeeCmiFr95v2QLJ_7K9BkemdfS2M5/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-4 animate-bounce">
        <p>Scroll</p>
        <ArrowDown />
      </div> */}
    </section>
  );
};

export default Home;
