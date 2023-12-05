export function formatDate(timestamp) {
    if (!timestamp) {
        return timestamp;
    }
    let date = new Date(timestamp);
    let output = '';
    output += `${date.getFullYear()}`.padStart(4, '0') + '-';
    output += `${date.getMonth() + 1}`.padStart(2, '0') + '-';
    output += `${date.getDate()}`.padStart(2, '0') + ' ';
    // output += `${date.getHours()}`.padStart(2, '0') + ':';
    // output += `${date.getMinutes()}`.padStart(2, '0') + ':';
    // output += `${date.getSeconds()}`.padStart(2, '0');
    return output;
}