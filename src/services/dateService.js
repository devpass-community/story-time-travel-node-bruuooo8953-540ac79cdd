const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleDateString()
};

module.exports = {
    getCurrentDate
}