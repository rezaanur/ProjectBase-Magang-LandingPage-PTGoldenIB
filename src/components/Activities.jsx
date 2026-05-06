import { Container, Row, Col, Badge, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

// Import Aset Foto
import bukber1 from "../assets/bukber1.jpg";
import bukber2 from "../assets/bukber2.jpg";
import bukber3 from "../assets/bukber3.jpg";
import pahawang1 from "../assets/kepahawang.jpg";
import pahawang2 from "../assets/kepahawang2.jpg";
import pahawang3 from "../assets/kepahawang3.jpg";
import kalianda1 from "../assets/pantaiKalianda1.JPG";
import kalianda2 from "../assets/pantaiKalianda2.JPG";

const activityData = [
  {
    title: "Family Gathering",
    loc: "Pulau Pahawang",
    time: "September 2024",
    type: "Internal",
    images: [pahawang1, pahawang2, pahawang3],
  },
  {
    title: "Momen Bukber",
    loc: "Bandar Lampung",
    time: "Ramadhan 1447 H",
    type: "Sosial",
    images: [bukber1, bukber2, bukber3],
  },
  {
    title: "Employee Awarding",
    loc: "Pantai Kalianda",
    time: "Januari 2026",
    type: "Internal",
    images: [kalianda1, kalianda2],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Activities = () => {
  return (
    <div className="py-5 bg-light overflow-hidden">
      <Container>
        <motion.div className="text-center mb-5" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="fw-bold">Kegiatan Perusahaan</h2>
          <p className="text-secondary">Sisi humanis dan kekompakan tim di balik layar</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Row className="g-4">
            {activityData.map((act, index) => (
              <Col md={4} key={index}>
                <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }} className="position-relative overflow-hidden rounded-4 shadow-sm bg-white p-3 h-100">
                  {/* Slideshow Gambar Dokumentasi */}
                  <Carousel indicators={act.images.length > 1} controls={act.images.length > 1} interval={3000} className="mb-3 rounded-3 overflow-hidden">
                    {act.images.map((img, idx) => (
                      <Carousel.Item key={idx}>
                        <img className="d-block w-100" src={img} alt={`Slide ${idx}`} style={{ height: "200px", objectFit: "cover" }} />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <Badge bg="warning" className="mb-2 text-dark">
                    {act.type}
                  </Badge>

                  <h5 className="fw-bold mb-1">{act.title}</h5>
                  <p className="small text-secondary mb-0">
                    {act.loc} | {act.time}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Activities;
