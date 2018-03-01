export const isBlankObject = (obj) => Object.keys(obj).length ===0;

export const convertTimestamp = (seconds) => {
    const d = new Date(seconds * 1000);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    return`${month + 1}/${day}/${year}/${hour}/${minutes}`;
}