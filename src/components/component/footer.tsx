/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/pCsSDABfXga
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/


import Link from "next/link";
import logo from '../../app/Assets/Images/logo.png';
import { Box } from "@mui/material";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:gap-0 md:px-6 lg:py-6 bg-brown">
  
      <Box className=" w-20"><Link href="/"><Image src={logo} alt=""></Image></Link> </Box>
     
      <nav className="flex flex-wrap items-center justify-center gap-4 text-md font-medium text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-serif">
        <Link href="/Components/Menu">Menu</Link>
        <Link href="/Components/OrderOnline">Order online </Link>
        <Link href="/Components/Reservation">Contact & Reservations</Link>
        <Link href="/Components/OurStory">Our story</Link>
      </nav>
      <p className="text-xs text-white font-serif">© 2024 Rana Nassar. All rights reserved.</p>
    </footer>
  )
}

  