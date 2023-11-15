import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from '../../components/LoginForm/LoginForm'
import { Text, Box, Container, Tab, TabList, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

export default function AuthPage({ setUser }) {
  return (
    <Container 
      maxW='100vw' 
      centerContent
    >
      <Box 
        display='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        w='80%'
        m='40px 0 15px 0'
        borderRadius='xl'
        borderWidth='1px'
      >
        <Text
          fontSize='24px'
          color='black'
          m='16px 40px'
        >MERNChat</Text>
      </Box>
      <Box 
        bg='white' 
        w='100%'
        p={4} 
        borderRadius='xl' 
        borderWidth='1px'
      >
        <Tabs 
          variant='enclosed'
        >
          <TabList mb='1em'>
            <Tab w='50%'>Login</Tab>
            <Tab w='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginForm setUser={setUser} />
            </TabPanel>
            <TabPanel>
              <SignUpForm setUser={setUser} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}