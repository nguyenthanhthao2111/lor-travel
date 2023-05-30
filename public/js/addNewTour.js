import axios from 'axios';
import { showAlert } from './alerts';

export const addNewTour = async (
  name,
  duration,
  maxGroupSize,
  difficulty,
  price,
  summary,
  description,
  imageCover,
  startDates,
  guides
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/tours/addNewTour',
      data: {
        name,
        duration,
        maxGroupSize,
        difficulty,
        price,
        summary,
        description,
        imageCover,
        startDates,
        guides,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'New Tour Added Successful');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    console.log(err.response);
  }
};
