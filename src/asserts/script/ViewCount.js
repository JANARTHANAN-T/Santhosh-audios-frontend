if (sessionStorage.getItem('visit') === null) {
  // New visit and pageview
  updateCounter('type=visit-pageview');
} else {
  // Pageview
  updateCounter('type=pageview');
}

function updateCounter(type) {
  fetch('http://localhost:5000/viewcount?'+type) 
    .then(res => res.json())
    .then(data => {
      console.log("Page Count"+data.pageviews) 
      console.log("Visit Count"+data.visits) 
    })
}

sessionStorage.setItem('visit', 'x');