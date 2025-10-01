import Hero from "../Components/heroNav";
import { Form, Button, Row, Col } from "react-bootstrap";



const Contact: React.FC = () => {


    return (
        <>
        <Hero />

                <h2>Services I Offer</h2>
                    <ul>
                        <li>Frontend Development (React, Typescript, responsive Design)</li>
                        <li>UX & UI Design (wireframes, prototypes, design systems)</li>
                        <li>Branding Integration Add-Ons</li>
                        <li>Starter Website Bundle (branding + setup + launch)</li>
                        <li>Ongoing Support (maintenance & updates)</li>
                    </ul>
                    <div className="linkPackages">
                    <a  href="/Packages.pdf"
                        download="Kiara_Anderson_Packages.pdf"
                        className="packageLink"
                    >
                        See Packages
                    </a>
                    </div>

                    <div className="resumeTxt">
                    <a  href="/Kiara-Anderson_UX-Engineer.pdf"
                        download="Kiara_Anderson_Resume.pdf"
                        className="resumeLink"
                    >
                        Resume
                    </a>
                </div>
            
                <Form 
                    action="https://formspree.io/f/mpwydeqz" 
                    method="POST" 
                    className="form"> {/* formspree handles the entire submission*/}
                    
                    <Row className="g-3">
                    <Col lg={4}>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Full Name" 
                                name="name" 
                                required/>    
                        </Form.Group>  
                    </Col>

                    <Col lg={4}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Email Address" 
                                name="email" 
                                required/>   
                        </Form.Group> 
                    </Col> 

                    <Col lg={4}>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as={"textarea"} 
                                name="message" 
                                required/>
                        </Form.Group>
                    </Col>

                        <Button type="submit" id="btnForm">
                            Submit
                        </Button>

                    </Row>
                </Form>
        </>
    )
}

export default Contact


/*

const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        message: ''
    })


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log('Form Submitted: ', formData)
        setFormData({ name: '', email: '', message: '' })
    }
        */