import { Button, Heading, FormControl, FormLabel, Box, Input, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.webp"

function LoginPage(props: any) {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    if (email == "Amir" && password == "root") {
      props.signin()
      localStorage.setItem("connexion", "true")
      navigate("/games")
    }

  }


  return (
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
        maxWidth="400px"
        width="100%"
        boxShadow="lg"
      >
        <Heading textAlign="center" mb="6">
          Login
        </Heading>
        <Box style={{ textAlignLast: "center" }}>
          <Image src={logo} width={60} height={60} />
        </Box>

        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.currentTarget.value)} />
        </FormControl>
        <FormControl id="password" mb="6">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.currentTarget.value)} />
        </FormControl>
        <Button colorScheme="blue" width="100%" onClick={onSubmit}>
          Sign In
        </Button>
      </Box>
    </Box>
  )
}

export default LoginPage