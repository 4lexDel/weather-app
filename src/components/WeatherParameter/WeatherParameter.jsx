import Card from '../Card/Card';
import './weatherParameter.css';

function WeatherParameter({label, value, imgPath}) {
  return (
    <Card>
      <div className="weather-parameter">
        <img src={imgPath} alt="imgPath" />
        <p>{label}: {value}</p>
      </div>
    </Card>
  );
}

export default WeatherParameter;
