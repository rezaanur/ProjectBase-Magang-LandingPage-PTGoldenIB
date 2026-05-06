import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaAd, FaVideo, FaStore } from "react-icons/fa";

const servicesData = [
  {
    title: "Social Media Advertising",
    desc: "Strategi periklanan presisi melalui Facebook & Instagram Ads untuk membangun brand awareness.",
    icon: <FaAd size={40} className="text-warning mb-3" />,
  },
  {
    title: "Marketplace Optimization",
    desc: "Manajemen toko profesional di Shopee dan TikTok Shop untuk memaksimalkan performa penjualan.",
    icon: <FaStore size={40} className="text-warning mb-3" />,
  },
  {
    title: "Video & Content Marketing",
    desc: "Pemanfaatan ekosistem TikTok untuk menjangkau audiens melalui konten kreatif dan Live Shopping.",
    icon: <FaVideo size={40} className="text-warning mb-3" />,
  },
];

// Optimasi Animasi
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

const Services = () => {
  return (
    <Container id="services" className="py-5 mt-5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-5">
        <h2 className="fw-bold">Layanan Unggulan Kami</h2>
        <p className="text-secondary">Solusi pemasaran terintegrasi yang berfokus pada hasil nyata.</p>
      </motion.div>

      {/* Menambahkan justify-content-center agar kolom rata tengah */}
      <Row className="g-4 justify-content-center">
        {servicesData.map((service, index) => (
          <Col md={6} lg={4} xl={3} key={index}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="h-100" // Pastikan motion div mengambil tinggi penuh
            >
              <Card className="h-100 border-0 shadow-sm p-4 text-center">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  {service.icon}
                  <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-secondary small">{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
