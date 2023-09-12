// initialize date for all timezones
let date = new Date();

// function for date format of Nepal
const getNepalTime = () => {
  // additional object for detailed date value extraction based on time zones
  const nepalOptions = {
    // weekday: "long",
    year: "numeric",
    day: "numeric",
    timeZone: "Asia/Kathmandu",
    month: "short",
  };

  // Extract hour and minute for Nepal
  const nepalHourMinute = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
  });

  //   elements to insert time values in HTML
  let nepalDateYear = document.getElementById("nepal-date-year");
  let nepalHourTime = document.getElementById("nepal-hour-time");
  let nepalMinuteTime = document.getElementById("nepal-minute-time");

  //   update every second with the time, date
  let nepalFullDateInterval = setInterval(() => {
    // Get the current month, date and year in Nepal
    let nepalFullDate = date.toLocaleDateString("en-US", nepalOptions);

    // Get the current hour and minute in Nepal
    const nepalTime = new Date().toLocaleString("en-US", nepalHourMinute);

    // console.log("#######", nepalHour, nepalMinute, "############");

    // get hour and minute for nepal
    const nepalParts = nepalHourMinute.formatToParts();
    const nepalHour = nepalParts.find((part) => part.type === "hour").value;
    const nepalMinute = nepalParts.find((part) => part.type === "minute").value;

    // console.log(nepalFullDate);
    // display value on the website
    nepalDateYear.innerText = nepalFullDate;
    nepalHourTime.innerText = nepalHour;
    nepalMinuteTime.innerText = nepalMinute;
  }, 1000);
};


// function for date format of Qatar
const getQatarTime = () => {
    // additional object for detailed date value extraction based on time zones
    const qatarOptions = {
      // weekday: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "Asia/Qatar",
      month: "short",
    };
  
    // Extract hour and minute for Nepal
    const qatarHourMinute = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Qatar",
      hour: "2-digit",
      minute: "2-digit",
    });
  
    //   elements to insert time values in HTML
    let qatarDateYear = document.getElementById("qatar-date-year");
    let qatarHourTime = document.getElementById("qatar-hour-time");
    let qatarMinuteTime = document.getElementById("qatar-minute-time");
  
    //   update every second with the time, date
    let qatarFullDateInterval = setInterval(() => {
      // Get the current month, date and year in qatar
      let qatarFullDate = date.toLocaleDateString("en-US", qatarOptions);
  
      // Get the current hour and minute in qatar
      const qatarTime = new Date().toLocaleString("en-US", qatarHourMinute);
  
      // console.log("#######", qatarHour, qatarMinute, "############");
  
      // get hour and minute for qatar
      const qatarParts = qatarHourMinute.formatToParts();
      const qatarHour = qatarParts.find((part) => part.type === "hour").value;
      const qatarMinute = qatarParts.find((part) => part.type === "minute").value;
  
    //   console.log(qatarFullDate);
      // display value on the website
      qatarDateYear.innerText = qatarFullDate;
      qatarHourTime.innerText = qatarHour;
      qatarMinuteTime.innerText = qatarMinute;
    }, 1000);
  };


// function for date format of Qatar
const getUsaTime = () => {
    // additional object for detailed date value extraction based on time zones
    const usaOptions = {
      // weekday: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "America/New_York",
      month: "short",
    };
  
    // Extract hour and minute for Nepal
    const usaHourMinute = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
    });
  
    //   elements to insert time values in HTML
    let usaDateYear = document.getElementById("usa-date-year");
    let usaHourTime = document.getElementById("usa-hour-time");
    let usaMinuteTime = document.getElementById("usa-minute-time");
  
    //   update every second with the time, date
    let usaFullDateInterval = setInterval(() => {
      // Get the current month, date and year in usa
      let usaFullDate = date.toLocaleDateString("en-US", usaOptions);
  
      // Get the current hour and minute in usa
      const usaTime = new Date().toLocaleString("en-US", usaHourMinute);
  
      // console.log("#######", usaHour, usaMinute, "############");
  
      // get hour and minute for usa
      const usaParts = usaHourMinute.formatToParts();
      const usaHour = usaParts.find((part) => part.type === "hour").value;
      const usaMinute = usaParts.find((part) => part.type === "minute").value;
  
    //   console.log(usaFullDate);
      // display value on the website
      usaDateYear.innerText = usaFullDate;
      usaHourTime.innerText = usaHour;
      usaMinuteTime.innerText = usaMinute;
    }, 1000);
  };


// calling all the clock time's functions
getNepalTime();
getQatarTime()
getUsaTime()



// get new quotations everyday 
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    data.forEach(function (element) {
        console.log(element.text)
        console.log(element.author.split(",")[0])
    })
  });

// timer btn functionality 


function timerToggle(){
    let timerBtn = document.getElementById("timer-btn")
    let runTimer = document.getElementById("run-timer")
    timerBtn.addEventListener("click", ()=>{
        timerBtn.style.display = "none";
        runTimer.style.display = "inline-flex"
    })
    runTimer.addEventListener("click", ()=>{
        runTimer.style.display = "none";
        timerBtn.style.display = "inline-flex"
    })
}

timerToggle()