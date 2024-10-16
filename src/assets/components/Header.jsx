import yandexGoImg from '../images/yandex-go.svg'
import joinSoc from '../images/join-socety.webp'
import composition from '../images/header-composition.webp'

const Header = () => {
    return (
        <>
            <header>
                <div className="background"></div>
                <div className="header-inner">
                    <div className="yandex-go-img">
                        <img src={yandexGoImg} alt="Yandex GO" />
                    </div>
                    <h1>Вступайте<br />в клуб<br />Самокатов</h1>
                    <div className="composition">
                        <div className="blue-light"></div>
                        <img src={composition} alt="scooter-composition" className='scooter-composition' loading='eager' />
                        <img className="join-soc" src={joinSoc} alt="Вступить в сообщество" loading='eager' />
                    </div>
                    <div className='buy-aboniment'>
                        <p>Купите абонемент, чтобы стать<br />частью клуба в новом сезоне–2024.<br />8 месяцев за <span className='aboniment-price'><span className='aboniment-price-new-price'>499 ₽</span> <span className='aboniment-price-old-price'>3190₽</span></span></p>
                    </div>
                    <div className="join-club-button">
                        <button onClick={() => { window.open("https://go.yandex/ru_ru/lp/rides/scooter") }}>Стать частью клуба</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header