import Hero from "../Components/heroNav";
import { useState, type FormEvent } from "react"
import { Form, Button } from "react-bootstrap";


interface ContactForm {
    name: string;
    email: string;
    message: string
}

const Contact: React.FC = () => {

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


    return (
        <>
        <Hero />

        <h1>Services I Offer</h1>
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
            >
                See Packages
            </a>
            </div>
            
            <div className="resumeTxt">
                <p>Skip introductions & download my resume</p>
                <div className="resumeContainer">
                    <a  href="/Kiara-Anderson_UX-Engineer.pdf"
                        download="Kiara_Anderson_Resume.pdf"
                        className="resumeLink"
                    >
                        Resume
                    </a>
                </div>
            </div>

            <Form className="form">
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Full Name"/>    
                </Form.Group>  

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email Address"/>    
                </Form.Group>  

                <Form.Group controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as={"textarea"}/>
                </Form.Group>

                <Button onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>

        </>
    )
}

export default Contact