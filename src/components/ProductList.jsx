import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaStore } from "react-icons/fa";

// Import Aset Gambar
import kerakImg from "../assets/pembersihKerakKeramik.jpg";
import mesinCuciImg from "../assets/pembersihMesinCuci.jpg";
import serumRyokiImg from "../assets/serumfaceRyoki.jpg";
import facewashRyokiImg from "../assets/facewashRyoki.jpg";
import bodyLotionRyokiImg from "../assets/bodylotionRyoki.jpg";
import hairtonicRyokiImg from "../assets/hairtonicRyoki.jpg";
import daunInsulinTeaImg from "../assets/daunInsulinTea.jpg";
import rimpangTeaImg from "../assets/rimpangTea.jpeg";
import spearmintTeaImg from "../assets/spreamintTea.jpeg";
import smartwatchT800Img from "../assets/smartwatchT800.jpg";
import semirBanImg from "../assets/semirBanGarasiAgan.jpg";
import shampoUbanImg from "../assets/shampouban.jpg";

const productData = [
  {
    title: "Kalin Cairan Pembersih Kerak Keramik",
    category: "Home Care",
    price: "Rp42.000",
    rating: 5,
    img: kerakImg,
    linkShopee: "https://shopee.co.id/product/1545814753/50859033574",
    linkTokopedia: "",
  },
  {
    title: "KALIN Master Clean Pembersih Mesin Cuci",
    category: "Home Care",
    price: "Rp52.000",
    rating: 4.6,
    img: mesinCuciImg,
    linkShopee: "https://shopee.co.id/product/1163334131/27284384564",
    linkTokopedia: "https://www.tokopedia.com/sang-maha-raja-store-21/bisa-cod-kalin-master-clean-serbuk-cairan-pembersih-mesin-cuci-anti-bakteri-sterilisasi-tabung-baju-jadi-lebih-wangi-bersih-higienis-bebas-kuman-1734531675522565177",
  },
  {
    title: "RYOKI - Gold Whitening Serum Japan 15ML",
    category: "Skincare",
    price: "Rp60.000",
    rating: 4.9,
    img: serumRyokiImg,
    linkShopee: "https://shopee.co.id/product/286791792/22783859683",
    linkTokopedia: "https://www.tokopedia.com/ryoki-japan-skincare-268/combo-serum-ryoki-japan-skincare-fish-collagen-3pcs-hitam-mencerahkan-pencerah-wajah-1729564116319766364",
  },
  {
    title: "RYOKI - Facial Wash Japan 100ML",
    category: "Skincare",
    price: "Rp50.000",
    rating: 5,
    img: facewashRyokiImg,
    linkShopee: "https://shopee.co.id/product/286791792/22383743914",
    linkTokopedia: "https://www.tokopedia.com/ryoki-japan-skincare-268/ryoki-facial-wash-japan-sabun-cuci-muka-double-cleansing-100ml-1729648073258075996",
  },
  {
    title: "RYOKI - Body Lotion Whitening & Moisturizing 100gr",
    category: "Skincare",
    price: "Rp76.667",
    rating: 5,
    img: bodyLotionRyokiImg,
    linkShopee: "https://shopee.co.id/product/286791792/28007462571",
    linkTokopedia: "https://www.tokopedia.com/ryoki-japan-skincare-268/ryoki-japan-skincare-hand-and-body-lotion-serum-mencerahkan-dan-melembabkan-1729751410309367644",
  },
  {
    title: "RYOKI - Hairtonic Gingseng Korea 150ML",
    category: "Hair Care",
    price: "Rp182.422",
    rating: 4.9,
    img: hairtonicRyokiImg,
    linkShopee: "https://shopee.co.id/product/286791792/22683862322",
    linkTokopedia: "https://www.tokopedia.com/ryoki-japan-skincare-268/ryoki-hairtonic-gingseng-korea-with-vitamin-b5-150ml-cod-1735242780548564828",
  },
  {
    title: "Yurizumi - Shampo Penghilang Uban Permanen 300ml",
    category: "Hair Care",
    price: "Rp64.000",
    rating: 4.5,
    img: shampoUbanImg,
    linkShopee: "https://shopee.co.id/product/1163334131/27877557600",
    linkTokopedia: "https://www.tokopedia.com/sang-maha-raja-store-21/sampo-shampoo-shampo-sampho-penghitam-rambut-uban-menghitamkan-rambut-beruban-shampo-penghitam-rambut-uban-permanen-100-ampuh-original-cod-1731259524289430585",
  },
  {
    title: "Sorrel Tea Daun Insulin Premium 100 Gram",
    category: "Health",
    price: "Rp27.000",
    rating: 5,
    img: daunInsulinTeaImg,
    linkShopee: "https://shopee.co.id/product/1545814753/53358115543",
    linkTokopedia: "https://www.tokopedia.com/sang-maha-raja-store-21/sorrel-tea-daun-insulin-teh-herbal-tradisional-indonesia-natural-higienis-1734944176048014393",
  },
  {
    title: "Sorrel Rimpang Tea 100gr",
    category: "Health",
    price: "Rp27.000",
    rating: 4.5,
    img: rimpangTeaImg,
    linkShopee: "https://shopee.co.id/product/1545814753/54108110999",
    linkTokopedia: "https://www.tokopedia.com/sang-maha-raja-store-21/sorrel-herbal-rimpang-teh-jahe-kunyit-temulawak-minuman-sehat-menenangkan-1734943565974897721",
  },
  {
    title: "Sorrel Tea Spearmint 30 Tea Bag",
    category: "Health",
    price: "Rp27.000",
    rating: 5,
    img: spearmintTeaImg,
    linkShopee: "https://shopee.co.id/product/1545814753/55608110410",
    linkTokopedia: "https://www.tokopedia.com/sang-maha-raja-store-21/sorrel-tea-spearmint-teh-herbal-organik-clean-label-aroma-segar-menenangkan-1734943844561486905",
  },
  {
    title: "Smartwatch Waterproof T800 Ultra Series 8",
    category: "Electronics",
    price: "Rp113.000",
    rating: 5,
    img: smartwatchT800Img,
    linkShopee: "https://shopee.co.id/product/1163334131/45355619573",
    linkTokopedia: "",
  },
  {
    title: "Semir Ban Premium Garasi GR Wet Look",
    category: "Automotive",
    price: "Rp37.000",
    rating: 5,
    img: semirBanImg,
    linkShopee: "https://shopee.co.id/product/1545814753/46956390064",
    linkTokopedia: "https://www.tokopedia.com/sang-maha-raja-store-21/promo-kosentrat-semir-premium-semir-ban-anti-debu-semir-jok-semir-dashboard-jok-kulit-bisa-cod-1734397240631198777",
  },
];

const ProductList = () => {
  return (
    <div id="products" className="py-5">
      <Container>
        <style>{`
          .product-card { transition: all 0.3s ease; border-radius: 20px !important; overflow: hidden; }
          .product-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
          
          /* Warna bintang jadi putih di mode gelap */
          [data-bs-theme="dark"] .star-rating { color: #ffc107 !important; }
          [data-bs-theme="light"] .star-rating { color: #ffc107 !important; }

          @media (max-width: 576px) {
            .product-card { max-width: 280px; margin: 0 auto; }
          }
        `}</style>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Produk Unggulan</h2>
          <p className="text-secondary">Kualitas terbaik yang telah dipercaya ribuan pelanggan</p>
        </div>

        <Row className="g-3 g-md-4">
          {" "}
          {/* g-3 untuk jarak lebih rapat di HP agar tidak terlalu penuh */}
          {productData.map((prod, index) => (
            // xs={6} artinya 2 kolom di HP (Extra Small)
            // md={4} artinya 3 kolom di Tablet
            // lg={3} artinya 4 kolom di Laptop/Desktop
            <Col xs={6} md={4} lg={3} key={index}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-100 border-0 shadow-sm product-card">
                  <div className="position-relative">
                    {/* Tinggi gambar dikurangi sedikit untuk HP agar tidak terlalu panjang */}
                    <Card.Img variant="top" src={prod.img} className="product-img" style={{ height: "180px", objectFit: "cover" }} />
                    <Badge bg="warning" className="position-absolute top-0 end-0 m-2 text-dark" style={{ fontSize: "0.7rem" }}>
                      {prod.category}
                    </Badge>
                  </div>
                  <Card.Body className="p-2 p-md-3">
                    {" "}
                    {/* Padding lebih kecil di HP */}
                    <div className="d-flex align-items-center star-rating mb-1">
                      {Array.from({ length: Math.floor(prod.rating) }).map((_, i) => (
                        <FaStar key={`full-${i}`} size={10} className="me-1" />
                      ))}
                      {prod.rating % 1 !== 0 && <FaStarHalfAlt key="half" size={10} className="me-1" />}
                      {Array.from({ length: 5 - Math.ceil(prod.rating) }).map((_, i) => (
                        <FaRegStar key={`empty-${i}`} size={10} className="me-1" style={{ color: "#e4e5e9" }} />
                      ))}
                      <small className="text-muted" style={{ fontSize: "0.72rem" }}>
                        {prod.rating.toFixed(1)}
                      </small>
                    </div>
                    {/* Gunakan class 'text-truncate' atau batasi tinggi judul agar rapi */}
                    <Card.Title className="fw-bold mb-1" style={{ fontSize: "0.9rem" }}>
                      {prod.title}
                    </Card.Title>
                    <h6 className="text-warning fw-bold mb-2" style={{ fontSize: "0.85rem" }}>
                      {prod.price}
                    </h6>
                    <div className="d-grid gap-1">
                      <Button variant="outline-danger" size="sm" href={prod.linkShopee} target="_blank" className="rounded-pill py-1" style={{ fontSize: "0.75rem" }}>
                        <FaShoppingBag /> Shopee
                      </Button>
                      <Button variant="outline-success" size="sm" href={prod.linkTokopedia} target="_blank" className="rounded-pill py-1" style={{ fontSize: "0.75rem" }}>
                        <FaStore /> Tokopedia
                      </Button>
                    </div>
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
