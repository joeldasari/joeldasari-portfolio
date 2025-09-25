import { useEffect } from "react";
import { useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Joel Dasari />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index += 1;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col bg-black text-gray-100 items-center justify-center fixed inset-0 z-50">
      <div className="mb-4 text-2xl md:text-3xl font-bold">{text}</div>
      <div className="w-[140px] md:w-[160px] h-[2px] bg-gray-800 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
