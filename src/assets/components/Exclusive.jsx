import firstDecore from '../images/1-decore.webp'
import secondDecore from '../images/2-decore.webp'
import thirdDecore from '../images/3-decore.webp'
import excFirst from '../images/1.webp'
import excSecond from '../images/2.webp'
import excThird from '../images/3.webp'
import excFourth from '../images/4.webp'
import prevSlideIcon from '../icons/prev-slide.svg'
import nextSlideIcon from '../icons/next-slide.svg'
import excFirstMobile from '../images/1mobile.webp'
import excSecondMobile from '../images/2mobile.webp'
import excThirdMobile from '../images/3mobile.webp'
import excFourthMobile from '../images/4mobile.webp'
import { useResize } from '../hooks/useResize'
import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const sliderImages = [excFirstMobile, excSecondMobile, excThirdMobile, excFourthMobile]

const Exclusive = () => {

  const { width, } = useResize();
  const swiperRef = useRef(null)

  const onNextSlide = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, [swiperRef.current])

  const onPrevSlide = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, [swiperRef.current])


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
      {width > 768 ? (
        <div className="exclusive-access-photo">
          <div className="main-photo-wrapper">
            <img src={excFirst} alt="" loading='lazy' />
            <img className="first-img-decore" src={firstDecore} alt="" loading='lazy' />
          </div>
          <div className="main-photo-wrapper second-photo">
            <img src={excSecond} alt="" loading='lazy' />
            <img className="second-img-decore" src={secondDecore} alt="" loading='lazy' />
          </div>
          <div className="main-photo-wrapper third-photo">
            <img src={excThird} alt="" loading='lazt' />
            <img className="third-img-decore" src={thirdDecore} alt="" loading='lazy' />
          </div>
          <div className="main-photo-wrapper fourth-photo">
            <img src={excFourth} alt="" loading='lazy' />
          </div>
        </div>
      ) : (
        <>
          <div className="slider">
            <div className='slider-img'>
              <Swiper ref={swiperRef} spaceBetween={25} slidesPerView={1}>
                {sliderImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt="img" id='slider-img' loading='lazy' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="slider-buttons">
              <button onClick={onPrevSlide}>
                <img src={prevSlideIcon} alt='<' />
              </button>
              <button onClick={onNextSlide}>
                <img src={nextSlideIcon} alt=">" />
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default Exclusive;
