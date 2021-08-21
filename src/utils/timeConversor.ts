type TimeProps = {
    hour: number;
    min: number;
    sec: number;
};

export default function convertTime(time: number): TimeProps {
    const convertedTime = { hour: 0, min: 0, sec: 0 };
    let sec = Math.round(time / 1000); // convert attributes to seconds.

    while (sec >= 3600) {
        convertedTime.hour++;
        sec -= 3600;
    }

    while (sec >= 60) {
        convertedTime.min++;
        sec -= 60;
    }

    convertedTime.sec = sec;

    return convertedTime;
}
