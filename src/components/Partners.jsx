import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

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
  },
  {
    name: "Garasi Agan",
    logo: logoGarasi,
    feedback: "Manajemen marketplace dan optimasi SEO produk yang sangat detail. Penjualan semir ban kami meningkat signifikan sejak bekerjasama.",
    owner: "Brand Partner - Automotive Care",
  },
  {
    name: "Otsky Store",
    logo: logoOtsky,
    feedback: "Kreativitas dalam konten dan penguasaan algoritma sosial media yang jempolan. Sangat membantu brand fashion kami tetap relevan.",
    owner: "Brand Partner - Clothing & Apparel",
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
        <motion.div className="text-center mb-5" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="fw-bold">Kepercayaan Mitra Kami</h2>
          <p className="text-secondary">Berkolaborasi dengan brand-brand ternama untuk mencapai hasil maksimal</p>
        </motion.div>

        <Row className="g-4">
          {partnerData.map((item, index) => (
            <Col md={4} key={index}>
              <motion.div custom={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} whileHover={{ y: -10 }}>
                <Card className="h-100 border-0 shadow-sm p-4 position-relative overflow-hidden">
                  <Card.Body className="position-relative">
                    <FaQuoteLeft className="text-warning mb-3" size={30} />
                    <Card.Text className="fst-italic text-secondary mb-4" style={{ minHeight: "100px" }}>
                      "{item.feedback}"
                    </Card.Text>
                    <hr className="my-3" />

                    <div className="d-flex align-items-center">
                      {/* Logo Brand Lingkaran */}
                      <div className="me-3">
                        <Image src={item.logo} roundedCircle width="50" height="50" className="border shadow-sm" style={{ objectFit: "cover" }} />
                      </div>

                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-0 d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
                          {item.name} <FaCheckCircle className="ms-2 text-primary" size={12} />
                        </h6>
                        <small className="text-warning fw-medium" style={{ fontSize: "0.75rem" }}>
                          {item.owner}
                        </small>
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
