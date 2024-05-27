import React, { useState } from 'react';

    const Contact = () => {
        const [form, setForm] = useState({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', form);
            // Add your form submission logic here
        };

        return (
            <div className="container">
                <h1>Contact Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" value={form.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };

    export default Contact;
    

