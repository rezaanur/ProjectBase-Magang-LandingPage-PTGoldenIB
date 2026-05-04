import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaAd, FaVideo, FaSearchDollar, FaStore } from "react-icons/fa";

const servicesData = [
  {
    title: "Social Media Advertising",
    desc: "Strategi periklanan presisi melalui Facebook & Instagram Ads untuk membangun brand awareness.",
    icon: <FaAd size={40} className="text-warning mb-3" />,
  },
  {
    title: "Video & Content Marketing",
    desc: "Pemanfaatan ekosistem TikTok untuk menjangkau audiens melalui konten kreatif dan Live Shopping.",
    icon: <FaVideo size={40} className="text-warning mb-3" />,
  },
  {
    title: "Search Engine Marketing",
    desc: "Optimasi jangkauan melalui Google Ads guna memastikan produk ditemukan konsumen yang tepat.",
    icon: <FaSearchDollar size={40} className="text-warning mb-3" />,
  },
  {
    title: "Marketplace Optimization",
    desc: "Manajemen toko profesional di Shopee dan TikTok Shop untuk memaksimalkan performa penjualan.",
    icon: <FaStore size={40} className="text-warning mb-3" />,
  },
];

const Services = () => {
  return (
    <Container id="services" className="py-5 mt-5">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-5">
        <h2 className="fw-bold">Layanan Unggulan Kami</h2>
        <p className="text-secondary">Solusi pemasaran terintegrasi yang berfokus pada hasil nyata.</p>
      </motion.div>

      <Row className="g-4">
        {servicesData.map((service, index) => (
          <Col md={6} lg={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05, translateY: -10 }} // Efek saat mouse mendekat
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }} // Animasi muncul bergantian
            >
              <Card className="h-100 border-0 shadow-sm p-4 text-center">
                <Card.Body>
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
