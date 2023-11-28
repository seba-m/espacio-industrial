import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function FaqAccordion({ faqData }) {
  const [openAccordion, setOpenAccordion] = React.useState(
    faqData.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  const [openNestedAccordion, setOpenNestedAccordion] = React.useState(null);

  const handleOpenAccordion = (value) => {
    setOpenAccordion((prevOpenAccordion) => ({
      ...prevOpenAccordion,
      [value]: !prevOpenAccordion[value],
    }));
  };

  const handleOpenNestedAccordion = (nestedAccordionId) => {
    setOpenNestedAccordion((prevOpenNestedAccordion) =>
      prevOpenNestedAccordion === nestedAccordionId ? null : nestedAccordionId
    );
  };

  return (
    <div>
      {faqData.map((item) => (
        <Accordion key={item.id} open={openAccordion[item.id]} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            onClick={() => handleOpenAccordion(item.id)}
            className="p-4 text-base bg-[#023B6D] text-white hover:bg-[#024f93] hover:text-white sm:text-base md:text-base lg:text-lg xl:text-xl "
          >
            {item.question}
          </AccordionHeader>
          <AccordionBody>
            {item.answer && (
              <div>
                {item.answer.map((nestedItem) => (
                  <Accordion
                    key={nestedItem.id}
                    open={openNestedAccordion === nestedItem.id}
                    animate={CUSTOM_ANIMATION}
                  >
                    <AccordionHeader
                      onClick={() => handleOpenNestedAccordion(nestedItem.id)}
                      className="px-8 text-sm sm:px-8 sm:text-sm text-[#023B6D] hover:text-[#023B6D] md:text-base md:font-bold lg:text-lg lg:font-bold xl:text-xl xl:font-bold"
                    >
                      {nestedItem.subquestion}
                    </AccordionHeader>
                    <AccordionBody className="px-8">{nestedItem.response}</AccordionBody>
                  </Accordion>
                ))}
              </div>
            )}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
