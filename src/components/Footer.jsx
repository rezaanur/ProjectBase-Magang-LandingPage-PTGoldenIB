import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <style>
          {`
            @media (max-width: 576px) {
              footer {
                padding-top: 2.5rem !important;
                padding-bottom: 2.5rem !important;
                text-align: center; /* Menengahkan teks di HP agar lebih rapi */
              }
              .footer-brand {
                font-size: 1.25rem !important;
              }
              .footer-header {
                font-size: 1.1rem !important;
                margin-top: 1rem;
              }
              .footer-text {
                font-size: 0.8rem !important;
                max-width: 280px;
                margin: 0 auto;
              }
              .social-icons-footer {
                justify-content: center !important;
              }
              .footer-copyright {
                font-size: 0.75rem !important;
              }
            }
          `}
        </style>
        <Row className="gy-4">
          <Col lg={4}>
            <h4 className="fw-bold text-warning mb-3 footer-brand">PT GOLDEN IB</h4>
            <p className="small text-secondary footer-text">Digital Performance Marketing & Multi-Channel E-Commerce. Menjembatani produk berkualitas dengan target pasar yang tepat.</p>
          </Col>
          <Col lg={4} className="ps-lg-5">
            <h5 className="fw-bold mb-3 footer-header">Kontak & Lokasi</h5>
            <p className="small text-secondary mb-2 footer-text">
              <FaMapMarkerAlt className="me-2 text-warning" />
              Jalan Griya Harapan No. 12, Way Halim Permai, Bandar Lampung
            </p>
            <p className="small text-secondary footer-text">
              <FaWhatsapp className="me-2 text-warning" />
              0896-3210-7029
            </p>
          </Col>
          <Col lg={4}>
            <h5 className="fw-bold mb-3 footer-header">Ikuti Kami</h5>
            <div className="d-flex flex-column gap-2 social-icons-footer">
              {/* Instagram dengan target _blank */}
              <a href="https://www.instagram.com/ptgoldeniib/" className="text-white d-flex align-items-center gap-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
                <span className="small">@ptgoldeniib</span>
              </a>
              {/* TikTok dengan target _blank */}
              <a href="https://www.tiktok.com/@lifeatgoldenib" className="text-white d-flex align-items-center gap-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={20} />
                <span className="small">@lifeatgoldenib</span>
              </a>
            </div>
            <p className="small text-secondary mt-4 footer-copyright">&copy; 2026 PT Golden IB. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
