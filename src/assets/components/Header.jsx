import yandexGoImg from '../images/yandex-go.svg'
import joinSoc from '../images/join-socety.png'
import composition from '../images/header-composition.png'

const Header = () => {
    return (
        <>
        <header>
            <div className="header-inner">
                <div className="yandex-go-img">
                    <img src={yandexGoImg} alt="Yandex GO" />
                </div>
                <h1>Вступайте<br />в клуб<br />Самокатов</h1>
                <div className="composition">
                    <div className="blue-light"></div>
                    <img src={composition} alt="scooter-composition" />
                    <img className="join-soc"src={joinSoc} alt="Вступить в сообщество" />
                </div>
                <div className='buy-aboniment'>
                    <p>Купите абонемент, чтобы стать<br />частью клуба в новом сезоне–2024.<br />8 месяцев за <span className='aboniment-new-price'>499 ₽</span><span className='aboniment-old-price'>3190 ₽</span></p>
                </div>
            </div>
        </header>
        </>
    )
}
 
export default Header