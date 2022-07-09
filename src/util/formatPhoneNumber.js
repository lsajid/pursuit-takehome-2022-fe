/**
 * Takes phoneNumber 10 characters and formats with (XXX) - XXX - XXXX
 * 
 * 
 * @param {string} phoneNumber
 * @returns {string} formatted phoneNumber
 */

 const formatPhoneNumber = (phoneNumber) => {
    return '(' + phoneNumber.substring(0,3) + ') ' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6);    
}

export default formatPhoneNumber;