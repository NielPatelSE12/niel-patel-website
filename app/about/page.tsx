import React from 'react';
import Navbar from '../components/Navbar';

interface Experience {
    title: string;
    school: string;
    location: string;
    date: string;
    description: string;
}

const About: React.FC = () => {
    // Dummy data for experience section
    const experiences: Experience[] = [
        {
            title: 'Software Engineer Student',
            school: 'Florida Gulf Coast University',
            location: 'Fort Myers, Florida',
            date: 'January 2021 - Present',
            description: 'As a Junior enrolled at Florida Gulf Coast University pursuing a degree in Software Engineering, I hold myself to high standards of performance and achievement. Proficient in effective time management, I prioritize tasks efficiently to ensure timely completion of projects. With a collaborative spirit, I excel within team environments, demonstrating resilience and perseverance in overcoming challenges.',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div>
                <Navbar></Navbar>
            </div>

            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <img src="profile-picture.jpg" alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto" />
                        <h2 className="text-3xl font-bold text-center mt-4">Niel Kishor Patel</h2>
                        <p className="text-lg font-semibold text-center text-gray-600">Software Engineer Student</p>
                        <p className="text-lg text-center text-gray-600">From: Naples, FL</p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                            <p className="text-lg text-gray-700">As a Junior enrolled at Florida Gulf Coast University pursuing a degree in Software Engineering, I hold myself to high standards of performance and achievement. Proficient in effective time management, I prioritize tasks efficiently to ensure timely completion of projects. With a collaborative spirit, I excel within team environments, demonstrating resilience and perseverance in overcoming challenges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
