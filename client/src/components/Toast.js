import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Toast() {
  return (
    <ToastContainer
      position="top-right"
      outoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  );
}
