import { Box, Card, CardBody, SimpleGrid,Image,Flex, Heading,Text } from "@chakra-ui/react";

const FeatMovie = () => {
    return ( 
        <Box
        bg={'white'}
        color={'black'}
        >
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Heading>Featured Movies</Heading>
                <Flex>
                    <Text>See More</Text>
                </Flex>
            </Flex>
            <SimpleGrid columns={3} spacing={10}>
                <Card>
                    <CardBody>
                        <Image src=""/>
                        <Box>
                            <Text>heelllloo</Text>
                        </Box>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
     );
}
 
export default FeatMovie;