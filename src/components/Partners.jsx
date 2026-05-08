import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaCheckCircle, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

// Import Logo Brand
import logoRyoki from "../assets/logoRyoki.jpg";
import logoGarasi from "../assets/logoGarasiAgan.jpg";
import logoOtsky from "../assets/logoOtsky.png";

const partnerData = [
  {
    name: "Ryoki Skincare",
    logo: logoRyoki,
    feedback: "Transformasi digital yang luar biasa. Strategi iklan yang presisi membantu produk kami menjangkau audiens yang tepat secara efektif.",
    owner: "Brand Partner - Beauty & Health",
    instagram: "https://www.instagram.com/ryokiofficial.id/",
    tiktok: "https://www.tiktok.com/@ryokijapanskin",
  },
  {
    name: "Garasi Agan",
    logo: logoGarasi,
    feedback: "Manajemen marketplace dan optimasi SEO produk yang sangat detail. Penjualan semir ban kami meningkat signifikan sejak bekerjasama.",
    owner: "Brand Partner - Automotive Care",
    instagram: "https://www.instagram.com/garasiagan.official/",
    tiktok: "https://www.tiktok.com/@garasi.agan.official",
  },
  {
    name: "Otsky Store",
    logo: logoOtsky,
    feedback: "Kreativitas dalam konten dan penguasaan algoritma sosial media yang jempolan. Sangat membantu brand fashion kami tetap relevan.",
    owner: "Brand Partner - Clothing & Apparel",
    instagram: "https://www.instagram.com/otsky_store/",
    tiktok: "https://www.tiktok.com/@otsky_official",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Partners = () => {
  return (
    <div id="partners" className="py-5 bg-white overflow-hidden">
      <Container>
        <style>
          {`
            /* Tampilan Desktop: Kartu melebar normal */
            .partner-card-container {
              width: 100%;
            }

            /* Tampilan Mobile: Kartu mengecil dan proporsional */
            @media (max-width: 576px) {
              .partner-section-title {
                font-size: 1.6rem !important;
              }
              .partner-card-container {
                max-width: 290px; /* Mengecilkan kartu testimoni hanya di HP */
                margin: 0 auto;
              }
              .partner-feedback {
                font-size: 0.85rem !important;
                min-height: auto !important;
              }
              .partner-info-name {
                font-size: 0.85rem !important;
              }
              .partner-info-owner {
                font-size: 0.7rem !important;
              }
            }
          `}
        </style>

        <motion.div className="text-center mb-5" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="fw-bold partner-section-title">Kepercayaan Mitra Kami</h2>
          <p className="text-secondary small">Berkolaborasi dengan brand-brand ternama untuk mencapai hasil maksimal</p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {partnerData.map((item, index) => (
            /* xs={10} memastikan kartu mungil di HP, md={4} lebar normal di desktop */
            <Col xs={10} md={4} key={index} className="d-flex justify-content-center">
              <motion.div className="partner-card-container" custom={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} whileHover={{ y: -10 }}>
                <Card className="h-100 border-0 shadow-sm p-3 position-relative overflow-hidden">
                  <Card.Body className="position-relative">
                    <FaQuoteLeft className="text-warning mb-2" size={18} />
                    <Card.Text className="fst-italic text-secondary mb-2 partner-feedback" style={{ minHeight: "80px" }}>
                      "{item.feedback}"
                    </Card.Text>
                    <hr className="my-3" />

                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <Image src={item.logo} roundedCircle width="45" height="45" className="border shadow-sm" style={{ objectFit: "cover" }} />
                      </div>

                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-0 d-flex align-items-center partner-info-name" style={{ fontSize: "0.9rem" }}>
                          {item.name} <FaCheckCircle className="ms-2 text-primary" size={12} />
                        </h6>
                        <small className="text-warning fw-medium partner-info-owner" style={{ fontSize: "0.75rem" }}>
                          {item.owner}
                        </small>
                      </div>
                      <div className="ms-2 d-flex align-items-center gap-2">
                        <a href={item.instagram} className="text-secondary p-1 d-flex align-items-center" target="_blank" rel="noopener noreferrer" title="Instagram">
                          <FaInstagram size={20} />
                        </a>
                        <a href={item.tiktok} className="text-secondary p-1 d-flex align-items-center" target="_blank" rel="noopener noreferrer" title="TikTok">
                          <SiTiktok size={20} />
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
