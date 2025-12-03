import { useEffect } from "react";

export const useSSE = (eventName, callback) => {

    useEffect(() => {
        const ev = new EventSource(`/api/events`);

        ev.addEventListener(eventName, callback);

        // updateUI(data);
        return () => ev.close();
    }, [eventName, callback]);

} 
