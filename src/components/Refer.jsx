import React from 'react'
import { Box, Container, Stack, Text, Input, IconButton,Button,ButtonGroup,Heading ,Link} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const Refer = () => {
  return (
    <>
<Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
<Heading >🔃Refer & Earn Now</Heading>
<br />
<Heading as='h3' size='l'>Get a ₹500 Big Basket Gift Card</Heading>
<br />
<Button colorScheme='teal' size='lg'>Refer And Earn</Button>
<br />
<br />
<Link href="#" textDecoration="underline">
      Terms and Conditions Apply
    </Link>
  </Box>
  <Spacer />
  <Image
boxSize='150px'
width="20%"
height="13%"
src="https://www.dewsolutions.in/wp-content/uploads/2022/08/tataNeu-logo2.png" alt="icon" />
</Flex>

    </>
  )
}

export default Refer