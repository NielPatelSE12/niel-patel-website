import Navbar from "../components/Navbar";
import Image from "next/image";
import contact from "./contact.jpeg";

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Image
                    src={contact}
                    alt="Homepage Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    style={{ zIndex: -1 }} // Ensure background image is behind all other content
                />
                <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition-transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                    <div className="mb-6">
                        <div className="mb-4">
                            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Email:</h3>
                            <p className="font-normal text-gray-700 dark:text-gray-400">NielPatel1212@outlook.com</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Phone Number:</h3>
                            <p className="font-normal text-gray-700 dark:text-gray-400">239-207-4746</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">LinkedIn:</h3>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><a href="https://www.linkedin.com/in/niel-patel-359b62267/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/niel-patel-359b62267/</a></p>
                        </div>
                    </div>
                    {/* Additional contact boxes */}
                    <div className="mb-6">
                        <div className="mb-4">
                            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">College:</h3>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Flordia Gulf Coast University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
