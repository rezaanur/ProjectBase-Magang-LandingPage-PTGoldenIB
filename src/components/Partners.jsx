import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const partnerData = [
  { name: "Mitra Fashion A", feedback: "Strategi ads dari Golden IB menaikkan ROAS kami hingga 80x!", owner: "Andi - CEO Fashion A" },
  { name: "Mitra Kuliner B", feedback: "Manajemen marketplace yang sangat rapi dan profesional.", owner: "Siti - Owner Kuliner B" },
  { name: "Mitra Tech C", feedback: "Konten TikTok-nya sangat kreatif dan mendatangkan banyak leads.", owner: "Budi - Marketing Tech C" },
];

const Partners = () => {
  return (
    <div id="partners" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Kepercayaan Mitra Kami</h2>
          <p className="text-secondary">Bukti nyata hasil kerja keras tim PT Golden IB</p>
        </div>
        <Row className="g-4">
          {partnerData.map((item, index) => (
            <Col md={4} key={index}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <Card.Body>
                    <FaQuoteLeft className="text-warning mb-3" size={30} />
                    <Card.Text className="fst-italic text-secondary mb-4">"{item.feedback}"</Card.Text>
                    <hr />
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    <small className="text-warning">{item.owner}</small>
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
