"use client"
import { Box, Card, CardBody, SimpleGrid,Image,Flex, Heading,Text } from "@chakra-ui/react";
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

const FeatMovie = ({movie}) => {
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])

    return ( 
        <Box
        bg={'white'}
        color={'black'}
        >
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Heading>Featured Movies</Heading>
                <Flex>
                    <Text>Seen More</Text>
                </Flex>
            </Flex>

            { 
                isLoading ?
                <Card>
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} />
                    </SkeletonTheme>
                </Card>
                :
                // <Link to={`movie/${movie.id}`} style={{textDecoration:"none"}}>
                    <SimpleGrid columns={3} spacing={10}>
                        <Card>
                            <CardBody>
                                <Image alt='asset' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
                                <Box>
                                    <Text>{movie?movie.original_title:""}</Text>
                                    <Text>
                                        {movie?movie.release_date:""}
                                        {movie?movie.vote_average:""}
                                    </Text>
                                    
                                </Box>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                // </Link>
            }
        </Box>
     );
}
 
export default FeatMovie;