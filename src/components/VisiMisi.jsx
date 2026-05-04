import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGem, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

const VisionMission = () => {
  const missions = [
    {
      icon: <FaRocket className="text-warning" />,
      text: "Akselerasi Pertumbuhan Multi-Platform melalui optimasi strategis di Facebook, TikTok, dan Google.",
    },
    {
      icon: <FaChartLine className="text-warning" />,
      text: "Inovasi Berbasis Data untuk memastikan setiap investasi iklan memberikan nilai ROI maksimal.",
    },
    {
      icon: <FaUsers className="text-warning" />,
      text: "Membangun Ekosistem E-Commerce yang tangguh dan adaptif terhadap perubahan perilaku konsumen.",
    },
    {
      icon: <FaGem className="text-warning" />,
      text: "Integritas dan Kualitas Pelayanan dengan menjunjung tinggi profesionalisme dalam setiap kemitraan.",
    },
  ];

  return (
    <div className="py-5 bg-white">
      <Container>
        <Row className="gy-5 align-items-center">
          {/* Bagian VISI - Sisi Kiri */}
          <Col lg={5}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h6 className="text-warning fw-bold text-uppercase mb-2">Visi Kami</h6>
              <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                Menjadi Standar Emas <br /> Pemasaran Digital
              </h2>
              <p className="lead text-secondary border-start border-warning border-4 ps-4 py-2" style={{ textAlign: "justify" }}>
                "Menjadi perusahaan pemasaran digital dan e-commerce paling terpercaya di Indonesia, dengan mentransformasi potensi bisnis menjadi berlian yang bersinar melalui inovasi teknologi."
              </p>
            </motion.div>
          </Col>

          {/* Bagian MISI - Sisi Kanan */}
          <Col lg={7}>
            <Row className="g-4">
              {missions.map((misi, index) => (
                <Col md={6} key={index}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                    <Card className="h-100 border-0 shadow-sm hover-shadow transition">
                      <Card.Body className="d-flex align-items-start p-4">
                        <div className="fs-3 me-3">{misi.icon}</div>
                        <p className="small text-secondary mb-0">{misi.text}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VisionMission;
