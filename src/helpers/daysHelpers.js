const padStartValue = (date) => {
        return date.toString().padStart(2, '0')
}

export const getCurrentDayWithoutDots = () => {
        const time = new Date();
        return `${padStartValue(time.getDate())}${padStartValue(time.getMonth()+1)}${time.getFullYear()}`;
}

export const getCurrentDayString = () => {
        const time = new Date();
        return `${padStartValue(time.getDate())}.${padStartValue(time.getMonth()+1)}.${time.getFullYear()}`;
}

export const getDayWithDots = (date) => {
        return `${date.slice(0,2)}.${date.slice(2,4)}.${date.slice(4)}`
}

export const isDayExist = (days, day) => {
        return days.include(day)
}

export const sortByDateStamp = (arr) => {
        return arr.sort((a,b)=> a.id > b.id ? 1 : -1)
}
