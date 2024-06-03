import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message: string) => {
  toast(message);
};

const ToastNotification: React.FC = () => {
  return <ToastContainer />;
};

export default ToastNotification;
