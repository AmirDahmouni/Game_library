import { Box, Heading, Text } from '@chakra-ui/react';

const ErrorPage = () => {

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="8"
          maxWidth="500px"
          width="100%"
          boxShadow="lg"
        >
          <Heading textAlign="center" mb="6" color={"red.600"}>
            Oops !
          </Heading>

          <Heading textAlign={"center"} >
            This page does not exist.
          </Heading>

        </Box>
      </Box>

    </>
  );
};

export default ErrorPage;