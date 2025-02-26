// Landing Page

"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center fade-in">
      <div className="flex flex-col">
        <Image src={logo} width={1000} height={1000} alt="Logo"/>
        <div className="flex text-center justify-center ">
          <Link href="/intro">
            <button className="rounded-lg bg-white text-black text-[25px] py-1 px-3 hover:scale-105">Enter</button>
          </ Link>
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useState } from 'react';

// export default function HomePage() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch data from your Express API running on /api/hello
//     fetch('http://localhost:3000/api/hello')
//       .then((response) => response.text())
//       .then((data) => {
//         setMessage(data);  // Set the fetched message from Express
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Message from Backend:</h1>
//       <p>{message}</p> {/* Display the message from the Express API */}
//     </div>
//   );
// }

