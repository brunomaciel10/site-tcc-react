import Link from 'next/link';
import Image from 'next/image';
import Logo from '../img/Logo - TCC (1).png'
import "../styles/header.css"

export function Header() {
  return (
    <header>
      <div className='header'>
        <div className='logo'>
          <Image src={Logo} width={80} height={80} alt='Logo do projeto' />
        </div>
        <div className='menu'>
          <ul>
            <li><Link className='active' href="#tema">O que é?</Link></li>
            <li><Link href="#sobre">Sobre nós</Link></li>
            <li><Link href="#actions">Ações do projeto</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}