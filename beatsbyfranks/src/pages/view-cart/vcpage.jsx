import React from "react";
import Layout from "../../components/layout/layout";
import Cart from "../../components/cart/cart";

import styled from "styled-components";

const Styles = styled.div``;

export default function ViewCartPage() {
  return (
    <Layout title="Cart">
      <Styles>
        <Cart stripeToken="pk_test_Ts5zGclKjljrm2ESKSTJlQVi00gF3Jvptc" />
      </Styles>
    </Layout>
  );
}
