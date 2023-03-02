import { KStoreTitle } from "../components/global/userinterface/KStoreTitle"
import { LargeImageContainer } from "../components/global/userinterface/LargeImageContainer";
import Footer from "../components/global/footer_elements/Footer";
import JoinMailingList from '../components/global/footer_elements/JoinMailingList';
import FAQ from '../components/global/footer_elements/faq/FAQ';
import ContactMe from '../components/global/footer_elements/ContactMe';

const MeetKendallScreen = () => {

  const sectionTitle = "meet kendall"
  return (
  <div className="w-full bg-[#111] mt-4 pt-6 pb-5">
      <section className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12 min-h-[95%] ">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
        </h2>
        <div className="items-center justify-start mt-12 align-top grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col w-full mx-12 ">
            <p className="w-10/12 mt-12 mb-8 text-xl font-medium text-white font-quicksand">Kendall McCollum is an artist, maker, quilter and career manageer who lives in Simcoe County, Barrie, Ontario, Canada.&nbsp; 🇨🇦</p>
            <p className="w-10/12 text-xl font-medium text-white font-quicksand">Originally from Los Angeles, California, Kendall learned quilting from her grandmothers, but she isn't your grandma's typical quilter. Known for bold color choices, daring textures and bright fabric choices, Kendall works every day to move the art of foundation paper piecing forward.</p>
                  <a
        href="https://www.instagram.com/KhendylQuilts/"
        target="_blank"
        rel="noreferrer"
        className="mt-8 mb-12 text-xl font-medium text-white hover:font-bold font-quicksand hover:text-kcyan"
      >
       <i className="mr-4 text-3xl font-extrabold fab fa-instagram"></i>
        Follow on Instagram (@KhendylQuilts)
      </a>

          </div>
          <div className="flex lg:pr-12 xl:pr-0">
            <LargeImageContainer contents={
                <img
                  src={"/assets/image_portrait_kendall.jpg"}
                  className="object-cover w-full h-full object-top-middle"
                  alt="Kendall in downtown Barrie"
                />
              } layoutPrefs={"mx-12 lg:mx-0 w-10/12 lg:w-full lg:h-full shadow-kyellow4 hover:shadow-kcyan4 "} />
          </div>
        </div>


      </section>
                <JoinMailingList />
          <FAQ />
          <ContactMe />
        <Footer />
      </div>  )
}

export default MeetKendallScreen