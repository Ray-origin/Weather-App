var search = document.querySelector('.search')
var cities = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDes = document.querySelector('.short-des')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')
var content = document.querySelector('#content')
var body = document.querySelector('body')
var time = document.querySelector('.time')

function FToC(deg) {
    return (deg -273.15).toFixed(1)
}
async function Search(city) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4f3dd1602c065c4bb931b1af878f101`
    let data = await fetch(apiURL).then(res => res.json())
    if(data.cod == 200){
        content.classList.remove('hide');
        cities.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        humidity.innerText = data.main.humidity;
        value.innerText = FToC(data.main.temp) + ' ºC'
        time.innerText = new Date().toLocaleString('vi')
        let temp = FToC(data.main.temp);
        shortDes.innerText = data.weather[0] ? data.weather[0].main : ''
        body.setAttribute('class','hot')
        if(temp <28)
            body.setAttribute('class','cool')
        if(temp <22)
            body.setAttribute('class','warm')
        if(temp <15)
            body.setAttribute('class','cold')

    }else{
        content.classList.add('hide')
    }

}

search.addEventListener('keypress',function(key){
    if(key.code === 'Enter'){
        let city = search.value.trim()
        Search(city);
    }
})

Search('ho chi minh')


