import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is this site about?",
    answer:
      "This site showcases beautifully designed tools and modern software landing pages that stand out for their quality, simplicity, and innovation.",
  },
  {
    question: "Do I need to sign up to use it?",
    answer:
      "No signup required. You can freely explore all the showcased products and get inspired.",
  },
  {
    question: "Is this a curated list or sponsored content?",
    answer:
      "It's fully curated — handpicked for design quality, usability, and uniqueness.",
  },
  //   {
  //     question: "Can I suggest a tool or product to feature?",
  //     answer:
  //       "Absolutely! We're always open to discovering new tools. Reach out via our contact section or social handles.",
  //   },
  {
    question: "Will you add more features in the future?",
    answer:
      "Yes! We're just getting started. Expect updates like collections, search filters, and user submissions soon.",
  },
  {
    question: "Is it free to use?",
    answer:
      "YES!! Completely FREE. We're building this platform to celebrate good design and help people find better tools.",
  },
];

const FAQ = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="What is this site about?"
      >
        {faqs.map((item, index) => (
          <AccordionItem value={item.question} key={index}>
            <AccordionTrigger className="cursor-pointer">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
