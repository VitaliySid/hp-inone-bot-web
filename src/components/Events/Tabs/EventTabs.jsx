import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MainInfo from './MainInfo';
import AdditionalInfo from './AdditionalInfo';
import ImageInfo from './ImageInfo';

const EventTabs = ({ eventInfo }) => {

    const [key, setKey] = useState('info');

    let properties = JSON.parse(eventInfo.properties)
    if (properties.description.includes('}')) {
        properties.description = JSON.parse(properties.description)
    }

    return (
        <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="info" title="Инфо">
                <MainInfo eventInfo={eventInfo} />
            </Tab>
            <Tab eventKey="additional" title="Пользовательское событие">
                <AdditionalInfo properties={properties} />
            </Tab>
            <Tab eventKey="image" title="На фото">
                <ImageInfo properties={properties} />
            </Tab>
        </Tabs>
    );
};

export default EventTabs;