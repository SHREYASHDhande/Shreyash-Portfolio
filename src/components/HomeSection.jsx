import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { TextAnimate } from "./magicui/text-animate";
import FadeContent from "./ui/Fade";
import TiltedCard from "./ui/profile";
import Link from "next/link";

const HomeSection = () => {
    return (
        <section className="flex flex-col mt-8 md:flex-col items-start justify-start w-full md:items-center md:justify-between md:mt-20 py-12 px-12 md:px-20 md:w-2/3 space-y-6" id="home">
            <div className="md:items-center md:justify-between">
                <TextAnimate animation="blurInUp" by="character" once className="text-xl md:text-lg font-semibold text-gray-400">
                    Hi, I'm Shreyash Dhande
                </TextAnimate>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-6xl hidden md:block md:text-6xl font-bold mt-2 text-white">Software <br /> Developer</h1>
                        <h1 className="text-4xl md:hidden font-bold mt-2 text-white">Software <br />  <span className="text-purple-400">Developer</span></h1>
                        <div className="max-w-lg mt-6 md:mt-6">
                            <p className="text-gray-400 text-md font-semibold hidden md:block">
                                Transforming ideas into interactive and seamless digital experiences
                                with cutting-edge{" "}
                                <span className="text-purple-400">fullstack</span> development.
                            </p>
                        </div>
                    </div>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <TiltedCard
                            imageSrc="/profile.jpg"
                            altText="Shreyash Dhande"
                            captionText="Shreyash Dhande"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />
                    </FadeContent>
                </div>
            </div>
            <div className="flex gap-4 mt-12 py-4 md:py-0 md:mt-6 md:pt-6">
                <Link
                    href="https://github.com/SHREYASHDhande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition"
                >
                    <FaGithub className="w-6 h-6 text-white" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/shreyashdhande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition"
                >
                    <FaLinkedin className="w-6 h-6 text-white" />
                </Link>
                <Link
                    href="mailto:dhandeshreyash39@gmail.com"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition"
                >
                    <SiMinutemailer className="w-6 h-6 text-white" />
                </Link>
            </div>
        </section>
    );
};

export default HomeSection;
