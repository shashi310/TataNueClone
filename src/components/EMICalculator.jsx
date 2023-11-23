import { useState } from 'react';
import { Box, Input, Button, Flex, Text, Center,Heading } from '@chakra-ui/react';

const EMICalculator = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);

  const handleCalculateEMI = () => {
    // Basic EMI calculation formula (assuming monthly interest)
    const monthlyInterest = interest / 12 / 100;
    const months = tenure * 12;
    const emiValue =
      (amount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
      (Math.pow(1 + monthlyInterest, months) - 1);

    const totalPayableAmount = emiValue * months;
    const totalInterestAmount = totalPayableAmount - amount;

    setEmi(emiValue.toFixed(2));
    setTotalAmount(totalPayableAmount.toFixed(2));
    setInterestAmount(totalInterestAmount.toFixed(2));
  };

  const handleApplyNow = () => {
    // Handle applying for the loan or further action
    console.log('Applied for the loan');
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" padding="20px">
      <Box flex="1">
        <Heading >
          🎡EMI Calculator
        </Heading>
        <Box  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" 
      padding="4"
      bg="white"
      borderRadius="md">
          <Input
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            mb="3"
          />
          <Input
            placeholder="Enter Interest Rate"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            mb="3"
          />
          <Input
            placeholder="Enter Tenure (in years)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            mb="3"
          />
          <Button colorScheme="blue" onClick={handleCalculateEMI}>
            Calculate
          </Button>
        </Box>
      </Box>

      <Center flex="1">
        <Box textAlign="center" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      padding="4"
      bg="white"
      borderRadius="md">
          <Text fontSize="xl">EMI:<Text as="span" color="red" > ₹{emi}</Text></Text>
          <br />
          <Text>Total Amount:<Text as="span" color="red" > ₹{totalAmount}</Text></Text>
          <br />
          <Text>Total Interest:<Text as="span" color="red" > ₹{interestAmount}</Text></Text>
          <br />
        </Box>
      </Center>

      <Box flex="1" textAlign="right" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" 
      padding="4"
      bg="white"
      borderRadius="md">
        <Text fontSize="xl">Total Monthly Installments</Text>
        <br />
        <Text fontSize="2xl">{emi}</Text>
        <br />
        <Button colorScheme="green" onClick={handleApplyNow} mt="4">
            
          Apply Now
        </Button>
      </Box>
    </Flex>
  );
};

export default EMICalculator;
