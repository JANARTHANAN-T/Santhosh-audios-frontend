if (sessionStorage.getItem('visit') === null) {
  // New visit and pageview
  updateCounter('type=visit-pageview');
} 

function updateCounter(type) {

  fetch('http://127.0.0.1:3002/api?'+type) // Dynamic request with URL parameter
    .then(res => res.json())
    .then(data => {
       // Display visits to user
       console.log(data.count);
    })

}

sessionStorage.setItem('visit', 'x');