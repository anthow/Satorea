import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Timeline = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageAccompagnementIndividuel {
        texteUnLigneDuTemps
        texteDeuxLigneDuTemps
        texteTroisLigneDuTemps
        texteQuatreLigneDuTemps
        texteCinqLigneDuTemps
        texteSixLigneDuTemps
        texteSeptLigneDuTemps
      }
    }
  `);
  return (
    <section className="py-10 w-10/12 lg:w-8/12 m-auto text-center text-4xl font-black">
      <div class="container  mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute timeline border-opacity-20 border-gray-700 h-full border"
            styles="left: 50%"
          ></div>

          {/* left timeline */}
          <div class="mb-8 flex   justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1  w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color shadow-xl  w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium  text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteUnLigneDuTemps,
                }}
              />
            </div>
          </div>
          {/* right timeline */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color  shadow-xl w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium   text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteDeuxLigneDuTemps,
                }}
              />
            </div>
          </div>
          {/* left timeline */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color shadow-xl w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium  text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteTroisLigneDuTemps,
                }}
              />
            </div>
          </div>
          {/* right timeline */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color shadow-xl w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium  text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteQuatreLigneDuTemps,
                }}
              />
            </div>
          </div>
          {/* left timeline */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color shadow-xl w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium  text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteCinqLigneDuTemps,
                }}
              />
            </div>
          </div>
          {/* right timeline */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color shadow-xl w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium  text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteSixLigneDuTemps,
                }}
              />
            </div>
          </div>
          {/* left timeline */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-primary-color shadow-xl w-6 h-6 rounded-full"></div>
            <div class="order-1 color shadow-xl w-5/12 px-6 py-4">
              <div
                className="text-sm font-medium  text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteSeptLigneDuTemps,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
