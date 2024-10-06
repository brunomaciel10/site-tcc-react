import '../styles/aboutus.css'
import Image from 'next/image'
import ImgGrupo from '../img/IMG_4778.JPEG'

export function AboutUs() {
    return (
        <div className='about' id='sobre'>
            <div className='content-about'>
                <h2>Quem somos nós?</h2>
                <p>Somos alunos do 3º Ensino Médio da Escola Interação em Campos do Jordão - SP, estamos realizando este projeto como Trabalho de Conclusão de Curso (TCC). Poder discutir sobre um tema pouco falado como Turismo de Aventura, foi o que despertou o interesse do grupo na realização deste projeto.</p>
            </div>
            <div className='img'>
                <Image className='image' src={ImgGrupo} alt='Turista se aventurando' />
            </div>
        </div>
    )
}