import { useState } from 'react';
import { Flex, Box, Text, Icon, Accordion, AccordionItem, AccordionButton, AccordionPanel,Heading } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));

  const questions = [
    "How can I track my order?",
    "What is your return policy?",
    "Do you offer international shipping?",
    "How do I change my account password?",
    "Can I cancel my order after it's placed?"
  ];

  const answers = [
    "You can track your order by logging into your account and navigating to the 'Order History' section.",
    "Our return policy allows returns within 30 days of purchase. Please check our Returns & Refunds page for more details.",
    "Yes, we offer international shipping to several countries. Please check our Shipping page for the list of countries we ship to.",
    "To change your account password, go to your account settings and select the 'Change Password' option.",
    "Unfortunately, once an order is placed, it cannot be canceled. Please review your order before confirming."
  ];

  const handleAccordionClick = (index) => {
    const newState = [...isOpen];
    newState[index] = !newState[index];
    setIsOpen(newState);
  };

  return (
    <>
     <Heading>❓FAQ's</Heading>
    <Accordion allowMultiple>
      {questions.map((question, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton onClick={() => handleAccordionClick(index)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">
                  {question}
                </Text>
              </Box>
              <Icon as={MdAdd} fontSize="20px" color="gray.500" transform={isOpen[index] ? 'rotate(45deg)' : 'none'} />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Text>
              {answers[index]}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>


  
    </>
  );
};

export default FAQ;
