import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react"; // Tambahkan useEffect
import { FaMoon, FaSun } from "react-icons/fa"; // Import ikon matahari & bulan
import logoImg from "../assets/logogoldenib.png";

const NavigationBar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // LOGIKA DARK MODE
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("isDarkMode");
      return savedMode !== null ? savedMode === "true" : true;
    }
    return true;
  });

  // Efek untuk mengubah atribut tema di tag <html> dan menyimpan pilihan pengguna
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }} animate={hidden ? "hidden" : "visible"} transition={{ duration: 0.35, ease: "easeInOut" }} style={{ position: "fixed", top: 0, width: "100%", zIndex: 1050 }}>
      <Navbar bg={isDarkMode ? "dark" : "white"} expand="lg" className="py-2 shadow-sm" style={{ fontSize: "1.2rem" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoImg} alt="Logo PT Golden IB" height="50" />
          </Navbar.Brand>

          <div className="d-flex align-items-center order-lg-last">
            {/* TOMBOL DARK MODE */}
            <Button
              variant={isDarkMode ? "outline-light" : "outline-dark"}
              className="rounded-circle me-2 p-2 d-flex align-items-center justify-content-center"
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{ width: "40px", height: "40px" }}
            >
              {isDarkMode ? <FaSun className="text-warning" /> : <FaMoon />}
            </Button>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4 align-items-center">
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link href="#services">Layanan</Nav.Link>
              <Nav.Link href="#about">Tentang Kami</Nav.Link>
              <Button variant="warning" className="rounded-pill px-4 fw-bold ms-lg-3 mt-3 mt-lg-0 text-white" target="_blank" href="https://wa.me/6289632107029?text=saya ingin berkonsultasi">
                Hubungi Kami
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default NavigationBar;
