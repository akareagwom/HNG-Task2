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
        <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        >
            {popularMovies.map(movie=>(
                    
                <Box
                >
                     <Box>
                            <Image src={`https://image.tmdb.org/t/p/original${movie&&movie.backdrop_path}`}/>
                        </Box>
                        
                    <Box ml="10%" mt="10%" w="30%">
                        <Heading>
                            {movie ? movie.original_title:""}
                        </Heading>
                        <Flex justifyContent={'space-around'}>
                            {movie ? movie.release_date:""}
                            <Text>
                            {movie ? movie.vote_average:""} 
                            </Text>
                        </Flex>
                    <Button>Watch Trailer</Button>

                    </Box>
                </Box>
                
                ))}
        </Carousel>
                
         
        </>
     );
}
 
export default PageOne;