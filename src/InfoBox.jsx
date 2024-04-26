import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // for cold weather
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // for sunny weather
import UmbrellaIcon from "@mui/icons-material/Umbrella"; // for rain
import CloudIcon from "@mui/icons-material/Cloud"; //default

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const init_Url =
    "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const hot_url =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1519414119614-31e82ec0cce7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_url =
    "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const default_url =
    "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ";

  let WeatherIcon;
  if (info.humidity > 80) {
    WeatherIcon = <UmbrellaIcon />;
  } else if (info.temp > 15) {
    WeatherIcon = <WbSunnyIcon />;
  } else if (info.temp <= 15 && info.temp > 0) {
    WeatherIcon = <AcUnitIcon />;
  } else {
    WeatherIcon = <CloudIcon />;
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rain_url
                : info.temp > 15
                ? hot_url
                : info.temp <= 15 && info.temp > 0
                ? cold_url
                : default_url
            }
            title="Current Weather"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {WeatherIcon}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Temperature = {info.temp}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temp = {info.tempMax}</p>
              <p>
                The weather can be described as <i>{info.weather} </i>and feels
                like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
