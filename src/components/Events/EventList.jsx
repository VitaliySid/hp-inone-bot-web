import React, { useState } from 'react';
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import EventRow from './EventRow';
import Modal from 'react-bootstrap/Modal';
import EventItem from './EventItem';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const EventList = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const { tg, queryId } = useTelegram();

    const fetchData = async () => {
        let resp = await fetch('/events.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let jsonData = await resp.json()

        setItems(jsonData.items)
    }

    useEffect(() => {
        fetchData();
    }, [])

    let onView = useCallback((selectedItem) => {
        setModalShow(true)
        setSelectedItem(selectedItem)
    }, [])

    return (<div>
         <Container>
        <Table className="table-responsive-sm">
            <thead>
                <tr>
                    <th className="text-wrap">ИСТОЧНИК</th>
                    <th className="text-wrap">ТИП</th>
                    <th className="text-wrap">ДАТА ФИКСАЦИИ</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <EventRow
                        key={item.id}
                        item={item}
                        setSelected={onView}
                    />
                ))}
            </tbody>
        </Table>
        </Container>
        <EventModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        event={selectedItem}
        /></div>
    );
}

const EventModal = (props) => {
    return (
        props && <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.event.deviceName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EventItem event={props.event} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn-sm">OK</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EventList;
