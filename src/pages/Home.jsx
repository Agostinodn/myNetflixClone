import React from "react";
import {
  FooterContainer,
  JumbotronContainer,
  AccordionContainer,
  HeaderContainer,
} from "../containers";
import { Feature, OptForm } from "../components";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        </Feature>

        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />

      <AccordionContainer>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </AccordionContainer>

      <FooterContainer />
    </>
  );
}
