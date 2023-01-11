import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const MainInfo = ({ eventInfo }) => {

    return (
        <Container>
            <Row className="justify-content-sm-left">
                <Col>
                    <Form.Label column="sm" sm={3} lg={3}>
                        ID
                    </Form.Label>
                </Col>
                <Col>
                    <Form.Label column="sm">
                        {eventInfo.id}
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
                        {eventInfo.type}
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
                        {eventInfo.eventDate}
                    </Form.Label>
                </Col>
            </Row>
        </Container>
    );
};

export default MainInfo;