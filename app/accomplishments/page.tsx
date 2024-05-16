import Navigation from "../components/Navbar";
import Me from "./IMG_5193.jpg";
import Image from "next/image";
import Eaglex from "./Screenshot 2024-05-15 at 18-46-39 Import Document.png";

function Accomplishments() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation></Navigation>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Accomplishments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <p className="text-gray-800 mb-4">
                Honored to have the opportunity to join two of Florida Gulf Coast University's professors to represent our new Bachelor's in Computer Science degree at the Tampa, FL Sunshine State Cyber Con Event
              </p>
            </div>
            <div className="mt-4">
              <Image src={Me} alt="image description" width={400} height={400} className="rounded-t-lg object-cover" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How Zero Trust Protects Logistic Management</h2>
              <p className="text-gray-800 mb-2">
                Rooted in the principle of “Trust no one”, Zero Trust challenges traditional security paradigms by assuming that every user, device, and connection within a network could be potentially compromised. Logistic Management needs Zero Trust to protect its applications by creating defense techniques from cyber-attacks that target either front-end and back-end of the application.
              </p>
              <p className="text-gray-800 mb-2">
                Based on our investigation, Drone-aided Logistic Management application can be more secured and organized by protecting the application from attacks such as Dos, MITM, and Blackholes. For instances, malicious files and Viruses can be easily injected into application without it ever being known. In this study, we developed a Drone-aided Logistic management Dashboard App to include Zero Trust into Logistic Management Applications. Our application is protected using Zero Trust model components such as, i) Function-based access control (FBAC), ii) HTTP Proxy, and iii) Cross-site-Scripting, to help produce an effective and efficient system to deliver products (e.g., parcel packages) to their consumers. By comparison with other autonomous logistic management approaches, our proposed application achieves fully autonomous of control policies in terms of listen, record, detect and defend. Furthermore, our application was also tested to be applied into other high-risk application scenarios such as IoT smart home, smart-grid, and smart vehicle networks.
              </p>
              <p className="text-gray-800 mb-2">
                This project is conducted by FGCU Software Engineering students in the CEN 3078 Computer Security course. This application is open-source and licensed under the terms of the MIT license.
              </p>
            </div>
            <div className="mt-4">
              <Image src={Eaglex} alt="image description" width={400} height={400} className="rounded-b-lg object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;
