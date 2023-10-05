import firstDecore from '../images/1-decore.png'
import secondDecore from '../images/2-decore.png'
import thirdDecore from '../images/3-decore.png'
import excFirst from '../images/1.jpeg'
import excSecond from '../images/2.jpeg'
import excThird from '../images/3.jpeg'
import excFourth from '../images/4.jpeg'
import prevSlideIcon from '../icons/prev-slide.svg'
import nextSlideIcon from '../icons/next-slide.svg'
import { useResize } from '../hooks/useResize'
import { useState } from 'react'


const Exclusive = () => {
  const sliderImgList = [excFirst,excSecond,excThird,excFourth]
  const [sliderImage, setSliderImage] = useState(0)

  const [prevOpacity, setPrevOpacity] = useState(0.5)
  const [nextOpacity, setNextOpacity] = useState(1)

  function sliderNext() {
    if(sliderImage<3) {
      setSliderImage(sliderImage + 1)
    }

    if(sliderImage>=0) {
      setPrevOpacity(1)
    }else {
      setPrevOpacity(0.5)
    }

    if(sliderImage>1) {
      setNextOpacity(0.5)
    }
}


  function sliderPrev() {
    if(sliderImage>0) {
      setSliderImage(sliderImage - 1)
    } 

    if(sliderImage>1) {
      setPrevOpacity(1)
    }else {
      setPrevOpacity(0.5)
    }
    if(sliderImage<=3) {
      setNextOpacity(1)
    }

}

  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
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
      {width>768 ? (
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
      ) : (
        <>
          <div className="slider">
            <div className="slider-decoration"><img src={firstDecore} alt="decoration" /></div>
            <div className="slider-main-image">
              <img src={sliderImgList[sliderImage]} alt="" width={344}/>
            </div>
            <div className="slider-buttons">
              <button style={{marginRight:"12px"}}><img style={{opacity:`${prevOpacity}`}} onClick={sliderPrev} src={prevSlideIcon} alt='прошлый слайд'></img></button>
              <button><img onClick={sliderNext} src={nextSlideIcon} alt="следующий слайд" style={{opacity:`${nextOpacity}`}}/></button>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default Exclusive;
