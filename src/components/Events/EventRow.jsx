import React from 'react';
import Button from 'react-bootstrap/Button';

const EventRow = ({ item, setSelected }) => {
    const onClick = (event) => {
        setSelected(item);
    }

    return (
        item && <tr>
            <td>{item.deviceName}</td>
            <td>{item.type}</td>
            <td>{item.eventDate}</td>
            <td> <Button
                variant="link"
                onClick={onClick}
            >
                Просмотреть
            </Button></td>
        </tr>
    );
};

export default EventRow;