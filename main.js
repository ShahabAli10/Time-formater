var input = prompt("Enter the time in 24-hour format (HH:MM)");
var hour = parseInt(input.substring(0, 2));
var minutes = input.substring(3);

function formatHour12(hour) {
    let period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; 
    return hour + ':' + minutes + ' ' + period;
}
if (hour >= 6 && hour < 12) {
    document.write("Good Morning! The time is: " + formatHour12(hour));
}
else if (hour >= 12 && hour < 17) {
    document.write("Good Afternoon! The time is: " + formatHour12(hour));
}
else if (hour >= 17 && hour < 21) {
    document.write("Good Evening! The time is: " + formatHour12(hour));
}
else {
    document.write("Time is outside the specified range. The current time is: " + formatHour12(hour));
}
