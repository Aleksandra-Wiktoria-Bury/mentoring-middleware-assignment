const capitalize = require('./capitalize');

const sortAlphabetical = (array) => {

    const normalizedArray = array.map(el=>capitalize(el));
    return normalizedArray.sort()

}

module.exports = sortAlphabetical;