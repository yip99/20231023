export function relativeTime(timestamp) {
    if (!timestamp) {
        return timestamp;
    }
    const difference = Date.now() - timestamp;
    const unit = ['second', 'minute', 'hour', 'day', 'month', 'year'];
    const secondsInUnit = [1, 60, 3600, 86400, 2629746, 31556952];
    for (let i = secondsInUnit.length - 1; i >= 0; i--) {
        if (difference / (secondsInUnit[i] * 1000) >= 1) {
            return `${Math.floor(difference / (secondsInUnit[i] * 1000))} ${unit[i]}${Math.floor(difference / (secondsInUnit[i] * 1000)) > 1 ? 's' : ''} ago`;
        }
    }
    return 'now';
}
