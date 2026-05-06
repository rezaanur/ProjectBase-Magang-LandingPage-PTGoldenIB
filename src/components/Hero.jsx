import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import logoGolden from "../assets/logogoldenib.png"; // Sesuaikan nama file logomu

const Hero = () => {
  return (
    <div id="home" className="py-5" style={{ overflow: "hidden" }}>
      <Container>
        <style>
          {`
            .hero-title {
              font-size: 2.5rem;
              line-height: 1.2;
            }
            .hero-logo {
              max-height: 400px;
            }
            .hero-description {
              text-align: justify; /* Sesuai permintaan sebelumnya untuk deskripsi teks */
            }

            @media (max-width: 576px) {
              .hero-title {
                font-size: 1.8rem !important; /* Judul lebih kecil di HP */
              }
              .hero-description {
                font-size: 0.9rem !important; /* Deskripsi lebih kecil di HP */
                text-align: center !important; /* Khusus Hero Mobile biasanya lebih bagus center agar simetris dengan tombol */
              }
              .hero-logo {
                max-height: 200px !important; /* Logo lebih mungil di HP agar hemat ruang */
                margin-top: 2rem;
              }
              .btn-hero {
                font-size: 0.9rem !important;
                padding: 10px 24px !important;
              }
            }
          `}
        </style>

        <Row className="align-items-center min-vh-75">
          {/* Sisi Kiri: Teks & Deskripsi */}
          <Col lg={6} className="text-center text-lg-start order-2 order-lg-1">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="hero-title fw-bold mb-4">
                Transformasi Bisnis Menjadi <br />
                <span style={{ color: "#FFD700" }}>Berlian yang Bersinar</span>
              </h1>
              <p className="lead text-secondary mb-4 hero-description">PT Golden IB hadir sebagai mitra strategis untuk mendominasi ekosistem digital melalui inovasi berbasis data dan strategi iklan yang presisi.</p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <Button variant="warning" href="#services" size="lg" className="rounded-pill px-4 fw-bold btn-hero">
                  Eksplorasi Layanan
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Sisi Kanan: Gambar/Logo dengan Animasi Mengambang */}
          <Col lg={6} className="text-center order-1 order-lg-2 mb-4 mb-lg-0">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <motion.img
                src={logoGolden}
                alt="PT Golden IB Logo"
                className="img-fluid hero-logo"
                // Animasi mengambang (Floating Effect)
                animate={{ y: [0, -15, 0] }}
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
