import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function Frontended(props) {
    const [shop, setShop] = useState('');
    // const navigate  = useNavigate();

    const addData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://139.59.65.133:3091/install?shop=${shop}`);
            console.log(response)
            const { redirectUrl } = response.data; // Handle the response as needed
            if(redirectUrl)
            {
             window.location.href = redirectUrl;
            }
                console.log(redirectUrl);

        } catch (error) {
            console.error('Error during login:', error);
        }
    };
 


    return (
        <div className='container mt-3'>
            <section>
                <div className='center_data'>
                    <h1>Store Information</h1>
                    <Form>
                        <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                            <Form.Label>Store Name</Form.Label>
                            <Form.Control type="text" name="text" onChange={(event) => {
                                setShop(event.target.value);
                            }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" className="mb-3 col-lg-5" onClick={addData} type="submit">
                            Install App
                        </Button>
                    </Form>
                </div>

            </section>


        </div>
    );
}

export default Frontended;