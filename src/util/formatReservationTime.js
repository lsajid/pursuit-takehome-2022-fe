/**
 * Takes ISO formatted date and converts to formatted time
 * 
 * 2022-05-11T18:00:00.000Z ----> 12:00AM
 * 
 * 2022-07-08T19:43:00.000Z ----> 7:43PM
 * dateInUTC.toLocaleDateString('en-US', { timeZone: 'UTC' })
 * @param {string} dateIso
 * @returns {string} formated to Time
 */

 const formatReservationTime = (dateIso) => {
    let dateInUTC = new Date(dateIso);
    let stringDate = dateInUTC.toLocaleTimeString('en-US', { timeZone: 'UTC' })
    let stringArr = stringDate.split(":").map((el, index) => {
        console.log(el)
        if(el === '00 PM'){
            return 'PM'
        }else{
            if(index === 0){
                return el+ ":";
            }
            return el
        }
    }).join(" ");


     return stringArr;
}

export default formatReservationTime;
