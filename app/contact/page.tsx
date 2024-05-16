import Navbar from "../components/Navbar";
import Image from "next/image";
import contact from "./contact.jpg";

function Contact() {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${contact.src})`}}>
            {/* Place the image container after the Navbar */}
            <Navbar /> {/* Assuming this is your Navbar component */}
            <div className="flex flex-col space-y-4 items-center relative z-10">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition-transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Email:</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400">NielPatel1212@outlook.com</p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition-transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Phone Number:</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400">239-207-4746</p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition-transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">LinkedIn:</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400">https://www.linkedin.com/in/niel-patel-359b62267/</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
