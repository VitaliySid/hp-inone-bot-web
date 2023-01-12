import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";

const ImageInfo = ({ properties }) => {

    return (
        Array.isArray(properties?.fileIds) && properties?.fileIds.length
            ? <Container>
                <Row>
                    {
                        properties?.fileIds.map(img => <Container key={img}><Image src={"/" + img} fluid /></Container>)
                    }
                </Row>
            </Container>
            : <Col>
                <Form.Label column="sm">
                    Нет данных фотоизображений
                </Form.Label>
            </Col>
    );
};

export default ImageInfo;