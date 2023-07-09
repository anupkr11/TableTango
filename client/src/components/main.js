// import React from "react";
import { Row, Col, Button } from "reactstrap";

// export default props => {
//   return (
//     <div>
//       <Row noGutters className="text-center align-items-center pizza-cta">
//         <Col>
//           <p className="looking-for-pizza">
//             Everything from grill to plate smells and tastes so fantastic.
//           </p>
//           <Button
//             color="none"
//             className="book-table-btn"
//             onClick={_ => {
//               props.setPage(1);
//             }}
//           >
//             Book a Table
//           </Button>
//         </Col>
//       </Row>
//       <Row noGutters className="text-center big-img-container">
//         <Col>
//           <img
//             src={require("../images/cafe.jpg")}
//             alt="cafe"
//             className="big-img"
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// };

import React from "react";
import Card from "./card";
import greekSalad from "../images/Salad.jpg";
import bruschetta from "../images/Bruchetta.svg";
import LemonDessert from "../images/LemonDessert.jpg";

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default props => {
  const specialsCards = specialsData.map((item) => {
    return (
    <Card
    key={item.title}
    image={item.img}
    title={item.title}
    price={item.price}
    description={item.description}
  />
      
    );
  });

  return (
    <main>
      <div>
       <Row noGutters className="text-center align-items-center pizza-cta">
         <Col>
           <p className="looking-for-pizza">
             Everything from grill to plate smells and tastes so fantastic.
         </p>
           <Button
            color="none"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/cafe.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      
    </div>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}



