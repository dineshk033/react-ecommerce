import { faker } from "@faker-js/faker";
import CardList from "./card-list";

const HomePageCard = () => {
  return (
    <>
      <CardList
        title="Smartphones"
        image={faker.image.business}
        routerPath="smartphones"
      />
      <CardList
        title="Men's & Women's Dresses"
        image={faker.image.fashion}
        routerPath="womens-dresses"
      />
      <CardList image={faker.image.sports} routerPath="mens-shoes" />
    </>
  );
};

export default HomePageCard;
