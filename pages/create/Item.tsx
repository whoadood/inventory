import React from "react";
import NewItemForm from "../../components/NewItemForm";
import Section from "../../layout/Section";

const Item = () => {
  return (
    <div>
      <Section title="Create Item">
        <NewItemForm />
      </Section>
    </div>
  );
};

export default Item;
