import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

export default class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    show: false
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }
  
  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = {...this.state}
      delete formData.error
      delete formData.confirm

      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      })
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm

    return (
      <>
        <VStack spacing='5px'>
          <FormControl id='name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
              placeholder='Enter Name'
              name='name'
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              name='email'
              placeholder='Enter Email'
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
              <Input
                type={this.state.show ? 'text' : 'password'}
                placeholder='Enter Password'
                name='password'
                onChange={this.handleChange}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => this.setState({show:!this.state.show})}>
                  {this.state.show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id='confirm' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size='md'>
              <Input
                type={this.state.show ? 'text' : 'password'}
                placeholder='Confirm password'
                name='confirm'
                onChange={this.handleChange}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => this.setState({show:!this.state.show})}>
                  {this.state.show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme='blue'
            width='100%'
            style={{ marginTop: 15 }}
            onClick={this.handleSubmit}
            isLoading={disable}
          >
            Sign Up
          </Button>
        </VStack>
      </>
    )
  }
}