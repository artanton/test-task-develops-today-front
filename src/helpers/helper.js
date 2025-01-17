import { Notify } from 'notiflix';


export const errorHandler = (error) => {
  const message = error?.error?.data?.message;
  Notify.failure(message || 'Somethng went wrong');
};
