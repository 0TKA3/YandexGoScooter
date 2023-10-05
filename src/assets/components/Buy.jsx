import scooter from '../images/buy-scooter.png'
import soloScooter from '../images/scooter.png'
import joinSoc from '../images/join-socety.png'
const Buy = () => {
    return (
        <div className="buy-aboniment">
            <div className="top-side">
                <div className="top-left-side">
                    <h1>Купить абонемент и вступить в клуб смогут те, кто в Плюсе</h1>
                    <p>За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса</p>
                </div>
                <div className="top-right-side">
                    <div className="elipse"></div>
                    <img src={scooter} alt="скутер" />
                </div>
            </div>
            <div className="down-side">
                <div className="down-left-side">
                    <div className="elipse"></div>
                    <img src={soloScooter} alt="scooter" className='solo-scooter' />
                    <img className="join-soc buy-join-soc"src={joinSoc} alt="Вступить в сообщество" />
                </div>
                <div className="down-right-side">
                    <h1>80  % наших пользователей уже в клубе и экономят на поездках</h1>
                    <p>Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы вы были готовы</p>
                    <button>Хочу абонемент</button>
                </div>
            </div>
        </div>
    );
}
 
export default Buy;