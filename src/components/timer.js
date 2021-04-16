import React from "react";

const Timer = () => {
    const [counter, setCounter] = React.useState(10);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className="App">
            <div>Countdown: {counter === 0 ? "Time over" : counter}</div>
        </div>
    );
}

export default Timer;