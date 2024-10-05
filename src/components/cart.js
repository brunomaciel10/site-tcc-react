import '../styles/cart.css'

export function Cart({ exemplos }) {
    return (
        <section className='cart-area'>
            <div className='cart'>
                {exemplos.map((item, index) => 
                    <div key={index} className='cart-item'>
                        <img src={item.image}/>
                        <div className='card-content'>
                            <div className='title'>
                                <h3>{item.title}</h3>
                            </div>
                            <div className='content'>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}