import scooter from '../images/buy-scooter.webp'
import soloScooter from '../images/scooter.webp'
import joinSoc from '../images/join-socety.webp'
import { useResize } from '../hooks/useResize'

const Buy = () => {
    const { width } = useResize();
    return (
        <div className="buy-aboniment">
            <div className="top-side">
                <div className="top-left-side">
                    <h1>Купить абонемент и вступить в клуб смогут те, кто в Плюсе</h1>
                    <p>За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса</p>
                </div>
                {width > 768 ? (<div className="top-right-side">
                    <div className="elipse"></div>
                    <img src={scooter} alt="скутер" loading='eager' />
                </div>) : (<></>)}

            </div>
            <div className="down-side">
                <div className="down-left-side">
                    <div className="elipse"></div>
                    <img src={soloScooter} alt="scooter" className='solo-scooter' loading='eager' />
                    <img className="join-soc buy-join-soc" src={joinSoc} alt="Вступить в сообщество" loading='eager' />
                </div>
                <div className="down-right-side">
                    <h1>80  % наших пользователей уже в клубе и экономят на поездках</h1>
                    <p>Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы вы были готовы</p>
                    <button onClick={() => { window.open("https://go.yandex/ru_ru/lp/rides/scooter") }}>Хочу абонемент</button>
                </div>
            </div>
        </div>
    );
}

export default Buy;