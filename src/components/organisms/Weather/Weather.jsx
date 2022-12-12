import { Header } from '../../index';
import { weatherData } from '../../../data/data';
import classNames from 'classnames';

/**
 * Элемент Weather возвращает блок с прогнозом погоды. 
 * В элемент необхдимо передавть объект содержащий ключи actualTemperature, morningTemperature, dayTempareture.
 */

export default function Weather({ className }) {
  const elementClassName = 'weather'
  const classes = classNames({ [className + '__element']: className }, elementClassName);

  return (
    <div className={classes}>
      <Header className={elementClassName} header>Погода</Header>
      <div className={`${elementClassName}__container`}>

        <div className={`${elementClassName}__data-current`}>
          <img className={`${elementClassName}__image`} src="ra-42_composition-decomposition/icons/weather/cloudy.svg" alt="" />
          <span className={`${elementClassName}__tepmerature`}>{weatherData.actualTemperature}</span>
        </div>

        <div className={`${elementClassName}__data-future`}>
          <div className={`${elementClassName}__data-other-times`}>Утром: {weatherData.morningTemperature}</div>
          <div className={`${elementClassName}__data-other-times`}>Днем: {weatherData.dayTempareture}</div>
        </div>

      </div>
    </div >
  )
}