"use client"
import { Inter } from 'next/font/google'
import { createContext,useLayoutEffect,useRef } from 'react';

import { ChakraProvider } from '@chakra-ui/react';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
