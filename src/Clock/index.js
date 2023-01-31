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
            Dziś jest {""}
            {currentDate.toLocaleString(undefined,{
                weekday:"long",
            }
                )}
        </p>
    )
};

export default Clock;