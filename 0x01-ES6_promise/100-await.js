import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let result;
  try {
    const responseFromUploadPhotoFunction = await uploadPhoto();
    const responseFromCreateUserFunction = await createUser();
    result = {
      photo: responseFromUploadPhotoFunction,
      user: responseFromCreateUserFunction,
    };
  } catch (error) {
    console.log(error);
    result = {
      photo: null,
      user: null,
    };
  }
  return result;
}
