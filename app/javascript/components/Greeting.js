import React, { useEffect } from 'react';
import { getRandomGreeting } from '../redux/store';

const Greeting = () => {
    const greeting = useSelector((state) => state.greeting);
    useEffect(() => {
        getRandomGreeting();
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
}

export default Greeting;