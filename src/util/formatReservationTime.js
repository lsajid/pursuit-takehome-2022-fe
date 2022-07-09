import formatTime from "./formatTime";
/**
 * Takes ISO formatted date and converts to formatted time
 * 
 * 2022-05-11T18:00:00.000Z ----> 12:00AM
 * 
 * 2022-07-08T19:43:00.000Z ----> 7:43PM
 * 
 * @param {string} dateIso
 * @returns {string} formated to Time
 */

 const formatReservationTime = (dateIso) => {
    let dateInUTC = new Date(dateIso);
    let hours = dateInUTC.getHours();
    let minutes = dateInUTC.getMinutes();
    let timeStr = hours + ":" + minutes;
    
    return formatTime(timeStr)
}



export default formatReservationTime;
