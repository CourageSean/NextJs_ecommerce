import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return 'active';
    } else {
      return '';
    }
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>Sean's NextJs</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          justify-content-end='true'
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav' justify-content-end='true'>
            <li className='nav-item'>
              <Link href='/cart'>
                <a className={'nav-link ' + isActive('/cart')}>
                  <i aria-hidden className='fas fa-shopping-cart'></i>Cart
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/signin'>
                <a className={'nav-link ' + isActive('/signin')}>
                  <i aria-hidden className='fas fa-user'></i>Sign In
                </a>
              </Link>
            </li>

            {/* <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                User Name
              </a>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Profile
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Logout
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
