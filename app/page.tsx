import Image from 'next/image';
import { getSession, login, logout } from '../library';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  const setUserInfo = JSON.stringify({
    email: 'tigas@admin.com',
    password: 'figueiredo12',
  });

  const jwt = JSON.stringify({
    success: true,
    message: 'Login OK',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjE5OTgxMSwicm9sZSI6MSwibmFtZSI6IkFkbWluIFRpYWdvIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MTU5MzM3ODYsImV4cCI6MTcxNTkzMzg0Nn0.EA7bYL7-SV_y1HrwC0R1Y8paj660psVg1bTgd3y5j2U',
    role: 1,
  });
  const payload = JSON.stringify({
    userID: 199811,
    role: 1,
    name: 'Admin Tiago',
    avatar: null,
    iat: 1715933786,
    exp: 1715933846,
  });
  return (
    <section>
      <form
        action={async (formData) => {
          'use server';
          await login(formData);
          redirect('/');
        }}
      >
        <input type='email' placeholder='Email' />
        <br />
        <button type='submit'>Login</button>
      </form>
      <form
        action={async () => {
          'use server';
          await logout();
          redirect('/');
        }}
      >
        <button type='submit'>Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <br />

      <a>UserLoginSend: {setUserInfo} </a>
      <br />

      <a>JWT: {jwt} </a>
      <br />

      <a>Payload: {payload} </a>
    </section>
  );
}
