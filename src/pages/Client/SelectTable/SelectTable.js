import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useTable } from "../../../hooks";
import "./SelectTable.scss";

export function SelectTable(props) {
  const { history } = props;
  const [tableNum, setTableNum] = useState(null);
  const [error, setError] = useState(null);
  const { isExistTable } = useTable();

  const onSubmit = async () => {
    setError(null);
    if (!tableNum) {
      setError("Aucune table n'est entrée");
    } else {
      const exist = await isExistTable(tableNum);
      if (exist) history.push(`/client/${tableNum}`);
      else setError("Le tableau n'existe pas");
    }
  };

  return (
    <div className="select-table">
      <div className="select-table__content">   
        <h1>Bienvenue à ViandaWeb</h1>
        <h2>Entrer le numéro du tableau</h2>
        <Form onSubmit={onSubmit}>
          <Form.Input
            placeholder="Exemple: 1-01, 1-02, 13, 21"
            type="number"
            onChange={(_, data) => setTableNum(data.value)}
          />

          <Button primary fluid>
          Entrer dans
          </Button>
        </Form>

        <p className="select-table__content-error">{error}</p>
      </div>
    </div>
  );
}