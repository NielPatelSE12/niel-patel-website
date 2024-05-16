import React from "react";
import Navigation from "../components/Navbar";
import background from "./aboutme.jpg";
import border from "./border.jpg";

const ProjectsAndSkills: React.FC = () => {
    return (
        <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${background.src})`}}>
            <Navigation></Navigation>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 rounded-lg">
                        My Projects and Skills
                    </h2>
                    <table className="table-auto w-full bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${border.src})`}}>
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Project Detail</th>
                                <th className="px-4 py-2">GitHub Link</th>
                                <th className="px-4 py-2">Learned Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-bold">
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
                                <td className="px-4 py-2 align-top"><a href="https://github.com/NielPatelSE12/zero_trust_project" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a></td>
                                <td className="px-4 py-2 align-top">
                                    <ul className="list-disc">
                                        <li>Next.js</li>
                                        <li>Vercel</li>
                                        <li>MySQL</li>
                                        <li>Prisma</li>
                                    </ul>
                                </td>
                            </tr>
                            {/* Add more project rows here */}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ProjectsAndSkills;
