import * as React from 'react'

type ErrorMessagesProps = {
  errors: Record<string, string[]>
}

export const ErrorMessages: React.FC<ErrorMessagesProps> = ({ errors }) => {
  const messages = Object.entries(errors)
    .map(([key, messages]) => {
      return messages.map(message => `${key} ${message}`)
    })
    .flat()

  return (
    <ul className="error-messages">
      {messages.map(message => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  )
}

export const MemoErrorMessages = React.memo(ErrorMessages)
