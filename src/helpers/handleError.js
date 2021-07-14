import Swal from 'sweetalert2';

const handleError = (error) => {
  const errorMessage = (error.response && error.response.data && error.response.data.error_message) 
    ? error.response.data.error_message 
    : 'an error occured';
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorMessage,
  });
}

export default handleError;