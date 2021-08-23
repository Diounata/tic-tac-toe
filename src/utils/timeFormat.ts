type TimeProps = {
    hour: number;
    min: number;
    sec: number;
};

export default function formatTime(date: TimeProps): string {
    function format(t: number): string {
        return String(t).padStart(2, '0');
    }

    let newDate = '';

    if (date.hour) {
        newDate += `${format(date.hour)}:`;
    }

    if (!date.min) {
        newDate += `0:${format(date.sec)}`;
    } else {
        newDate += `${format(date.min)}:${format(date.sec)}`;
    }

    return newDate;
}
