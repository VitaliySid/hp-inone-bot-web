import React, { useState, useEffect } from 'react';
import EventTabs from './Tabs/EventTabs';
import { useParams } from 'react-router-dom';

const EventView = () => {
    let params = useParams();
    const [eventInfo, setEventInfo] = useState(null);
    const fetchData = async () => {
        let resp = await fetch('/events.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let jsonData = await resp.json()
        let item = jsonData.items.filter(i=>i.id == params.id)[0]

        setEventInfo(item)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        eventInfo && <EventTabs eventInfo={eventInfo} />
    );
};

export default EventView;