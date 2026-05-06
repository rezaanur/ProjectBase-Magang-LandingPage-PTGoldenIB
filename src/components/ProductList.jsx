import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";

// Import Foto Produk
import kalinShoe from "../assets/pembersihSepatu.jpg";
import masterClean from "../assets/pembersihMesinCuci.jpg";

const productData = [
  {
    id: 1,
    name: "Kalin White Shoe Cleaner",
    category: "Shoe Care",
    price: "Rp 15.999",
    image: kalinShoe,
    rating: 5.0,
    desc: "Krim pembersih sepatu tanpa air untuk bahan kulit & canvas.",
    link: "https://www.tokopedia.com/sang-maha-raja-store-21/krim-pembersih-sepatu-putih-kalin-untuk-bahan-kulit-sneaker-canvas-tanpa-air-1731004193386824761",
  },
  {
    id: 2,
    name: "Master Clean Pembersih Mesin Cuci",
    category: "Home Care",
    price: "Rp 47.000",
    image: masterClean,
    rating: 5.0,
    desc: "Serbuk penghilang noda, bersih sampai bagian terdalam.",
    link: "https://www.tokopedia.com/sang-maha-raja-store-21/bisa-cod-kalin-master-clean-serbuk-cairan-pembersih-mesin-cuci-anti-bakteri-sterilisasi-tabung-baju-jadi-lebih-wangi-bersih-higienis-bebas-kuman-1734565199451948089",
  },
];

const ProductList = () => {
  return (
    <div id="products" className="py-5 bg-white">
      <Container>
        {/* Style Custom untuk Responsivitas Handphone */}
        <style>
          {`
            .btn-tokopedia {
              background-color: #03AC0E !important;
              border-color: #03AC0E !important;
              color: white !important;
              transition: all 0.3s ease;
            }
            .btn-tokopedia:hover {
              background-color: #028e0b !important;
              border-color: #028e0b !important;
              transform: translateY(-2px);
            }

            /* Pengaturan khusus layar handphone (Mobile) */
            @media (max-width: 576px) {
              .product-card {
                max-width: 290px; /* Membatasi lebar card agar tidak terlalu lebar di HP */
                margin: 0 auto; /* Menengahkan card */
              }
              .product-img-container {
                height: 180px !important; /* Mengecilkan tinggi gambar di HP */
              }
              .product-title {
                font-size: 1rem !important; /* Mengecilkan ukuran judul produk */
              }
              .product-price {
                font-size: 1.1rem !important; /* Mengecilkan ukuran teks harga */
              }
              .product-desc {
                font-size: 0.8rem !important; /* Mengecilkan teks deskripsi */
              }
              .btn-tokopedia {
                font-size: 0.85rem !important; /* Mengecilkan ukuran tombol */
                padding: 8px 12px !important;
              }
            }
          `}
        </style>

        <motion.div className="text-center mb-5" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="fw-bold">Produk Unggulan Kami</h2>
          <p className="text-secondary">Eksplorasi produk berkualitas hasil manajemen e-commerce PT Golden IB</p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {productData.map((product, index) => (
            /* xs={10} memastikan card tidak penuh 100% lebar layar hp, menyisakan jarak di kiri-kanan */
            <Col xs={10} sm={6} lg={4} key={product.id}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} whileHover={{ y: -10 }}>
                <Card className="product-card h-100 border-0 shadow-sm transition-all overflow-hidden">
                  <div className="position-relative overflow-hidden product-img-container" style={{ height: "250px" }}>
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="h-100">
                      <Card.Img variant="top" src={product.image} style={{ height: "100%", objectFit: "cover" }} />
                    </motion.div>
                    <Badge bg="success" className="position-absolute top-0 end-0 m-3 fw-bold">
                      {product.category}
                    </Badge>
                  </div>

                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-warning d-flex align-items-center">
                        <FaStar className="me-1" /> <span className="small fw-bold text-dark">{product.rating}</span>
                      </div>
                      <h5 className="product-price fw-bold text-success mb-0">{product.price}</h5>
                    </div>
                    <Card.Title className="product-title fw-bold mb-2" style={{ fontSize: "1.1rem" }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text className="product-desc text-secondary small mb-4">{product.desc}</Card.Text>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 btn-tokopedia" href={product.link} target="_blank">
                        <FaShoppingCart /> Beli di Tokopedia
                      </Button>
                    </motion.div>
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

export default ProductList;
