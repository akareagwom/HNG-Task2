"use client"
import { Box, Card, CardBody, SimpleGrid,Image,Flex, Heading,Text } from "@chakra-ui/react";
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {useEffect,useState} from 'react'

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
                    <SkeletonTheme>
                        <Skeleton height={300} />
                    </SkeletonTheme>
                </Card>
                :
                <SimpleGrid columns={3} spacing={10}>
                    <Card>
                        <CardBody>
                            <Image alt='asset' src=""/>
                            <Box>
                                <Text>heelllloo</Text>
                            </Box>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            }
        </Box>
     );
}
 
export default FeatMovie;