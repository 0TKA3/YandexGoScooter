import freePauseIcon from '../icons/free-pause.svg'
import lowBatteryIcon from '../icons/low-battery.svg'
import threeScootersIcon from '../icons/three-scooters.svg'
import zeroStartIcon from '../icons/zero-rub-start.svg'
import firstDecore from '../images/1-decore.png'
import secondDecore from '../images/2-decore.png'
import thirdDecore from '../images/3-decore.png'
import excFirst from '../images/1.jpeg'
import excSecond from '../images/2.jpeg'
import excThird from '../images/3.jpeg'
import excFourth from '../images/4.jpeg'

const Content = () => {
    return (
        <>
        <div className="content-container">
            <h1 className="main-header-text">Вот что даёт участие<br />в клубе</h1>
            <div className="club-bonuses">
                <div className="club-bonuses-bonus">
                    <img src={freePauseIcon} alt="Бесплатная пауза" />
                    <p>Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть</p>
                </div>
                <div className="club-bonuses-bonus">
                    <img src={lowBatteryIcon} alt="Низкий заряд" />
                    <p>Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно</p>
                </div>
                <div className="club-bonuses-bonus">
                    <img src={threeScootersIcon} alt="Три самоката" />
                    <p>Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный старт</p>
                </div>
                <div className="club-bonuses-bonus">
                    <img src={zeroStartIcon} alt="Бесплатный старт" />
                    <p>0 ₽ за старт в каждой поездке</p>
                </div>
            </div>
            <div className="exclusive-access">
                <h1 className='exclusive-access-header'>Эксклюзивный доступ<br />к событиям Самокатов</h1>
                <p className="exclusive-access-text">С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique</p>
                <div className="exclusive-access-photo">
                    <div className="main-photo-wrapper">
                        <img src={excFirst} alt=""/>
                        <img className="first-img-decore" src={firstDecore} alt="" />
                    </div>
                    <div className="main-photo-wrapper second-photo">
                        <img src={excSecond} alt=""/>
                        {/* <img className="first-img-decore" src={secondDecore} alt="" /> */}
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Content;