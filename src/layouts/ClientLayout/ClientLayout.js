import React, { useEffect } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useTable } from "../../hooks";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  const { isExistTable } = useTable();
  const { tableNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const exist = await isExistTable(tableNumber);
      if (!exist) closeTable();
    })();
  }, [tableNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeTable = () => {
    history.push("/");
  };

  const goToCart = () => {
    history.push(`/client/${tableNumber}/cart`);
  };

  const goToOrders = () => {
    history.push(`/client/${tableNumber}/orders`);
  };

  return (
    <div className="client-layout-bg">
      <Container className="client-layout">
        <div className="client-layout__header">
          <Link to={`/client/${tableNumber}`}>
            <h3>ViandaWeb</h3>
          </Link>
          <span>Tableau: {tableNumber}</span>

          <div client-layout___icon>
            <Button icon onClick={goToCart}>
              <Icon name="shop" />
            </Button>
            <Button icon onClick={goToOrders}>
              <Icon name="list" />
            </Button>
            <Button icon onClick={closeTable}>
              <Icon name="sign-out" />
            </Button>
          </div>
        </div>

        <div className="client-layout__content">{children}</div>
      </Container>
    </div>
  );
}
