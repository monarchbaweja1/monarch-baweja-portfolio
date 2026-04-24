import { Download, ExternalLink, Mail, Send } from "lucide-react";
import { useState } from "react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = form.subject || "Portfolio inquiry";
    const body = [
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      "",
      form.message || "Write your message here",
    ].join("\n");

    window.location.href = `mailto:monarch.baweja25b@gim.ac.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact-section contact-final cinematic-section">
      <div className="contact-layout">
        <div className="contact-copy reveal-up">
          <p className="code-kicker">&lt;!-- Get in Touch --&gt;</p>
          <h2>
            <span>Let's Work</span>
            <span>Together</span>
          </h2>

          <div className="contact-direct" aria-label="Direct contact links">
            <a href="mailto:monarch.baweja25b@gim.ac.in">
              <span>
                <Mail size={16} />
                Email
              </span>
              <strong>monarch.baweja25b@gim.ac.in</strong>
            </a>
            <a href="https://www.linkedin.com/in/monarchbaweja" target="_blank" rel="noreferrer">
              <span>
                <ExternalLink size={16} />
                LinkedIn
              </span>
              <strong>Connect professionally</strong>
            </a>
            <a href={asset("Monarch-Baweja-CV.pdf")}>
              <span>
                <Download size={16} />
                Resume
              </span>
              <strong>Download CV</strong>
            </a>
          </div>
        </div>

        <form className="contact-form reveal-up" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              First name*
              <input
                name="firstName"
                value={form.firstName}
                onChange={updateField}
                placeholder="Monarch"
                required
              />
            </label>
            <label>
              Last name*
              <input name="lastName" value={form.lastName} onChange={updateField} placeholder="Baweja" required />
            </label>
          </div>

          <label>
            Email address*
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder="example@gmail.com"
              required
            />
          </label>

          <label>
            Subject*
            <input
              name="subject"
              value={form.subject}
              onChange={updateField}
              placeholder="Tell me the purpose"
              required
            />
          </label>

          <label>
            Message
            <textarea name="message" value={form.message} onChange={updateField} placeholder="Write your message here" />
          </label>

          <button type="submit">
            <Send size={15} />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
