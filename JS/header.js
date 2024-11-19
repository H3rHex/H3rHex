document.addEventListener("DOMContentLoaded", () =>{
    updateDate()
});

function updateDate(){
    let dayElement = document.getElementById("day");

        const actualDate = new Date();
        const day = String(actualDate.getDate()).padStart(2, '0');
        const month = String(actualDate.getMonth() + 1).padStart(2, '0');
        const year  = actualDate.getFullYear();
        const formatedDate = `${month} ~ ${day} ~ ${year}`;

        //Sets  the day element to the current date
        dayElement.innerHTML = formatedDate;
}

function updateTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const currentTime = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById('time').textContent = currentTime;
}

// Update the time immediately when the page loads
updateTime();

// Update the time every second (1000 ms)
setInterval(updateTime, 1000);