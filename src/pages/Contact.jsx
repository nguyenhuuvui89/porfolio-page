import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '',subject:'', message: ''})
  const [loading, setLoading] = useState(false);
  const forRef = useRef(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: 'Vincent Nguyen',
        from_email: formData.email,
        to_email: 'vincentnguyen2803@gmail.com',
        subject: formData.subject,
        message: formData.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false)
      setFormData({name: '', email: '', subject: '', message: ''})
    }).catch(() => {
      setLoading(false)
    })
  }

  return (
    <section className="flex flex-col max-container items-center">
      <div className="flex items-center">
        <h1 className="head-text">Contact Me !</h1>
      </div>
      <form className="w-3/4 md:w-3/5 flex flex-col gap-5 mt-20" onSubmit={handleSubmit}>
        <label className="text-black-500">Name</label>
        <input
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label className="text-black-500">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label className="text-black-500">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input"
          required
          value={formData.subject}
          onChange={handleChange}
        />
        <label className="text-black-500">Message</label>
        <textarea
          className="textarea"
          name="message"
          value={formData.message}
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <input 
          type="submit" 
          value= {loading ? 'Sending...' : 'Send Message'} 
          disabled={loading}
          className="btn btn-primary" />
      </form>
    </section>
  );
};

export default Contact;
