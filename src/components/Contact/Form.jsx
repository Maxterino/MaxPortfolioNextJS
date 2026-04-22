'use client';
import React, { useState, useRef } from 'react';

function Form() {
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef(null);

  async function handleClick() {
    if (status === 'loading') return;

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setStatus('loading');

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.type === 'success') {
        setStatus('success');
      } else {
        setErrorMsg(json.message || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Could not reach the server. Please try again later.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="full-width">
                <div className="sec-head mb-80">
                  <span className="sub-title mb-15 opacity-8">- Contact Me</span>
                  <h3 className="text-u f-bold fz-50">Message <span className="f-ultra-light">Sent</span>.</h3>
                  <p className="mt-30" style={{ fontSize: '18px', opacity: 0.8 }}>
                    Thank you for reaching out! I will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="full-width">
              <div className="sec-head mb-80">
                <span className="sub-title mb-15 opacity-8">- Contact Me</span>
                <h3 className="text-u f-bold fz-50">Get In <span className="f-ultra-light">Touch</span>.</h3>
              </div>
              <form ref={formRef} id="contact-form">
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                    </div>
                    {status === 'error' && (
                      <p style={{ color: '#f44336', margin: '15px 0 0' }}>{errorMsg}</p>
                    )}
                    <div className="text-center">
                      {/* onClick on the wrapper because the button has pointer-events:none in style.css */}
                      <div
                        className="mt-30 hover-this cursor-pointer"
                        onClick={handleClick}
                        style={{ opacity: status === 'loading' ? 0.6 : 1, display: 'inline-block' }}
                      >
                        <button type="button" className="hover-anim">
                          <span className="text">
                            {status === 'loading' ? 'Sending...' : "Let's Talk"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
