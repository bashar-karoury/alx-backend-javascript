import signUpUser from './4-user-promise.js'; // eslint-disable-line import/extensions
import uploadPhoto from './5-photo-reject.js'; // eslint-disable-line import/extensions

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const array = [];

      results.forEach((result) => {
        array.push({
          status: result.status,
          value: result.value,
        });
      });
      return array;
    });
}
