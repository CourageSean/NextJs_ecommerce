import Head from 'next/head';
import Link from 'next/link';

export default function signin() {
  return (
    <div>
      <Head>
        <title>Signin Page</title>
      </Head>
      <form className='mx-auto my-4'>
        <div className='col-auto'>
          <label htmlFor='staticEmail2' className='visually-hidden'>
            Email
          </label>
          <input
            type='text'
            className='form-control-plaintext'
            id='staticEmail2'
            placeholder='Email'
          />
        </div>
        <div className='col-auto'>
          <label htmlFor='inputPassword2' className='visually-hidden'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='inputPassword2'
            placeholder='Password'
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-dark mb-3 w-100'>
            Login
          </button>

          <p className='my-2'>
            You dont't have an account?
            <Link href='/register'>
              <a style={{ color: 'crimson' }}>Register</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
