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
        <style>
          {`
            .philosophy-card {
              width: 100%;
              transition: all 0.3s ease; /* Transisi halus untuk semua properti */
              cursor: pointer;
            }

            /* Efek Hover CSS */
            .philosophy-card:hover {
              background-color: #ffc107 !important; /* Berubah warna ke kuning warning */
              border-start-color: #212529 !important; /* Border samping berubah gelap saat di-hover */
              box-shadow: 0 8px 15px rgba(0,0,0,0.1) !important;
            }

            .philosophy-card:hover .philosophy-title {
              color: #212529 !important; /* Teks judul tetap gelap agar kontras dengan kuning */
            }

            .philosophy-card:hover .philosophy-text {
              color: #495057 !important; /* Teks deskripsi sedikit lebih tajam */
            }

            .about-description {
              text-align: justify;
              font-size: 1.1rem;
            }

            @media (max-width: 576px) {
              .about-section-title {
                font-size: 1.6rem !important;
                text-align: center;
              }
              .about-description {
                font-size: 0.9rem !important;
                margin-bottom: 2rem;
              }
              .philosophy-card {
                max-width: 290px;
                margin: 0 auto;
              }
              .philosophy-title {
                font-size: 1rem !important;
              }
              .philosophy-text {
                font-size: 0.8rem !important;
              }
            }
          `}
        </style>

        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="fw-bold mb-4 about-section-title">
                Filosofi <span className="text-warning">Golden Intan Berlian</span>
              </h2>
              <p className="text-secondary about-description">
                Didirikan pada tahun 2023, PT Golden IB menjembatani kesenjangan antara produk berkualitas dan target pasar yang tepat di era digital. Berawal dari pemahaman mendalam tentang perilaku konsumen modern yang kini beralih ke
                ekosistem online, kami membangun entitas ini sebagai solusi pemasaran terintegrasi yang berfokus pada hasil nyata.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <Row className="justify-content-center">
              {points.map((item, index) => (
                <Col xs={10} lg={12} key={index} className="mb-3 d-flex justify-content-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 15 }} /* Kartu sedikit bergeser ke kanan saat disorot */
                    className="p-3 bg-white rounded shadow-sm border-start border-warning border-4 philosophy-card"
                  >
                    <h6 className="fw-bold mb-1 philosophy-title">{item.title}</h6>
                    <p className="text-secondary small mb-0 philosophy-text">{item.desc}</p>
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
