import { faker } from "@faker-js/faker";
import CardList from "./card-list";

const HomePageCard = () => {
  return (
    <>
      <CardList title="Smartphones" image={faker.image.business} />
      <CardList title="Men's & Women's Dresses" image={faker.image.fashion} />
      <CardList image={faker.image.sports} />
    </>
  );
};

export default HomePageCard;
