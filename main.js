window.onload = function () {
    var city = document.querySelector('#inputvalue');
    var submit = document.querySelector('#button');
    var namw = document.querySelector('.city');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');
    var clouds = document.querySelector('.clouds');
    var visi = document.querySelector('.visi');
    submit.addEventListener('click', function () {

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=b42974fb1c7648e910e3a7780748f95a')
            .then(response => response.json())
            .then(data => {
                var namevalue = data['name'];
                var tempvalue = data['main']['temp'];
                var descvalue = data['weather'][0]['description'];
                var cloudvalue = data['clouds']['all'];
                var visivalue = data['wind']['speed'];
                clouds.innerHTML = cloudvalue;
                namw.innerHTML = namevalue;
                temp.innerHTML = Math.floor(tempvalue - 273.15);
                desc.innerHTML = descvalue;
                visi.innerHTML=visivalue;
                console.log(data);
                var iconvalue = data['weather'][0]['icon'];
                var iconw = "https://openweathermap.org/img/w/" + iconvalue + ".png";
                document.getElementById('icon').src = iconw;
                var vid = document.getElementById("video")
                console.log(iconvalue);
                if (iconvalue == '04d') {

                    vid.src = "H1.mp4";
                } else if (iconvalue == '01d') {

                    vid.src = "sunclear.mp4";
                } else if (iconvalue == '02d') {

                    vid.src = "clear.mp4";
                } else if (iconvalue == '09d' || iconvalue == '10d') {

                    vid.src = "rainshower.mp4";
                } else if (iconvalue == '11d') {

                    vid.src = "thunder.mp4";
                } else if (iconvalue == '13d') {

                    vid.src = "snow.mp4";
                }else if (iconvalue == '15d') {

                    vid.src = "mist.mp4";
                }  else {

                }




            })


            .catch(err => alert("Wrong city"));


    });
}

