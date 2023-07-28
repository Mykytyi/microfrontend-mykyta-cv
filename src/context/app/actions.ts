
export type Message = {
  type: 'error' | 'success' | 'info',
  message: string,
}

type AddMessage = {
  type: 'ADD_MESSAGE',
  message: Message,
}

type RemoveAllMessages = {
  type: 'REMOVE_ALL_MESSAGES',
}

export type AppActions = AddMessage | RemoveAllMessages;

export const addMessage = (message: Message): AddMessage => {
  return {
    type: 'ADD_MESSAGE',
    message,
  }
};

export const removeAllMessages = (): RemoveAllMessages => {
  return {
    type: 'REMOVE_ALL_MESSAGES',
  }
};

