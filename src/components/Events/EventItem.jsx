import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const EventItem = ({ event }) => {
    let properties = event?.properties && JSON.parse(event.properties)
    const [key, setKey] = useState('info');

    return (
        <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="info" title="Инфо">
                <Container>
                    <Row className="justify-content-sm-left">
                        <Col>
                            <Form.Label column="sm" sm={3} lg={3}>
                                ID
                            </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label column="sm">
                                {event.id}
                            </Form.Label>
                        </Col>
                    </Row>
                    <hr />
                    <br />
                    <Row>
                        <Col>
                            <Form.Label column="sm" sm={3} lg={3}>
                                Тип
                            </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label column="sm">
                                {event.type}
                            </Form.Label>
                        </Col>
                    </Row>
                    <hr />
                    <br />
                    <Row>
                        <Col>
                            <Form.Label column="sm" sm={3} lg={3}>
                                Дата фиксации
                            </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label column="sm">
                                {event.eventDate}
                            </Form.Label>
                        </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="userEvent" title="Пользовательское событие">
                <Container>
                    {properties && <div>
                        <Row>
                            <Col>
                                <Form.Label column="sm" sm={3} lg={3}>
                                    Краткая информация
                                </Form.Label>
                            </Col>
                            <Col>
                                <Form.Label column="sm">
                                    {properties.message}
                                </Form.Label>
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <Form.Label column="sm" sm={3} lg={3}>
                                    Краткое описание
                                </Form.Label>
                            </Col>
                            <Col>
                                <Form.Label column="sm">
                                    {properties.description}
                                </Form.Label>
                            </Col>
                        </Row></div>
                    }
                </Container>
            </Tab>
        </Tabs>
    );
};

export default EventItem;