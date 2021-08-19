type TimeProps = {
    hour: number;
    min: number;
    sec: number;
};

export default function convertTime(lowT: number, upT: number): TimeProps {
    const time = { hour: 0, min: 0, sec: 0 };
    let t = upT - lowT;

    while (t >= 600) {
        time.hour++;
        t -= 600;
    }

    while (t >= 60) {
        time.min++;
        t -= 60;
    }

    time.sec = t;

    return time;
}
