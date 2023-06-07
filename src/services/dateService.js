const getCurrentDate = () => {
    const date = new Date()
    const formattedDate = (date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + (date.getDate() ))
    return formattedDate.split()
};

module.exports = {
    getCurrentDate
}