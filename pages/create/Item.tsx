import React from "react";
import NewItemForm from "../../components/NewItemForm";
import Section from "../../layout/Section";

export default function Item() {
  return (
    <div>
      <Section title="Create Item">
        <NewItemForm />
      </Section>
    </div>
  );
}
