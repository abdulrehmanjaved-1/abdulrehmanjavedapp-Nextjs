import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
  <Image
  src="/assets/hello.jpeg"
  alt="avatar"
  className="mx-auto border rounded-full"
  height={200}
  width={140}
  layout="intrinsic"
  quality={100}
/>
{/* <img src="/assets/hello.jpeg" className="mx-auto border rounded-full" alt="Hello" width={128} height={128} /> */}

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-500 ">AbdulRehman</span> Javed
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full ">
        <a href="https://www.github.com/abdulrehmanjaved-1" target="_blank" aria-label="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/abdulrehman.javed.984" target="_blank" aria-label="Facebook" >
          <FaFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/__abdulrehmanjaved__/ " target="_blank" aria-label="Instagram">
          <FaInstagram className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Lahore, Pakistan</span>
        </div>
        <p className="my-2 ">abdulrehmanjaveds12</p><span>@gmail.com</span>
        <p className="my-2"> 03244078538 / cell </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-green-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:abdulrehmanjaveds12@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-green-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
