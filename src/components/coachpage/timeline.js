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
    <div className="flex flex-col w-10/12 m-auto items-center mt-5">
          <div class="container  mx-auto w-full h-full">
            <div class="relative  text-third-color wrap overflow-hidden p-10 h-full">
              <div
                class="border-2-2 absolute  timeline border-opacity-20 border-gray-700 h-full border"
                styles="left: 50%"
              ></div>

{/* left timeline */}
<div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-sm"></h1>
                </div>
                <div class="order-1 color shadow-xl bg-white rounded-xl z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                <div
                className="text-sm font-medium z-20 text-primary-color text-opacity-100  "
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteUnLigneDuTemps,
                }}
              />
  
                </div>
              </div>

              {/* right timeline */}
              <div class="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div class="order-1  w-12/12 md:w-5/12"></div>
                <div class="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white"></h1>
                </div>
                <div class="order-1 text-primary-color bg-white  z-20 rounded-xl shadow-xl md:w-5/12 px-6 py-4">
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
<div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg"></h1>
                </div>
                <div class="order-1 color shadow-xl bg-white rounded-xl z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                <div
                className="text-sm font-medium z-20 text-primary-color text-opacity-100  "
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteTroisLigneDuTemps,
                }}
              />
  
                </div>
              </div>

              {/* right timeline */}
              <div class="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div class="order-1  w-12/12 md:w-5/12"></div>
                <div class="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white"></h1>
                </div>
                <div class="order-1 text-primary-color bg-white  z-20 rounded-xl shadow-xl md:w-5/12 px-6 py-4">
                <div
                className="text-sm font-medium   text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteQuatreLigneDuTemps,
                }}
              />
                </div>
              </div>

              {/* left timeline */}
<div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg"></h1>
                </div>
                <div class="order-1 color shadow-xl bg-white rounded-xl z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                <div
                className="text-sm font-medium z-20 text-primary-color text-opacity-100  "
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteCinqLigneDuTemps,
                }}
              />
  
                </div>
              </div>

              {/* right timeline */}
              <div class="my-8  flex flex-col md:flex-row justify-between  items-center w-full md:right-timeline">
                <div class="order-1  w-12/12 md:w-5/12"></div>
                <div class="z-20 flex mb-5 md:mb-0  items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white"></h1>
                </div>
                <div class="order-1 text-primary-color bg-white  z-20 rounded-xl shadow-xl md:w-5/12 px-6 py-4">
                <div
                className="text-sm font-medium   text-primary-color text-opacity-100"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteSixLigneDuTemps,
                }}
              />
                </div>
              </div>
              
        {/* left timeline */}
        <div class="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex mb-10 md:mb-0 items-center order-1 bg-primary-color shadow-xl w-4 h-4 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg"></h1>
                </div>
                <div class="order-1 color shadow-xl bg-white rounded-xl z-20 text-white w-12/12 md:w-5/12 px-6 py-4">
                <div
                className="text-sm font-medium z-20 text-primary-color text-opacity-100  "
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
        </div>)
};

export default Timeline;
