type TimeProps = {
    min: number;
    sec: number;
};

export default function convertTime(time: number): TimeProps {
    const convertedTime = { min: 0, sec: 0 };
    let sec = Math.round(time / 1000); // convert attributes to seconds.

    while (sec >= 60) {
        convertedTime.min++;
        sec -= 60;
    }

    convertedTime.sec = sec;

    return convertedTime;
}
