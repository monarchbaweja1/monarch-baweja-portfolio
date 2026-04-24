import { Code2, Download, ExternalLink, Mail } from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const contacts = [
  ["Email", "mailto:monarch.baweja25b@gim.ac.in", "monarch.baweja25b@gim.ac.in", Mail],
  ["LinkedIn", "https://www.linkedin.com/in/monarchbaweja", "linkedin.com/in/monarchbaweja", ExternalLink],
  ["GitHub", "https://github.com/", "github.com", Code2],
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Contact</p>
        <h2>LET'S BUILD SOMETHING INTELLIGENT.</h2>
      </div>
      <div className="contact-grid reveal-up">
        {contacts.map(([label, href, text, Icon]) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <Icon size={18} />
            <span>{label}</span>
            <strong>{text}</strong>
          </a>
        ))}
        <a href={asset("Monarch-Baweja-CV.pdf")}>
          <Download size={18} />
          <span>Resume</span>
          <strong>Download Resume</strong>
        </a>
      </div>
    </section>
  );
}
