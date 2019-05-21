window.addEventListener('load', () => {
    if("geolocation" in navigator){
        console.log("Existe geolocation");
        navigator.geolocation.getCurrentPosition((results) => {
            console.log(results);
            let lng = results.coords.longitude;
            let lat = results.coords.latitude; 

            console.log('lat', lat, 'lng', lng);
        })
    }else{
        console.log("No existe geolocation");
    }
})