import { Github, Linkedin, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
      <div class="contact" id="contact">
        <ul>
          {/* <IconButton aria-label="LinkedIn" size="larsge">
            <LinkedInIcon class="contact-item" fontSize="inherit" />
          </IconButton> */}
          <a
            href="https://www.linkedin.com/in/muhammad-lutfi-pratama-4ab052217"
            className="contact-item"
          >
            <Linkedin />
          </a>
          <a href="https://github.com/lutfi-pratama" className="contact-item">
            <Github />
          </a>
          <a
            href="https://www.instagram.com/lutfi.pratama22/"
            className="contact-item"
          >
            <Instagram />
          </a>
          {/* <GitHub class="contact-item" color="disable" fontSize="small" />
          <Instagram class="contact-item" color="disable" fontSize="small" /> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
