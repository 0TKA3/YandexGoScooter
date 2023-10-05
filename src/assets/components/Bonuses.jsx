import freePauseIcon from '../icons/free-pause.svg'
import lowBatteryIcon from '../icons/low-battery.svg'
import threeScootersIcon from '../icons/three-scooters.svg'
import zeroStartIcon from '../icons/zero-rub-start.svg'

const Bonuses = () => {
  return (
    <div className="club-bonuses">
      <div className="club-bonuses-bonus">
        <img src={freePauseIcon} alt="Бесплатная пауза" />
        <p>
          Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе
          или передохнуть
        </p>
      </div>
      <div className="club-bonuses-bonus">
        <img src={lowBatteryIcon} alt="Низкий заряд" />
        <p>
          Если самокат недостаточно заряжен или с ним неудобно переходить
          дорогу, замените по пути на другой — это бесплатно
        </p>
      </div>
      <div className="club-bonuses-bonus">
        <img src={threeScootersIcon} alt="Три самоката" />
        <p>
          Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с
          абонементом — так у всех будет бесплатный старт
        </p>
      </div>
      <div className="club-bonuses-bonus">
        <img src={zeroStartIcon} alt="Бесплатный старт" />
        <p>0 ₽ за старт в каждой поездке</p>
      </div>
    </div>
  );
};

export default Bonuses;
