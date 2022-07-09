/**
 * Takes the Time in 00:00:00 format and converts to standard time
 * 
 * 00:00:00 ===> 12:00 AM 
 * 03:00:00 ===> 3:00 AM
 * 07:00:00 ===> 7:00 AM
 * 11:00:00 ===> 11:00 AM
 * 12:00:00 ===> 12:00 PM
 * 13:00:00 ===> 1:00 PM
 * 14:30:00 ===> 2:30 PM
 * 16:55:00 ===> 4:55 AM
 * 18:20:00 ===> 6:20 PM
 * 20:00:00 ===> 8:00 AM
 * 21:30:00 ===> 9:30 AM
 * 22:00:00 ===> 10:00 AM
 * 23:00:00 ===> 11:00 AM
 * 24:00:00 ===> 12:00 AM
 *
 * @param {string} timeStr
 * @returns {string} The standard time
 */
const formatTime = (timeSr) => {
    let timeArr = timeSr.split(":");
    
    let hour = parseInt(timeArr[0]);
    let min = timeArr[1];
    let format = '';

    if(hour >= 12){
        format = 'PM';
    }else{
        format = "AM";
    }

    hour = hour > 12? hour -12 : hour;
    
    if(hour === 12){
        hour = 11;
        min = '59'
    }

    if(hour === 0){
        hour = 12;
    }

    if(min === "0"){
        min = "00"
    }
    
    return hour + ":"+ min + format;
}

export default formatTime;