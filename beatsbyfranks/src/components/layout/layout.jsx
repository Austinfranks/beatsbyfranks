import React from "react";

import styled from "styled-components";

const Styles = styled.div`
  .wrapper {
    height: 90vh;
    width: 100vw;
  }
`;

export default function Layout({ children, title }) {
  document.getElementsByTagName("title")[0].innerHTML = title;
  return (
    <Styles>
      <div className="wrapper">{children}</div>
    </Styles>
  );
}
