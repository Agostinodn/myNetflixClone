import React from "react";
import jumboData from "../data/jumbo";
import { Jumbotron } from "../components";

export default function JumbotronContainer() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((data) => (
          <Jumbotron key={data.id} direction={data.direction}>
            <Jumbotron.Panel>
              <Jumbotron.Title>{data.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Panel>
            <Jumbotron.Panel>
              <Jumbotron.Image src={data.image} alt={data.alt} />
            </Jumbotron.Panel>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </>
  );
}
