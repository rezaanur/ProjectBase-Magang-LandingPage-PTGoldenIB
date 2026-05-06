import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import logoGolden from "../assets/logogoldenib.png"; // Sesuaikan nama file logomu

const Hero = () => {
  return (
    <div id="home" className="py-5" style={{ overflow: "hidden" }}>
      <Container>
        <Row className="align-items-center min-vh-75">
          {/* Sisi Kiri: Teks & Deskripsi */}
          <Col lg={6} className="text-center text-lg-start">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="display-5 fw-bold mb-4" style={{ lineHeight: "1.2" }}>
                Transformasi Bisnis Menjadi <br />
                <span style={{ color: "#FFD700" }}>Berlian yang Bersinar</span>
              </h1>
              <p className="lead text-secondary mb-4">PT Golden IB hadir sebagai mitra strategis untuk mendominasi ekosistem digital melalui inovasi berbasis data dan strategi iklan yang presisi.</p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <Button variant="warning" href="#services" size="lg" className="rounded-pill px-4 fw-bold">
                  Eksplorasi Layanan
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Sisi Kanan: Gambar/Logo dengan Animasi Mengambang */}
          <Col lg={6} className="mt-5 mt-lg-0 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <motion.img
                src={logoGolden}
                alt="PT Golden IB Logo"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
                // Animasi mengambang (Floating Effect)
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
