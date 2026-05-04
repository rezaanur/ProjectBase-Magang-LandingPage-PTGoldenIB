import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react"; // Tambahkan useEffect
import { FaMoon, FaSun } from "react-icons/fa"; // Import ikon matahari & bulan
import logoImg from "../assets/logogoldenib.png";

const NavigationBar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // LOGIKA DARK MODE
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk mengubah atribut tema di tag <html>
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.setAttribute("data-bs-theme", "dark");
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
    }
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
      <Navbar bg={isDarkMode ? "dark" : "white"} expand="lg" className="py-2 shadow-sm">
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Button variant="warning" className="rounded-pill px-4 fw-bold ms-lg-3 mt-3 mt-lg-0 text-white">
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
