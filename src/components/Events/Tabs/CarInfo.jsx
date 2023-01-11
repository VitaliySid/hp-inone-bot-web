import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CarInfo = ({ properties }) => {

    return (properties && <div>
        <Row>
            <Col>
                <Form.Label column="sm" sm={3} lg={3}>
                    Тип
                </Form.Label>
            </Col>
            <Col>
                <Form.Label column="sm">
                    {properties.body.name}
                </Form.Label>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Form.Label column="sm" sm={3} lg={3}>
                    Цвет
                </Form.Label>
            </Col>
            <Col>
                <Form.Label column="sm">
                    {properties.color.name}
                </Form.Label>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Form.Label column="sm" sm={3} lg={3}>
                    Страна
                </Form.Label>
            </Col>
            <Col>
                <Form.Label column="sm">
                    {properties.license_plate_country.name}
                </Form.Label>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Form.Label column="sm" sm={3} lg={3}>
                    Регистрационный знак
                </Form.Label>
            </Col>
            <Col>
                <Form.Label column="sm">
                    {properties.license_plate_number.name}
                </Form.Label>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Form.Label column="sm" sm={3} lg={3}>
                    Производитель
                </Form.Label>
            </Col>
            <Col>
                <Form.Label column="sm">
                    {properties.make.name}
                </Form.Label>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Form.Label column="sm" sm={3} lg={3}>
                    Модель
                </Form.Label>
            </Col>
            <Col>
                <Form.Label column="sm">
                    {properties.model.name}
                </Form.Label>
            </Col>
        </Row>
    </div>
    );
};

export default CarInfo;