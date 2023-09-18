"use client"
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Image, Input,Flex,Text, Heading ,Button} from '@chakra-ui/react'
import Link from 'next/link';

const PageOne = () => {
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
         
        <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        >
            {popularMovies.map(movie=>(
                    
                <Box
                key={movie.id}
                pos='relative'
                bg='none'
                >
                     <Box top="0" pos={'relative'} >
                            <Image h={'100vh'} w="100%" filter="auto" brightness={'50%'} alt='asset' src={`https://image.tmdb.org/t/p/original${movie&&movie.backdrop_path}`}/>
                    </Box>
                    <Box 
                    pos="absolute"
                    top="0"
                    >
                        <Box>
            <Flex
            alignItems={'center'}
            justifyContent="space-around"
            mt={'4'}
                                
            >
                <Box>
                    <Image w="4%" alt='asset'  src="logo.png"/>
                </Box>

                <Input color={"white"} w="40%" placeholder='What do you want to watch?' />

                <Box>
                    <Text>SignIn</Text>
                </Box>
                            
            </Flex>
         </Box>
                            
                        <Box ml="5%" fontSize={'14px'} mt="15%" w="35%">
                            <Heading color='white' fontSize={'2xl'}>
                                {movie ? movie.original_title:""}
                            </Heading>
                            <Flex color='white' justifyContent={'space-around'}>
                                {movie ? movie.release_date:""}
                                <Text>
                                {movie ? movie.vote_average:""} 
                                </Text>
                            </Flex>
                            <Text color='white'>
                            {movie ? movie.overview:""} 
                            </Text>
                            <Button bg={'purple.400'}>Watch Trailer</Button>

                        </Box>

                    </Box>
                </Box>
                
                ))}
        </Carousel>
                
         
        </>
     );
}
 
export default PageOne;