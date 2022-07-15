import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TablesListAdmin } from "../../components/Admin";
import { useTable } from "../../hooks";

export function OrdersAdmin() {
  const { loading, tables, getTables } = useTable();

  useEffect(() => getTables(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <HeaderPage title="Estado de Mesas:" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TablesListAdmin tables={tables} />
      )}
    </>
  );
}