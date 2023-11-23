import React from 'react'
import { Box,Flex,Image, Container, Stack, Text, Input, IconButton,Button,ButtonGroup,Heading ,Link} from '@chakra-ui/react';
import banner4 from "../resources/5Left.png"
import banner5 from "../resources/5Right.png"
const Process = () => {
  return (
  <>
<Flex>
<Box w="49%">
<Image

src={banner4} alt="banner4" />
</Box >

<Box w="49%">
<Image
mt="5%"
src={banner5} alt="banner4" />
<Button bg="#8E24AA">Apply Now</Button>
</Box>
</Flex>


  </>
  )
}

export default Process