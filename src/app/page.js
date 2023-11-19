"use client"
import background from "../app/assets/background.svg"
import { Box, Image, Input,Flex,Text, Heading ,Button} from '@chakra-ui/react'
// import axios from 'axios';
import FeatMovie from "./components/featMovie";
import PageOne from "./components/header"
import { createContext } from 'react';


 // "engines": {
  //   "node": "16.x",
  //   "npm": "8.x"
  // },

export default function Home() {

  return (
    <>
      <Box h="100vh">
      <PageOne/>
      </Box>
      {/* <Box>
        <FeatMovie/>
      </Box> */}

    </>
  )
}
