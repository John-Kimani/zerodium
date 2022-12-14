import BlogPost from "../../components/blog/BlogPost";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/herosection/Herosection";
import Services from "../../components/services/Services";
import "./homepage.css";

const HomePage = () => {
  return (
    <main className="home__page">
      <HeroSection />
      <Services />
      <section className="blog_section">
        <div className="container container-fluid">
        <div className="row">
            <div className="col-md-12">
            <FeaturedBlog />
            </div>
          </div>
          <div className="row">
          <BlogPost />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
