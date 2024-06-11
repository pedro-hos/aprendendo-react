import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, Box, CloseButton } from '@chakra-ui/react'

import {MouseEventHandler } from 'react'

  interface AlertComponentProps {
    status: "info" | "warning" | "success" | "error" | "loading" | undefined
    title: string
    description: string,
    isVisible: boolean
    onClick: MouseEventHandler
  }

  export default function AlertComponent ({status, title, description, isVisible, onClick} : AlertComponentProps) {
    return isVisible ? (
      <>
        <Alert status={status}>
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClick}
        />
      </Alert>
      </>
    ) : (<></>)
}