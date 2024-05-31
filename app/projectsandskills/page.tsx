import React from "react";
import Navigation from "../components/Navbar";
import Image from "next/image"; // Import Image component from Next.js
import pagebackground from "./projectpage.jpeg";

const ProjectsAndSkills: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            <Image
                src={pagebackground}
                alt="Homepage Background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute inset-0 opacity-100"
            />
            <div className="relative z-10">
                <Navigation />
                <section className="container mx-auto py-12 px-4">
                    <div className="bg-white bg-opacity-80 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 rounded-t-lg">
                            My Projects and Skills
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Project Detail</th>
                                        <th className="px-4 py-2">GitHub Link</th>
                                        <th className="px-4 py-2">Learned Skills</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 font-normal">
                                            <p>
                                                How Zero Trust Protects Logistic Management: A Dashboard App Development. Rooted in the principle of “Trust no one”, Zero Trust challenges traditional security paradigms by assuming that every user, device, and connection within a network could be potentially compromised. Logistic Management needs Zero Trust to protect its applications by creating defense techniques from cyber-attacks that target either front-end and back-end of the application.
                                            </p>
                                            <p>
                                                Based on our investigation, Drone-aided Logistic Management application can be more secured and organized by protecting the application from attacks such as Dos, MITM, and Blackholes. For instances, malicious files and Viruses can be easily injected into application without it ever being known. In this study, we developed a Drone-aided Logistic management Dashboard App to include Zero Trust into Logistic Management Applications. Our application is protected using Zero Trust model components such as, i) Function-based access control (FBAC), ii) HTTP Proxy, and iii) Cross-site-Scripting, to help produce an effective and efficient system to deliver products (e.g., parcel packages) to their consumers. By comparison with other autonomous logistic management approaches, our proposed application achieves fully autonomous of control policies in terms of listen, record, detect and defend. Furthermore, our application was also tested to be applied into other high-risk application scenarios such as IoT smart home, smart-grid, and smart vehicle networks.
                                            </p>
                                            <p>
                                                This project is conducted by FGCU Software Engineering students in the CEN 3078 Computer Security course. This application is open-source and licensed under the terms of the MIT license.
                                            </p>
                                        </td>
                                        <td className="px-4 py-2 align-top">
                                            <a href="https://github.com/NielPatelSE12/zero_trust_project" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                                        </td>
                                        <td className="px-4 py-2 align-top">
                                            <ul className="list-disc">
                                                <li>NextJs</li>
                                                <li>Varcel</li>
                                                <li>MYSQL</li>
                                                <li>Prisma</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    {/* Add more project rows here */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectsAndSkills;
