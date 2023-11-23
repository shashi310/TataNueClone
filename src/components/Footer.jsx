import React from 'react';
import { Box, Container, Stack, Text, Input, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { Image } from '@chakra-ui/react'



const Logo = () => {
    return (
      <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
        <image href="https://www.dewsolutions.in/wp-content/uploads/2022/08/tataNeu-logo2.png" width="120" height="28"  />
      </svg>
    );
  };

const SocialButton = ({ children, label, href }) => {
  return (
    <a href={href}>
      <button>
        <span>{label}</span>
        {children}
      </button>
    </a>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box bg={'gray.50'} color={'gray.700'}>
      <Container maxW={'6xl'} py={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="space-between">
          <Stack align={'flex-start'} mb={{ base: 8, md: 0 }}>
            <Box >
              <Logo />
             
          
            </Box>
            <Text fontSize={'sm'}>© 2023 Your Company. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Help & Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Accessibility
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Customer Care</ListHeader>
            <Box as="a" href={'#'}>
           M G Road Mumbai Maharashtra
            </Box>
            <Box as="a" href={'#'}>
            +91 22 6885 8282
            </Box>
            <Box as="a" href={'#'}>
              support@TataNue.com
            </Box>
           
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={'blackAlpha.100'}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
