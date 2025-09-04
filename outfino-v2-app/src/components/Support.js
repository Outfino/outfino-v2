import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Data from '../services/Data';

function Support() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useLanguage();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleEmailSend = async () => {
      if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
        setErrorMessage(t('support.form.errors.missing'));
        return;
      } else if (!formData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setErrorMessage(t('support.form.errors.invalidEmail'));
        return;
      }
      
      try {
        await Data.sendSupportRequest(formData.name, formData.email, formData.message);
        setSuccessMessage(t('support.form.success'));
        setFormData({ name: '', email: '', message: '' });
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error.message || t('support.form.errors.failed'));
      }
    };

    return (
        <section className='container-fluid' id='help'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-12' style={{ maxWidth: '100%' }}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">{t('support.form.name')}</label>
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
                            <label htmlFor="email" className="form-label">{t('support.form.email')}</label>
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
                            <label htmlFor="message" className="form-label">{t('support.form.message')}</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            />
                        </div>
                    </form>

                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary btn-lg' onClick={handleEmailSend}>{t('support.form.send')}</button>
                    </div>
                    <div className='text-center'>
                        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                        {successMessage && <p className="text-success mt-3">{successMessage}</p>}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;