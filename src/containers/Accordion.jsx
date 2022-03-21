import React from "react";
import faqs from "../data/faqs.json";
import { Accordion, OptForm, Break } from "../components";

export default function AccordionContainer({ children }) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqs.map((faqsData) => (
        <Accordion.Item key={faqsData.id}>
          <Accordion.Header>{faqsData.header}</Accordion.Header>
          <Accordion.Body>{faqsData.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      {children}
    </Accordion>
  );
}
