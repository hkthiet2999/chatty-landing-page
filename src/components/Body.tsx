import capture1 from "../assets/capture1.png";
import capture2 from "../assets/capture2.png";
import capture3 from "../assets/capture3.png";
import capture4 from "../assets/capture4.png";
import capture5 from "../assets/capture5.png";

import darkCapture1 from "../assets/dark-capture1.png";
import darkCapture2 from "../assets/dark-capture2.png";
import darkCapture3 from "../assets/dark-capture3.png";
import darkCapture4 from "../assets/dark-capture4.png";
import darkCapture5 from "../assets/dark-capture5.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';

import ImageBanner from "./Banner";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

function Body() {
    const lightImages  = [
        capture4,
        capture1,
        capture2,
        capture3,
        capture5
    ];
    const darkImages = [
        darkCapture4,
        darkCapture1,
        darkCapture2,
        darkCapture3,
        darkCapture5
    ];

    const theme = useSelector((state: RootState) => state.theme.theme);
    const images = theme === "dark" ? darkImages : lightImages;

    React.useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="text-center justify-between">
            <h1 className="text-xl md:text-4xl dark:text-white">
                Download <span className="font-extrabold">Chatty App</span> for computers
            </h1>
            <p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">
                The Chatty App is now available on Windows, Mac OS, Linux, and Web.
            </p>

            <h2 className="mb-2 mt-4 text-black dark:text-white">Download <span className="font-extrabold">Chatty App</span> for Desktop</h2>

            <div className="flex space-x-4 justify-center">
                <button className="border-2 border-gray-500 dark:border-gray-400 hover:border-gray-600 bg-transparent text-black dark:text-white hover:text-gray-600 px-4 py-2 rounded-full transition duration-300">
                    <FontAwesomeIcon icon={faWindows} size="2x" />
                </button>
                <button className="border-2 border-gray-500 dark:border-gray-400 hover:border-gray-600 bg-transparent text-black dark:text-white hover:text-gray-600 px-4 py-2 rounded-full transition duration-300">
                    <FontAwesomeIcon icon={faApple} size="2x" />
                </button>
                <button className="border-2 border-gray-500 dark:border-gray-400 hover:border-gray-600 bg-transparent text-black dark:text-white hover:text-gray-600 px-4 py-2 rounded-full transition duration-300">
                    <FontAwesomeIcon icon={faLinux} size="2x" />
                </button>
            </div>

            <h2 className="mb-2 mt-2 text-black dark:text-white">
                <a href="https://white-island-00bebbb10.3.azurestaticapps.net/" target="_blank">
                    Or open Chatty App in your Browser
                </a>
            </h2>

            <div className="flex justify-center mt-10 items-center">
                <ImageBanner images={images} />
            </div>
        </div>
    );
}

export default Body;
