let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let imageIcon =document.querySelector("#image-icon") 
let mintTitle =document.querySelector("#mint-title")
let temp = document.querySelector("#temp")
let countryName = document.querySelector("#country")
let cityName = document.querySelector(".city")
let humidity = document.querySelector("#humidity")
let fahrenheit = document.querySelector("#fahrenheit")
let co = document.querySelector("#co")
let no = document.querySelector("#no")
let pm =document.querySelector("#pm")
let o3 =document.querySelector("#o3")
let so = document.querySelector("#so")
let uv =document.querySelector("#uv")
let heatC = document.querySelector("#heatC")
let heatF = document.querySelector("#heatF")
let localTime = document.querySelector("#localTime")
let uvImage = document.querySelector("#uvImage")
let dir = document.querySelector("#dir")
let kph = document.querySelector("#kph")
let mph = document.querySelector("#mph")
let region = document.querySelector("#region")
let visKm  = document.querySelector("#visKm")
let visM = document.querySelector("#visM")
let body = document.querySelector("body")



const fetchAPI = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7066c5b0509c4eca9c2113059241512&q=${input.value}&aqi=yes`);
    const Data = await response.json();
  
    imageIcon.setAttribute('src', Data.current.condition.icon);
    mintTitle.innerText = Data.current.condition.text;
    temp.innerText = Data.current.temp_c + "°C";
    cityName.innerText = Data.location.name + ",";
    countryName.innerText = Data.location.country;
    humidity.innerText = Data.current.humidity + "%";
    fahrenheit.innerText = Data.current.temp_f + "°F";
    
    // CO (Carbon Monoxide)
    const maxCO = 9000; 
    const coValue = Data.current.air_quality.co;
    const coPercentage = ((coValue / maxCO) * 100).toFixed(2);
    co.innerText = `CO : ${coPercentage}% `;
  
    // NO₂ (Nitrogen Dioxide)
    const maxNO2 = 200; 
    const no2Value = Data.current.air_quality.no2;
    const no2Percentage = ((no2Value / maxNO2) * 100).toFixed(2);
    no.innerText = `NO₂ : ${no2Percentage}%`;
  
    // O₃ (Ozone)
    const maxO3 = 180;
    const o3Value = Data.current.air_quality.o3;
    const o3Percentage = ((o3Value / maxO3) * 100).toFixed(2);
    o3.innerText = `O₃ : ${o3Percentage}%`;
  
    // SO₂ (Sulfur Dioxide)
    const maxSO2 = 75; 
    const so2Value = Data.current.air_quality.so2;
    const so2Percentage = ((so2Value / maxSO2) * 100).toFixed(2);
    so.innerText = `SO₂ : ${so2Percentage}%`;
  
    // PM10 (Particulate Matter 10)
    const maxPM10 = 50; 
    const pm10Value = Data.current.air_quality.pm10;
    const pm10Percentage = ((pm10Value / maxPM10) * 100).toFixed(2);
    pm.innerText = `PM10 : ${pm10Percentage}%`;

    // uv  //
    uv.innerText =" UV index : "+  Data.current.uv
    uv.style.fontSize = "27px"
    heatC.innerText ="Heat indx :" + Data.current.heatindex_c+"°C"
    heatF.innerText ="Heat indx :" +  Data.current.heatindex_f+"°F"
    localTime.innerText = Data.location.localtime
    region.innerText = Data.location.region


    if (Data.current.uv == 0) {
      uvImage.setAttribute('src', "night.png");
    
      // Smoothly change background color and remove image
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#212121"; // Dark color
    } else {
      uvImage.setAttribute('src', "sun-uv.png");
    
      // Smoothly restore background image and color
      body.style.backgroundImage = "url('./main-bg-image.jpeg')";
      body.style.backgroundColor = "#404040"; // Default color
    }

    // wind //

    dir.innerText = "Direction : "+ Data.current.wind_dir
    kph.innerText = "Kilometers per hour : " +Data.current.wind_kph
    mph.innerText = "Miles per hour : "+Data.current.wind_mph

    // visibility //

    visKm.innerText = "Kilometers : " + Data.current.vis_km
    visM.innerText = "Miles : " + Data.current.vis_miles



  
    console.log(Data);
    
  } catch (error) {
    window.alert("Please Enter valid City name or Country");
  }
  

 
};

btn.addEventListener("click",fetchAPI)








