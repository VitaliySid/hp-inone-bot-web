import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";

const ImageInfo = ({ properties }) => {

    return (
        Array.isArray(properties?.fileIds) && <Container>
            <Row>
                {
                    properties?.fileIds.length > 0
                        ? properties?.fileIds.map(img => <Container><Image key={img} src={"/"+img} fluid /></Container>)
                        : <Col>
                            <Form.Label column="sm">
                                Нет данных фотоизображений
                            </Form.Label>
                        </Col>
                }
            </Row>
        </Container>
    );
};

export default ImageInfo;