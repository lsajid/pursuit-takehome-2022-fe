import formatTime from "./formatTime";
/**
 * Takes ISO formatted date and converts to formatted time
 * 
 * 2022-05-11T18:00:00.000Z
 * 
 * 2022-07-08T19:43:00.000Z
 * 
 * @param {string} dateIso
 * @returns {string} 
 */

 const formatReservationTime = (dateIso) => {
    let dateInUTC = new Date(dateIso);
    let hours = dateInUTC.getHours();
    let minutes = dateInUTC.getMinutes();
    let timeStr = hours + ":" + minutes;
    
    return formatTime(timeStr)
    // let suffix = ''
    // if(hours >= 12){
    //     suffix = "PM"
    // }else {
    //     suffix = "AM"
    // }

    // hours = hours > 12 ? hours -12 : hours;

    // if(hours === 12){
    //     hours = 11;
    //     minutes = '59';
    // }
    
    // if(hours === 0){
    //     hours = 12;
    // }

    // return hours + ":" + minutes 
}



export default formatReservationTime;
