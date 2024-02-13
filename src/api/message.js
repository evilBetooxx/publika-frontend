import axios from './axios';

export const getMessagesRequest = async () => axios.get('/comments');
export const sendMessageRequest = async (message) => axios.post('/comments', message);