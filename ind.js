async function showWeather(){

	/*setTimeout(()=> {
		search.value= ""
	}, 200);*/
	a=search.value;
	search.value=""
	const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location='+a;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e10d73ab91mshe853274d4cbf15ap10a917jsn56c214417489',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	cityname.innerHTML=a
	temp.innerHTML="Temparature: " +Math.round(((result.current_observation.condition.temperature)-32)*(5/9))+ " degree C";
	hum.innerHTML="Humidity: " +result.current_observation.atmosphere.humidity+"%";
	fil=result.current_observation.condition.text.toString();
	if(fil.includes("Showers")){ feel.innerHTML="Raining";}
	else{
		feel.innerHTML=result.current_observation.condition.text.toString();
	}
} catch (error) {
	console.error(error);
}
	


}
