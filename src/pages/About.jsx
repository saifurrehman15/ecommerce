import {
  CheckCircleFilled,
  SlackCircleFilled,
  StarFilled,
} from "@ant-design/icons";
import AppFooter from "./Footer";

function AppAbout() {
  return (
    <section className="container body-font mt-5">
      <div className="px-4 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-5xl font-medium title-font mb-4">
            Why Choose Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover the magic of GlowUp Cosmetics, where beauty meets
            innovation. Our carefully curated range of cosmetics is crafted with
            high-quality ingredients to bring out your natural glow.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 bg-indigo-500 rounded-full inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="aboutCard p-6 flex flex-col text-center items-center bg-gray-800 text-white rounded-lg shadow-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-500 mb-5">
              <StarFilled style={{ fontSize: 40 }} />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-medium mb-3">Dermatologist Tested</h2>
              <p className="leading-relaxed text-base">
                High-quality ingredients ensure our products are rigorously tested
                to meet dermatological standards, ensuring safe and effective use.
              </p>
            </div>
          </div>
          <div className="aboutCard p-6 flex flex-col text-center items-center bg-gray-800 text-white rounded-lg shadow-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-500 mb-5">
              <SlackCircleFilled style={{ fontSize: 40 }} />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-medium mb-3">Allergy Tested</h2>
              <p className="leading-relaxed text-base">
                Our products undergo thorough allergy testing to ensure they are
                safe for sensitive skin, minimizing the risk of allergic reactions.
              </p>
            </div>
          </div>
          <div className="aboutCard p-6 flex flex-col text-center items-center bg-gray-800 text-white rounded-lg shadow-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-500 mb-5">
              <CheckCircleFilled style={{ fontSize: 40 }} />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-medium mb-3">Non-comedogenic</h2>
              <p className="leading-relaxed text-base">
                Our products are formulated to avoid clogging pores, helping you
                maintain clear and healthy skin while enjoying our cosmetics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppAbout;
