import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <h4 className="fw-bold text-warning mb-3">PT GOLDEN IB</h4>
            <p className="small text-secondary">Digital Performance Marketing & Multi-Channel E-Commerce. Menjembatani produk berkualitas dengan target pasar yang tepat.</p>
          </Col>
          <Col lg={4} className="ps-lg-5">
            <h5 className="fw-bold mb-3">Kontak & Lokasi</h5>
            <p className="small text-secondary mb-2">
              <FaMapMarkerAlt className="me-2 text-warning" />
              Jalan Griya Harapan No. 12, Way Halim Permai, Bandar Lampung
            </p>
            <p className="small text-secondary">
              <FaWhatsapp className="me-2 text-warning" />
              0896-3210-7029
            </p>
          </Col>
          <Col lg={4}>
            <h5 className="fw-bold mb-3">Ikuti Kami</h5>
            <div className="d-flex gap-3">
              {/* Instagram dengan target _blank */}
              <a href="https://www.instagram.com/ptgoldeniib/" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              {/* TikTok dengan target _blank */}
              <a href="https://www.tiktok.com/@lifeatgoldenib" className="text-white fs-4 " target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
            <p className="small text-secondary mt-4">&copy; 2026 PT Golden IB. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
