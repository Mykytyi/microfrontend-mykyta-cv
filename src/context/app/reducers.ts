import type { AppActions, Message } from './actions';

export type InitialAppState = {
  messages: Array<Message>,
}

export const initialAppState: InitialAppState = {
  messages: [],
};

export function appReducer(state: typeof initialAppState, action: AppActions) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message],
      }
    case "REMOVE_ALL_MESSAGES":
      return {
      ...state,
      messages: [],
    }
    default:
      return initialAppState;
  }
}
