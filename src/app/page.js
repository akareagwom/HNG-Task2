"use client"
import background from "../app/assets/background.svg"
import { Box, Image, Input,Flex,Text, Heading ,Button} from '@chakra-ui/react'
// import axios from 'axios';
import { useEffect, useState } from 'react'
import FeatMovie from "./components/featMovie";
// import { config } from "process";
// import { url } from "inspector";
// import FeatMovie from '../components/featMovie';


export default function Home() {
  const [popularMovies,setPopularMovies] = useState([])

  const API_URL = "https://api.themoviedb.org/3/movie/popular"
  const path = '/discover/movie'

 const config= {
    params: {
      
    }
  }

  const fetchMovies = async ()=>{
    const data = await fetch(`${API_URL}?api_key=4e8f0b6dedb49aad4d778b918074e19f`)
    .then (res=>res.json())
    .then(data=>setPopularMovies(data.results));
    // console.log('data',data);
  }

    useEffect(()=>{
      fetchMovies();
    },[])
  return (
    <>
      <Box h="100vh">
        <Flex
        bg=""
        justifyContent="space-around"
        mt={'4'}
        
        >
          <Image src="logo.png"/>

          <Input color={"white"} w="40%" placeholder='What do you want to watch?' />

          <Box>
            <Text>SignIn</Text>
          </Box>
      
        </Flex>
        <Box ml="10%" mt="10%" w="30%">
          <Heading>JOHN WICK 3: PARABELLUM</Heading>
          <Text>John wick John John John wick John John John wick John John John wick John John</Text>
          <Button>Watch Trailer</Button>

        </Box>
      </Box>
      <Box>
        <FeatMovie/>
      </Box>

    </>
  )
}
