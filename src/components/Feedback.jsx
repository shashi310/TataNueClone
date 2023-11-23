
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  Container,
  Stack,
  Text,
  Input,
  IconButton,
  Button,
  ButtonGroup,
  Heading,
  Link,
  HStack,
} from '@chakra-ui/react';
import banner4 from '../resources/4.png';
import banner6 from '../resources/6.png';

const Feedback = () => {
  const feedbackList = [
       {
        name: 'Alice Johnson',
        designation: 'Senior Developer',
        comment: 'I am thoroughly impressed with the product. It exceeded all my expectations. The quality is top-notch, and the service provided was exceptional. I highly recommend it to anyone looking for a reliable solution. The teams dedication and expertise are truly commendable. Overall, an outstanding experience!',
      },
      {
        name: 'Michael Williams',
        designation: 'Marketing Manager',
        comment: 'The quality of the product is outstanding, and the service provided by the team is excellent. Im truly impressed and satisfied with the overall experience. The attention to detail and customer satisfaction is remarkable. I highly recommend this product to anyone seeking a reliable solution. Kudos to the team for their dedication and professionalism!',
      },
      {
        name: 'Emily Brown',
        designation: 'Business Analyst',
        comment: 'I had an excellent experience with the product. It met all my requirements and more. The quality is exceptional, and the service provided was outstanding. I highly recommend this product to anyone in need of a reliable solution. The teams expertise and dedication are highly commendable. Overall, a fantastic experience!',
      },
      {
        name: 'Daniel Clark',
        designation: 'UX Designer',
        comment: 'I am extremely satisfied with the service provided. The product exceeded my expectations in terms of quality and reliability. The teams attention to detail and dedication to customer satisfaction are commendable. I highly recommend this product to anyone seeking a trustworthy solution. Overall, a remarkable experience!',
      },
      {
        name: 'Sophia Garcia',
        designation: 'Product Manager',
        comment: 'The support provided was outstanding, and the timely delivery of the product was impressive. I am highly satisfied with the overall experience. I would like to express my gratitude to the team for their professionalism and commitment to excellence. I highly recommend this product to anyone seeking a reliable solution!',
      },
  ];

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbackList.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [feedbackList.length]);

  const currentFeedback = feedbackList[currentFeedbackIndex];

  const renderDots = () => {
    return feedbackList.map((_, index) => (
      <Box
        key={index}
        w="8px"
        h="8px"
        borderRadius="50%"
        bg={currentFeedbackIndex === index ? 'blue.500' : 'gray.200'}
        mx="2"
        cursor="pointer"
      />
    ));
  };

  return (
    <>
      <Heading>🎭What Our Customer Says</Heading>
      <br />
      <Flex>
        <Box w="45%">
          <Image src={banner4} alt="banner1" />
        </Box>

        <Box w="45%" p="1%">
          <Heading as="h3" size="lg">
            {currentFeedback.name}
          </Heading>
          <br />
          <Heading as="h5" size="sm">
            {currentFeedback.designation}
          </Heading>
          <br />
          <p>
            {currentFeedback.comment}
            -,
          </p>
          <HStack mt="4" ml="35%">{renderDots()}</HStack>
        </Box>
      </Flex>


      <Box >
          <Image src={banner6} alt="banner1" />
        </Box>
    </>
  );
};

export default Feedback;
