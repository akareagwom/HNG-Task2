"use client"
import { Box, Card, CardBody, SimpleGrid,Image,Flex,Input, Heading,Text, Button } from "@chakra-ui/react";
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import {useEffect,useState} from 'react';
// import {Link} from 'react-router-dom'
// import {logo} from '../assets/logo.png'

const FeatMovie = () => {
    // const [isLoading,setIsLoading] = useState(true)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setIsLoading(false)
    //     },1500)
    // },[])

    return ( 
        <Box
        bg={''}
        color={'black'}
        >
            <Flex
            alignItems={'center'}
            justifyContent="space-around"
            pb={'2'}
            pt={'2'}
                                
            >
                <Box>
                    <Image w="" alt='asset'  src="logo.png"/>
                </Box>

                <Input border='1px solid white' color={"white"} w="40%" placeholder='What do you want to watch?' />

                <Button bg={'red.500'}>
                    <Text>SignIn</Text>
                </Button>
                            
            </Flex>

           
        </Box>
     );
}
 
export default FeatMovie;