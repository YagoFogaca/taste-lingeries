import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./index.footer.css";

export const FooterComponents = () => {
  return (
    <>
      <footer className="footer">
        <section>
          <div>
            <h6>SIGA-NOS</h6>
            <div className="section-icons">
              <div>
                <a href="https://wa.me/message/ZJURC2JMMG73M1">
                  <FaWhatsapp />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/taste.lingeries/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
