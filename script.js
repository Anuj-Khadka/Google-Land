let date = new Date();

const getNepalTime = ()=>{
    const nepalOptions = {
      // weekday: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "Asia/Kathmandu",
      month: "short"
    };
    
    let nepalDateYear = document.getElementById("nepal-date-year");

    let nepalFullDateInterval = setInterval(() => {
        let nepalFullDate = date.toLocaleDateString("en-US", nepalOptions);
        console.log(nepalFullDate)
        nepalDateYear.innerText = nepalFullDate
        
    }, 1000);
}


getNepalTime()

// console.log(date.toLocaleString("en-US", options));
// console.log(date.toLocaleDateString("en-US", options));
// console.log(date.toLocaleTimeString("en-US", options))
