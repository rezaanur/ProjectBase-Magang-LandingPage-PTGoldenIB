import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Philosophy = () => {
  const points = [
    { title: "Kejayaan", desc: "Membawa kemakmuran bagi perusahaan dan mitra bisnis." },
    { title: "Ketangguhan", desc: "Mentalitas kuat dalam menghadapi persaingan digital yang ketat." },
    { title: "Akurasi Data", desc: "Strategi iklan dilakukan dengan perhitungan data yang presisi." },
    { title: "Prestise", desc: "Memberikan hasil akhir yang mengkilap dan memuaskan bagi konsumen dan mitra bisnis." },
    { title: "Multifaset", desc: "kemampuan perusahaan untuk bersinar di berbagai platform sosial media." },
  ];

  return (
    <div id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="fw-bold mb-4">
                Filosofi <span className="text-warning">Golden Intan Berlian</span>
              </h2>
              <p className="text-secondary lead" style={{ textAlign: "justify" }}>
                Didirikan pada tahun 2023, PT Golden IB menjembatani kesenjangan antara produk berkualitas dan target pasar yang tepat di era digital. Berawal dari pemahaman mendalam tentang perilaku konsumen modern yang kini beralih ke
                ekosistem online, kami membangun entitas ini sebagai solusi pemasaran terintegrasi yang berfokus pada hasil nyata.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <Row>
              {points.map((item, index) => (
                <Col xs={12} key={index} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="p-3 bg-white rounded shadow-sm border-start border-warning border-4"
                  >
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="text-secondary small mb-0">{item.desc}</p>
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

export default Philosophy;
