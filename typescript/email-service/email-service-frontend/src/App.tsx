
import './App.css'
import AlertComponent from './components/alert/AlertComponent'

import PrimaryInput from './components/input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

function App() {

  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [email, setEmail] = useState("")
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  return (
    <>
    <AlertComponent title="Cadastrado Com Sucesso" 
    description='Em breve você receberá um email em seu email' status='success' onClick={onClose} isVisible={isVisible} />

    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="Primeiro"
            placeholder="Pedro"
          />
          <PrimaryInput 
            value={secondName} 
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Hos"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput 
          value={email} 
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Digite seu e-mail"
          placeholder="fulano@email.com"
        />
        <Spacer height="4" />
        <Button colorScheme='green' width="100%" onClick={onOpen}>enviar</Button>

      </form>
      <div className="product-details">
        <h2>Assinatura Mensal</h2>
        <Spacer height="4" />
        <p>você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height="4" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, perspiciatis ipsum! Beatae labore, nam officiis est dicta eaque dolorem. Dolore itaque dolores ab facere ea quibusdam.</p>
      </div>
    </div>
      
    </>
  )
}

export default App
