import BlogPost from "../../components/blog/BlogPost";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import HorizontalBlogs from "../../components/blog/HorizontalBlogs";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/herosection/Herosection";
import Services from "../../components/services/Services";
import "./homepage.css";

const HomePage = () => {
  return (
    <main className="home__page">
      <HeroSection />
      <Services />
      <section className="blog_section" id="blogs">
        <div className="container container-fluid">
          <h3 className="section__title">Our Blog</h3>
          <div className="row mt-4">
            <div className="col-md-12">
              <FeaturedBlog />
            </div>
          </div>
          <div className="row">
            <BlogPost />
          </div>

          <div className="row mt-1">
          <div className="col-md-12 pt-2">
            <HorizontalBlogs />
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
