const info = (...props) => {
    console.log(">>>INFO:", ...props);
}

const error = (...props) => {
    console.log(">>>ERROR:", ...props);
}
const errorLog = (...props) => {
    console.log(">>>ERROR_LOG:", ...props);
}

module.exports = {
    info, error, errorLog
}