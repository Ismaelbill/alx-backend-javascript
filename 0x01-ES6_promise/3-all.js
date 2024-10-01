import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, names]) => {
      console.log(`${body.body} ${names.firstName} ${names.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
