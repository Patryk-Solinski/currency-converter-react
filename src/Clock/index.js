import { useEffect, useState } from "react"
import { CurrentClock } from "./styled";


const Clock = () => {
    const formattedDate = 
    {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
   
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <CurrentClock>
            Dzisiaj jest {""}
            {date.toLocaleString(undefined, formattedDate)}
        </CurrentClock>
    );
};

export default Clock;