import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

const activityData = [
  { title: "Annual Gathering", loc: "Bandar Lampung", time: "Januari 2026", type: "Internal" },
  { title: "Golden IB Berbagi", loc: "Way Halim", time: "Ramadhan 2026", type: "Sosial" },
  { title: "Workshop Digital Ads", loc: "Kantor Pusat", time: "Maret 2026", type: "Edukasi" },
];

const Activities = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Kegiatan Perusahaan</h2>
          <p className="text-secondary">Sisi humanis dan kekompakan tim di balik layar[cite: 1, 3]</p>
        </div>
        <Row className="g-4">
          {activityData.map((act, index) => (
            <Col md={4} key={index}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="position-relative overflow-hidden rounded-4 shadow-sm bg-white p-3">
                {/* Placeholder Gambar Dokumentasi */}
                <div className="bg-secondary rounded-3 mb-3 d-flex align-items-center justify-content-center text-white" style={{ height: "200px" }}>
                  Foto Dokumentasi
                </div>
                <Badge bg="warning" className="mb-2 text-dark">
                  {act.type}
                </Badge>
                <h5 className="fw-bold mb-1">{act.title}</h5>
                <p className="small text-secondary mb-0">
                  {act.loc} | {act.time}[cite: 1]
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Activities;
