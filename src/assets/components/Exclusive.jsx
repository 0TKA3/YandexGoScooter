import firstDecore from '../images/1-decore.png'
import secondDecore from '../images/2-decore.png'
import thirdDecore from '../images/3-decore.png'
import excFirst from '../images/1.jpeg'
import excSecond from '../images/2.jpeg'
import excThird from '../images/3.jpeg'
import excFourth from '../images/4.jpeg'


const Exclusive = () => {
  return (
    <div className="exclusive-access">
      <h1 className="exclusive-access-header">
        Эксклюзивный доступ
        <br />
        к событиям Самокатов
      </h1>
      <p className="exclusive-access-text">
        С абонементом — у вас доступ к специальным мероприятиям, скидки
        и классный мерч. В 2023 году мы танцевали на Даче Плюс с Антохой MC,
        катались на самокатах с Сергеем Мезенцевым и слушали хор
        Attaque de Panique
      </p>
      <div className="exclusive-access-photo">
        <div className="main-photo-wrapper">
          <img src={excFirst} alt="" />
          <img className="first-img-decore" src={firstDecore} alt="" />
        </div>
        <div className="main-photo-wrapper second-photo">
          <img src={excSecond} alt="" />
          <img className="second-img-decore" src={secondDecore} alt="" />
        </div>
        <div className="main-photo-wrapper third-photo">
          <img src={excThird} alt="" />
          <img className="third-img-decore" src={thirdDecore} alt="" />
        </div>
        <div className="main-photo-wrapper fourth-photo">
          <img src={excFourth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
