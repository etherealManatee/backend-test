import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Form, Row} from "react-bootstrap";

function HomePage(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts(){
            try {
                let {data} = await axios.get("/api/")
            }
            catch (e) {
                console.log(e)
            }
        }
    },[])
    return (
        <div>
            <Container fluid>
                <Form onSubmit={submitProperty} id="formData">
                    <Row>
                        <label>kind</label>
                        <select name="kind">
                            <option value="hdb">hdb</option>
                            <option value="condo">condo</option>
                            <option value="landed">landed</option>
                        </select>
                    </Row>
                    <Row>
                        <label>price</label>
                        <Form.Control type="text" name="price" />
                    </Row>
                    <Row>
                        <label>size</label>
                        <Form.Control type="text" name="size" />
                    </Row>
                    <Row>
                        <label>bedrooms</label>
                        <Form.Control type="text" name="bedrooms" />
                    </Row>
                    <Row>
                        <label>bathrooms</label>
                        <Form.Control type="text" name="bathrooms" />
                    </Row>
                    <Row>
                        <label>address</label>
                        <Form.Control type="text" name="address"/>
                    </Row>
                    <Row>
                        <div className="col-6">
                            <label>long</label>
                            <Form.Control type="text" name="location[long]" />
                        </div>
                        <div className="col-6">
                            <label>lat</label>
                            <Form.Control type="text" name="location[lat]"/>
                        </div>
                    </Row>

                    <Row>
                        <label>Utilities</label>
                        { userUtility.utilities.map(ut => (
                            <div key={ut._id}>
                                <Form.Control type="checkbox" name="utilities" value={ut._id} />{ut.name}
                            </div>
                        ))}
                    </Row>
                    <Row>
                        <button className="btn" type="submit">Add Property</button>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default HomePage;