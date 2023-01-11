import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CarInfo from './CarInfo';

const AdditionalInfo = ({ properties }) => {

    return (
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
                {typeof properties.description === 'string'
                    ? <Row>
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
                    </Row>
                    : <CarInfo properties={properties.description.features} />}
            </div>
            }
        </Container>
    );
};

export default AdditionalInfo;