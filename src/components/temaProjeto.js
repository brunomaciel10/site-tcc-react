import '../styles/aboutus.css'
import Image from 'next/image'
import ImageTurista from '../img/img.jpg'

export function TemaProjeto() {
    return (
        <div className='about'>
            <div className='content'>
                <h2>O que é Turismo de <br /> Aventura?</h2>
                <p>Turismo de aventura é um segmento de mercado cujo atrativo principal é a prática de atividades de aventura de carácter recreativo. Podendo ocorrer em qualquer espaço: natural, construído, rural, urbano, estabelecido como área protegida ou não. Existem inúmeros tipos de atividades que podem ser praticadas no turismo de aventura, confira algumas delas abaixo:</p>
            </div>
            <div className='img'>
                <Image className='image' src={ImageTurista} alt='Turista se aventurando' />
            </div>
        </div>
    )
}