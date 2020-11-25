import * as types from './actionTypes'

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage=(message, author)=> ({
  type: types.ADD_MESSAGE
})
