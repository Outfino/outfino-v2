import { useState } from 'react';
import Data from '../services/Data';

function Support() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleEmailSend = async () => {
      if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
        setErrorMessage('Something is missing!');
        return;
      } else if (!formData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setErrorMessage('E-mail is not valid!');
        return;
      }
      
      try {
        await Data.sendSupportRequest(formData.name, formData.email, formData.message);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error.message || 'Failed to send the message.');
      }
    };

    return (
        <section className='container-fluid my-5' id='help'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-5'>
                    <h2 className='my-5 text-center'>Need help?</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>

                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-primary btn-lg' onClick={handleEmailSend}>Send</button>
                    </div>
                    <div className='text-center'>
                        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                        {successMessage && <p className="text-success mt-3">{successMessage}</p>}

                        <hr className='mx-5' />
                        <p>Or send an e-mail to <a href={`mailto:${Data.supportEmail}`}>{Data.supportEmail}</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;