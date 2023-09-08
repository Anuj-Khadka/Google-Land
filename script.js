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



getNepalTime();
getQatarTime()
