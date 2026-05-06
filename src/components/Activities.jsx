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
        {/* Style Custom untuk Responsivitas Activities */}
        <style>
          {`
            .activity-card-container {
              width: 100%;
            }

            @media (max-width: 576px) {
              .activity-section-title {
                font-size: 1.6rem !important; /* Judul lebih kecil di HP */
              }
              .activity-card-container {
                max-width: 290px; /* Mengecilkan kartu kegiatan hanya di HP */
                margin: 0 auto;
              }
              .activity-title {
                font-size: 1rem !important; /* Judul kartu lebih kecil */
              }
              .activity-info {
                font-size: 0.75rem !important; /* Info lokasi/waktu lebih kecil */
              }
              .activity-carousel-img {
                height: 150px !important; /* Foto lebih pendek di HP agar compact */
              }
            }
          `}
        </style>

        <motion.div className="text-center mb-5" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="fw-bold activity-section-title">Kegiatan Perusahaan</h2>
          <p className="text-secondary small">Sisi humanis dan kekompakan tim di balik layar</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Row className="g-4 justify-content-center">
            {activityData.map((act, index) => (
              /* xs={10} memastikan kartu tidak penuh 100% lebar layar di HP */
              <Col xs={10} md={6} lg={4} key={index} className="d-flex justify-content-center">
                <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }} className="activity-card-container position-relative overflow-hidden rounded-4 shadow-sm bg-white p-3 h-100">
                  {/* Slideshow Gambar Dokumentasi */}
                  <Carousel indicators={act.images.length > 1} controls={act.images.length > 1} interval={3000} className="mb-2 rounded-3 overflow-hidden">
                    {act.images.map((img, idx) => (
                      <Carousel.Item key={idx}>
                        <img className="d-block w-100 img-fluid activity-carousel-img" src={img} alt={`Slide ${idx}`} style={{ height: "180px", objectFit: "cover" }} />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <Badge bg="warning" className="mb-2 text-dark small">
                    {act.type}
                  </Badge>

                  <h5 className="fw-bold mb-1 activity-title">{act.title}</h5>
                  <p className="small text-secondary mb-0 activity-info">
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
