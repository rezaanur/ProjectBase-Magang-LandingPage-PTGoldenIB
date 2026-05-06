import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGem, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

const VisionMission = () => {
  const missions = [
    {
      icon: <FaRocket className="mission-icon-svg" />,
      text: "Akselerasi Pertumbuhan Multi-Platform melalui optimasi strategis di Facebook, TikTok, dan Google.",
    },
    {
      icon: <FaChartLine className="mission-icon-svg" />,
      text: "Inovasi Berbasis Data untuk memastikan setiap investasi iklan memberikan nilai ROI maksimal.",
    },
    {
      icon: <FaUsers className="mission-icon-svg" />,
      text: "Membangun Ekosistem E-Commerce yang tangguh dan adaptif terhadap perubahan perilaku konsumen.",
    },
    {
      icon: <FaGem className="mission-icon-svg" />,
      text: "Integritas dan Kualitas Pelayanan dengan menjunjung tinggi profesionalisme dalam setiap kemitraan.",
    },
  ];

  return (
    <div className="py-5 bg-white">
      <Container>
        <style>
          {`
            .mission-card {
              width: 100%;
              transition: all 0.3s ease;
              background: #fff;
              border-radius: 15px !important;
            }
            
            /* Efek Hover CSS untuk Card */
            .mission-card:hover {
              background-color: #ffc107 !important; /* Berubah jadi kuning warning */
              box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            }

            .mission-icon-svg {
              color: #ffc107; /* Warna awal ikon */
              transition: all 0.3s ease;
            }

            /* Efek Hover untuk teks dan ikon di dalam card */
            .mission-card:hover .mission-text {
              color: #fff !important; /* Teks jadi putih saat di-hover */
            }

            .mission-card:hover .mission-icon-svg {
              color: #fff !important; /* Ikon jadi putih saat di-hover */
              transform: scale(1.1);
            }
            
            .vision-description {
              text-align: justify;
            }

            @media (max-width: 576px) {
              .vision-title {
                font-size: 1.8rem !important;
                text-align: center;
              }
              .vision-subtitle {
                text-align: center;
                display: block;
              }
              .vision-description {
                font-size: 0.95rem !important;
                padding-left: 1.5rem !important;
                margin-bottom: 2rem;
              }
              .mission-card {
                max-width: 280px;
                margin: 0 auto;
              }
              .mission-icon {
                font-size: 1.5rem !important;
              }
              .mission-text {
                font-size: 0.75rem !important;
              }
            }
          `}
        </style>

        <Row className="gy-5 align-items-center">
          {/* Bagian VISI - Sisi Kiri */}
          <Col lg={5}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h6 className="text-warning fw-bold text-uppercase mb-2 vision-subtitle">Visi Kami</h6>
              <h2 className="fw-bold mb-4 vision-title" style={{ fontSize: "2.5rem" }}>
                Menjadi Standar Emas <br /> Pemasaran Digital
              </h2>
              <p className="lead text-secondary border-start border-warning border-4 ps-4 py-2 vision-description">
                "Menjadi perusahaan pemasaran digital dan e-commerce paling terpercaya di Indonesia, dengan mentransformasi potensi bisnis menjadi berlian yang bersinar melalui inovasi teknologi."
              </p>
            </motion.div>
          </Col>

          {/* Bagian MISI - Sisi Kanan */}
          <Col lg={7}>
            <Row className="g-4 justify-content-center">
              {missions.map((misi, index) => (
                <Col xs={10} md={6} key={index} className="d-flex justify-content-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }} /* Efek Framer Motion mengangkat ke atas saat disorot */
                    className="w-100"
                  >
                    <Card className="h-100 border-0 shadow-sm mission-card">
                      <Card.Body className="d-flex align-items-start p-4">
                        <div className="fs-3 me-3 mission-icon">{misi.icon}</div>
                        <p className="small text-secondary mb-0 mission-text transition">{misi.text}</p>
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
