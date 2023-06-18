import { Card } from "react-bootstrap";
import  Formulario  from "../components/Form"


/*
await axios.post(
  '/bezkoder.com/tutorials',
  {
    title: title,
    description: description,
  },
  {
    headers: {
      "x-access-token": "token-value",
    },
  }
);
*/

export function CreatePublications() {
  return (
      <Card.Text>
        <Formulario/>
      </Card.Text>
  )
};
  