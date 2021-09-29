import React, { useContext, useState } from 'react'
import { FiAlignRight } from 'react-icons/fi'
import ThemeContext from './../context/ThemeContext'
import './styles/Navbar.css'

export default function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false)
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const handleOpenNavbar = () => {
    setopenNavbar(!openNavbar)
    console.log(openNavbar)
  }

  const handleChangePage = () => {
    setopenNavbar(!openNavbar)
  }

  const handleDarkMode = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div>
      <FiAlignRight onClick={handleOpenNavbar} className='Navbar__Logo' />
      <div className='Navbar__Content'>
        <nav className={openNavbar ? 'Navbar__Active' : 'Navbar__Links'}>
          <ul>
            <li>
              <a onClick={handleChangePage} href='/#about' key='2'>
                About
              </a>
            </li>
            <li>
              <a onClick={handleChangePage} href='/#skills' key='3'>
                Skills
              </a>
            </li>
            <li>
              <a onClick={handleChangePage} href='/#projects' key='4'>
                Projects
              </a>
            </li>
            <li>
              <a onClick={handleChangePage} href='/#experience' key='5'>
                Experience
              </a>
            </li>
            <li>
              <a onClick={handleChangePage} href='/#contact' key='6'>
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={handleChangePage}
                className='resume-button'
                href='/Resume-JorgeLLanque.pdf'
                target='_blank'
              >
                Resume
              </a>
            </li>
            <li className='Toggle__DarkMode'>
              <input
                type='checkbox'
                defaultChecked={darkTheme}
                onChange={handleDarkMode}
                id='toggle'
              />
              <label htmlFor='toggle'></label>
            </li>
          </ul>
        </nav>
        <div
          className={openNavbar ? 'Wrapper__Active' : 'Navbar__Wrapper'}
          onClick={handleOpenNavbar}
        />
      </div>
    </div>
  )
}
