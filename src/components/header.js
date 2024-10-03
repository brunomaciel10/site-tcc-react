import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '../img/Logo - TCC (1).png'
import "../styles/header.css"

export default function Header() {
  return (
    <header>
      <div className='header'>
        <div className='logo'>
          <Image src={Logo} width={80} height={80} alt='Logo do projeto' />
        </div>
        <div className='menu'>
          <ul>
            <li><Link className='active' href="/">O que é?</Link></li>
            <li><Link href="/">Sobre nós</Link></li>
            <li><Link href="/">Ações do projeto</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}