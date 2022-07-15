import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TablePayments } from "../../components/Admin";
import { usePayment } from "../../hooks";

export function PaymentsHistory() {
  const { loading, payments, getPayments } = usePayment();

  useEffect(() => getPayments(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <HeaderPage title="Historial de pagos:" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TablePayments payments={payments} />
      )}
    </>
  );
}