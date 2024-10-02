import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photObj = await uploadPhoto();
    const userObj = await createUser();
    return { photo: photObj, user: userObj };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
