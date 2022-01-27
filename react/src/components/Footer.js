import { FaGithub, FaFacebook, FaReact } from "react-icons/fa";
import "./styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <p>&copy; Copyright 2020 </p>
      </div>
      <div className="footer__social">
        <FaGithub className="footer__social__item" />
        <FaFacebook className="footer__social__item" />
        <FaReact className="footer__social__item" />
      </div>
    </div>
  );
}
