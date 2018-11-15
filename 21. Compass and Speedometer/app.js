const arrow =document.querySelector('.arrow');
const speed =document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data)=>{
    speed.textContent = Math.round(Math.random()*100); // no simulator
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; // if I had a simulator
    console.log(data)
        console.log(`Latitude = ${Math.round(data.coords.latitude)} degrees`);
        console.log(`Longtitude = ${Math.round(data.coords.longitude)} degrees`);
}, (err) => {
    console.err(err);
    alert('You gotta allow it to happen.')
    }
);



/*

navigator object

console.log("Browser CodeName: " + navigator.appCodeName);
console.log('Browser Name: ' + navigator.appName);
console.log('Browser Version: ' + navigator.appVersion);
console.log("Cookies Enabled: " + navigator.cookieEnabled);
console.log("Browser Language: " + navigator.language);
console.log("Browser Online: " + navigator.onLine);
console.log("Platform: " + navigator.platform );
console.log("User-agent header: " + navigator.userAgent);

*/


