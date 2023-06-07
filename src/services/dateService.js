const getCurrentDate = () => {
    const date = new Date()
    return formattedDate = (date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + (date.getDate() ))
};

module.exports = {
    getCurrentDate
}