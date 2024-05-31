import React from 'react';
import Navigation from '../components/Navbar';
import Image from 'next/image';
import Aboutpage from "./myimage.jpeg";

const About = () => {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Image
                    src={Aboutpage}
                    alt="Homepage Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="opacity-100"
                />
            </div>
            <Navigation />
            <div className="container mx-auto py-8 relative z-10">
                <div className="grid grid-cols-3 gap-4 place-items-stretch">
                    <div className="col-span-1 mr-2 mt-2">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4"></h2>
                            <div className="flex items-center justify-center mb-4">
                                <Image src="/profile.jpg" alt="Profile Picture" width={200} height={200} className="rounded-full" />
                            </div>
                            <h3 className="text-lg font-bold">Niel Kishor Patel</h3>
                            <p className="text-md text-gray-600">Bachelors, Software Engineering</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                            <p className="text-lg text-gray-700">As a Junior enrolled at Florida Gulf Coast University pursuing a degree in Software Engineering, I hold myself to high standards of performance and achievement. Proficient in effective time management, I prioritize tasks efficiently to ensure timely completion of projects. With a collaborative spirit, I excel within team environments, demonstrating resilience and perseverance in overcoming challenges.</p>
                        </div>
                    </div>
                    <div className="col-span-3 mt-4">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Hobbies and Personal Skills</h2>
                            <p className="text-lg text-gray-700">During my leisure time, I prioritize activities that foster relaxation and personal fulfillment. These include indulging in cinematic experiences through film, honing my coding skills, and engaging in outdoor pursuits like basketball with friends to maintain my physical well-being. Additionally, I derive great enjoyment from the hobby of collecting Pokemon cards, which not only provides entertainment but also stimulates my curiosity and appreciation for collectibles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
