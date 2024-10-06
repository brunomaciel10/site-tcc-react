import '../styles/footer.css'
import Link from 'next/link'
import Image from 'next/image'
import Instagram from '../img/instagram.png'
import LogoProjeto from '../img/Logo - TCC (1).png'
import LogoEscola from '../img/logoescola.png'

export function Footer() {
    return(
        <footer>
            <div className='footer-left'>
                <Link className="margin" href="https://www.instagram.com/_turismodeaventura/" target='blank'><Image src={Instagram}/></Link>
                <p>Criado por Bruno Maciel</p>
            </div>
            <div className='footer-right'>
                <div className='logo-projeto'><Image className='img-projeto' src={LogoProjeto}/></div>
                <div className='logo-escola'><Image className='img-escola' src={LogoEscola}/></div>
            </div>
        </footer>
    )
}