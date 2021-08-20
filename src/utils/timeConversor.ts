type TimeProps = {
    hour: number;
    min: number;
    sec: number;
};

export default function convertTime(initTime: number, endTime: number): TimeProps {
    const time = { hour: 0, min: 0, sec: 0 };
    let sec = (Math.round(endTime) - Math.round(initTime)) / 1000; // convert attributes to seconds.

    while (sec >= 3600) {
        time.hour++;
        sec -= 3600;
    }

    while (sec >= 60) {
        time.min++;
        sec -= 60;
    }

    time.sec = sec;

    return time;
}
