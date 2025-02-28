//  program-1 (WAP to display the current day and time ,[Ex- Current day and time is: Wednesday 18:45:47])

let currentDate = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = days[currentDate.getDay()];

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes(); 
let seconds = currentDate.getSeconds();

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

console.log(`Current day and time is: ${dayOfWeek} ${hours}:${minutes}:${seconds}`);




//  <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Current Date and Time</h1>
//     <p id="datetime"></p>
//     <script>
//         // Get the current date and time
//         let currentDate = new Date();
    
//         // Array of days
    
//         let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
//         // Get the day of the week
    
//         let dayOfWeek = days[currentDate.getDay()];
    
//         // Get current time
//         let hours = currentDate.getHours();
    
//         let minutes = currentDate.getMinutes(); let seconds = currentDate.getSeconds();
    
//         // Format hours, minutes, and seconds to ensure they have two digits
    
//         hours = hours < 10 ? '0' + hours : hours;
    
//         minutes = minutes < 10 ? '0' + minutes : minutes;
    
//         seconds = seconds < 10 ? '0' + seconds : seconds;
    
//         // Display current day and time
//         console.log(`Current day and time is ${dayOfWeek}${hours}:${minutes}:${seconds}`);
//         window.onload = function () {
//             setInterval(function () {
//                 var date = new Date();
//                 var displayDate = date.toLocaleDateString();
//                 var displayTime = date.toLocaleTimeString();
//                 document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
//             }, 1000); // 1000 milliseconds = 1 second
//         };
    
    
    
//     </script>
// </body>
// </html> 



