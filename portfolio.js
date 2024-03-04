document.addEventListener('scroll', function () {
    // Calculate the scroll position as a percentage of the total scroll height
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Update the width of the top bar as the scroll percentage
    document.getElementById('topBar').style.width = `${scrollPercentage}%`;

    // Calculate the red component of the RGB color based on the scroll percentage
    const redValue = Math.min(255, Math.round((scrollPercentage / 100) * 255));

    // Update the background color of the top bar
    document.getElementById('topBar').style.backgroundColor = `rgb(0, 255, 0)`;
});



const header = document.querySelector("header");

window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',this.window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active')
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};




const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay:4, origin:'left'})
sr.reveal('.home-img', {delay:4, origin:'right'})
sr.reveal('.about,.projects,.cta,.contact', {delay:2, origin:'bottom'})



var typed = new Typed(".typing",{
    strings: [" F r o n t e n d  D e v e l o p e r .","M o b i l e A p p D e v e l o p e r ."],
    typeSpeed:150,
    backSpeed:120,
    loop:true
})


// Function to fetch currently playing song from Spotify API
function fetchCurrentlyPlaying() {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual Spotify access token
    const accessToken = 'Y144b629b0e9646fd838dcc45bd4b89cc';
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    .then(response => response.json())
    .then(data => {
      // Update song information in HTML
      const songNameElement = document.querySelector('.loader:nth-child(2) .name');
      const artistNameElement = document.querySelector('.loader:nth-child(2) .artist');
      songNameElement.textContent = data.item.name;
      artistNameElement.textContent = data.item.artists[0].name;
    })
    .catch(error => {
      console.error('Error fetching currently playing song:', error);
    });
  }

  // Fetch currently playing song on page load
  window.addEventListener('load', fetchCurrentlyPlaying);

