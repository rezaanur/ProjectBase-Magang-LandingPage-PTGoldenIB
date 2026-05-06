import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Komponen Card (Shape tetap lingkaran sesuai permintaan)
const TeamCard = ({ name, role, delay }) => (
  <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: delay }} className="text-center position-relative" style={{ zIndex: 2 }}>
    <div className="bg-warning rounded-circle mx-auto mb-2 mt-2 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm" style={{ width: "70px", height: "70px", fontSize: "1.1rem" }}>
      {name.charAt(0)}
    </div>
    <h6 className="fw-bold mb-0" style={{ fontSize: "0.85rem" }}>
      {name}
    </h6>
    <p className="text-warning small mb-0" style={{ fontSize: "0.7rem" }}>
      {role}
    </p>
  </motion.div>
);

const Team = () => {
  // Komponen Garis Vertikal Pendek
  const VerticalLine = () => (
    <div className="d-flex justify-content-center">
      <div className="bg-warning" style={{ width: "2px", height: "25px" }}></div>
    </div>
  );

  return (
    <Container className="py-5 bg-light rounded-4 my-5 overflow-hidden">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Animasi hanya berjalan sekali saat di-scroll
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-5">
          <h2 className="fw-bold">Struktur Organisasi</h2>
          <p className="text-secondary small ls-2 text-uppercase">PT GOLDEN IB</p>
        </div>
      </motion.div>

      {/* LEVEL 1: CEO */}
      <Row className="justify-content-center mb-2">
        <Col xs="auto">
          <TeamCard name="Moch Rifky Berlian" role="CEO" delay={0.1} />
        </Col>
      </Row>

      <VerticalLine />

      {/* LEVEL 2: HRD */}
      <Row className="justify-content-center m-2">
        <Col xs="auto">
          <TeamCard name="Indra Kurniawan" role="HRD" delay={0.2} />
        </Col>
      </Row>

      {/* GARIS CABANG UTAMA (Horizontal) */}
      <div className="d-none d-md-block position-relative mx-auto" style={{ width: "75%", height: "25px" }}>
        <div className="position-absolute top-0 start-50 translate-middle-x bg-warning" style={{ width: "2px", height: "100%" }}></div>
        <div className="position-absolute bottom-0 start-0 bg-warning" style={{ width: "100%", height: "2px" }}></div>
      </div>

      {/* LEVEL 3: Divisi Utama[cite: 3] */}
      <Row className="justify-content-center mt-0 g-2 ">
        {/* Garis vertikal kecil untuk masing-masing divisi */}
        {["FINANCE", "SOSCOM", "MARKETPLACE", "GUDANG"].map((_, i) => (
          <Col md={3} xs={6} key={i} className="d-flex flex-column align-items-center">
            <div className="d-none d-md-block bg-warning" style={{ width: "2px", height: "15px" }}></div>
            {i === 0 && <TeamCard name="Dian Suriya Intan" role="DIV. FINANCE" delay={0.3} />}
            {i === 1 && <TeamCard name="M Surya Zamzamie" role="DIV. SOSCOM" delay={0.4} />}
            {i === 2 && <TeamCard name="Maulana Golden R" role="DIV. MARKETPLACE" delay={0.5} />}
            {i === 3 && <TeamCard name="Rendy" role="DIV. GUDANG" delay={0.6} />}
          </Col>
        ))}
      </Row>

      {/* LEVEL 4: Staff & Admin[cite: 3] */}
      <Row className="justify-content-center mt-2 g-2">
        <Col md={3} className="d-none d-md-block"></Col>

        {/* Jalur Soscom Staff[cite: 3] */}
        <Col md={3} xs={6} className="d-flex flex-column align-items-center mt-2">
          <div className="bg-warning" style={{ width: "2px", height: "15px" }}></div>
          <TeamCard name="Pelangi Fortuna R" role="ADMIN" delay={0.7} />
          <div className="bg-warning" style={{ width: "2px", height: "15px" }}></div>
          <TeamCard name="Ibnu Fadil Ar rizal" role="CRM" delay={0.8} />
        </Col>

        {/* Jalur Marketplace Staff[cite: 3] */}
        <Col md={3} xs={6} className="d-flex flex-column align-items-center">
          <div className="bg-warning" style={{ width: "2px", height: "15px" }}></div>
          <TeamCard name="Azka Amalina" role="ADMIN" delay={0.7} />
          <div className="bg-warning" style={{ width: "2px", height: "15px" }}></div>
          <TeamCard name="Nur Rahman R" role="CONTENT CREATOR" delay={0.8} />
        </Col>

        <Col md={3} className="d-none d-md-block"></Col>
      </Row>
    </Container>
  );
};

export default Team;
