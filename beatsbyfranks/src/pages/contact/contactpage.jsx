import React from "react";
import Layout from "../../components/layout/layout";

import styled from "styled-components";

const Styles = styled.div`
  .mainbox {
    font-size: 2.4em;
    text-align: center;
    display: grid;
  }
  .subbox {
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-items: center;
    padding: 10px;
  }
`;

export default function ContactPage() {
  return (
    <Layout title="Contact">
      <Styles>
        <div className="mainbox">
          <h1>Contact</h1>
          <div className="subbox">
            Email me at youngbeethoven7@gmail.com for questions on exclusive
            pricing and custom beats
          </div>
        </div>
      </Styles>
    </Layout>
  );
}
