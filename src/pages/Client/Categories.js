import React, { useEffect } from "react";
import { useCategory } from "../../hooks";
import { ListCategories } from "../../components/Client";
import "../../pages/Client/SelectTable/SelectTable.scss";

export function Categories() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => getCategories(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Catégories de produits</h3>
      {loading ? <p>Cargando</p> : <ListCategories categories={categories} />}
    </div>
  );
}