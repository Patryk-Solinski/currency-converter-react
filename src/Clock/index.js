import { useEffect, useState } from "react"

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p>
            Dzisiaj jest {""}
            {currentDate.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }
            )}
        </p>
    );
};

export default Clock;