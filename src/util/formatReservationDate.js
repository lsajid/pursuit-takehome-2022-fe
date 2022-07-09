/**
 * Takes ISO formatted date time str and converts to formatted date
 * 
 * 2022-05-11T18:00:00.000Z
 * 
 * 2022-07-08T19:43:00.000Z
 * 
 * @param {string} dateIso
 * @returns {string} 
 */

const formatReservationDate = (dateIso) => {
    let dateInUTC = new Date(dateIso);
    return dateInUTC.toLocaleDateString('en-US', { timeZone: 'UTC' })
}

export default formatReservationDate;