const PRESSURE_UNITS = 0.750062

//Метод верхнего регистра первой буквы
export const capitalizeFirstLetter = (str) => {
    if (!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}
//Переводим ГПА в ММ Ртутного столба (давление)
export const getPressureMm = (hpa) => {
    return Math.round(hpa * PRESSURE_UNITS)
}
//Переводим секунды в миллисекунды для вермени восхода и заката
export const getTime = (seconds) => {
    return new Date(seconds * 1000). toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}