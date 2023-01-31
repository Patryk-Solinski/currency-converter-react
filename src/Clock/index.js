import { useEffect, useState } from "react"
import "./style.css";
import { formattedDate } from "./fromattedDate";

const Clock = () => {
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
        <p>
            Dzisiaj jest {""}
            {date.toLocaleString(undefined, formattedDate)}
        </p>
    );
};

export default Clock;