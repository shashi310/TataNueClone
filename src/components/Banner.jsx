import React from 'react'
import {
Box,
Button
} from '@chakra-ui/react'
import { Image,Heading } from '@chakra-ui/react'
import { Flex, Spacer,Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import banner1Left from "../resources/1Left.png"
import banner1Right from "../resources/1Right.png"
import banner2 from "../resources/2.png"
import banner3 from "../resources/3.png"
const Banner = () => {
  return (
    <>
   
    <Box>
        <Flex>
<Box >
  <br />

<Heading textAlign="left">🧃 Turn Dreams Into Reality</Heading>
<br />
      <Heading textAlign="left" ml="60px">
        With <Text as="span" color="red" >Personal Loans</Text>
      </Heading>
<br/>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} ml="10%">
      <GridItem pl='2' bg='orange.300' p="20px" >👜<strong>Avail Zero</strong> <br/> Processing fee</GridItem>

    <GridItem pl='2' bg='orange.300' p="20px" >👜<strong>Quick</strong> <br/> Personal Loan</GridItem>
    <GridItem pl='2' bg='orange.300' p="20px" >👜<strong>Lowest</strong> <br/> Interest Rates</GridItem>
    <GridItem pl='2' bg='orange.300' p="20px" >👜<strong>Minimal</strong> <br/> Documentation</GridItem> 
    
      </Grid>

{/* <Image
boxSize='88%'
src={banner1Left} alt="banner1" /> */}
<br />
<Button bg="#8E24AA" mr="50%">Apply Now</Button>
</Box>
 <Box w="45%" ml="10%">
<Image
// boxSize='80%'
src={banner1Right} alt="bannerRight"/></Box>
</Flex>





<Heading textAlign="left">🎋Personal Loan Highlights</Heading>
<Flex >
  <Box w="50%">

  <Image
boxSize='99%'
src={banner2} alt="banner2" />
  </Box>

<Box w="48%" bg="#FFEBEE" p="2%">
<Heading textAlign="left" as='h4' size='md' ml="10px">
    ⭐Interest Rate
  </Heading>
  <Text as="span" color="green" size='xs' ml="1px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus</Text>
  <br />
<br />
<br />
  <Heading textAlign="left" as='h4' size='md' ml="10px">
    ⭐Loan Amount
  </Heading>
  <Text as="span" color="green" size='xs' ml="1px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus</Text>
  <br />
  <br />
<br />
  <Heading textAlign="left" as='h4' size='md' ml="10px">
    ⭐Processing Fee
  </Heading>
  <Text as="span" color="green" size='xs' ml="1px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus</Text>


  <br />
<br />
<br />

  <Heading textAlign="left" as='h4' size='md' ml="10px">
    ⭐Tenure
  </Heading>
  <Text as="span" color="green" size='xs' ml="1px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus</Text>



  <br />
<br />


</Box>

</Flex>



<Box >
<Image
boxSize='100%'
src={banner3} alt="banner3" />

</Box>

    </Box>
    </>
  )
}

export default Banner