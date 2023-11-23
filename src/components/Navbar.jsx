import {
  Box,
  Flex,
  Avatar,
  Button,
  Link,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxWidth="1200px"
          mx="auto"
        >
          <Flex alignItems="center" gap="2%">
            <Link as={RouterLink} to="/" color="teal.500">
              <Image
                boxSize="150px"
                width="150px"
                height="auto"
                src="https://www.dewsolutions.in/wp-content/uploads/2022/08/tataNeu-logo2.png"
                alt="icon"
              />
            </Link>

            <Link to="/">
              <Button fontSize="15px" variant="link">
                Offers
              </Button>
            </Link>

            {/* Add other links here */}
            <Link to="/consize">
              <Button fontSize="15px" variant="link">
                Stories
              </Button>
            </Link>
            <Link to="/translate">
              <Button fontSize="15px" variant="link">
                Tata Play
              </Button>
            </Link>
            <Link to="/emotion">
              <Button fontSize="15px" variant="link">
                Neu Pass
              </Button>
            </Link>

            <Input placeholder="🔍Search Tata Neu" size="md" />
          </Flex>

          <Flex alignItems="center" gap="2%">
            {/* Icons such as location, cart, notification, user */}
            <Button variant="link">221002📌</Button>
            <Button variant="link">🛒</Button>
            <Button fontSize="20px" variant="link">
              <BellIcon />
            </Button>
            <Avatar size="sm" />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;



