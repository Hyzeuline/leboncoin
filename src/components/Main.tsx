import CarouselCategories from "./CarouselCategory";
import Caroussel from "./Carousel";
import Container from "./Container";
import Title from "./Title";
import data from "../assets/data.json";
import type { TProduct } from "../types";
import Product from "./Product";

const Main = () => {
  const tablets: TProduct[] = data.products.tablets;
  const consols: TProduct[] = data.products.consols;

  return (
    <main>
      <Container className="py-4">
        <section className="mb-4">
          <Title level={2}>Top catégories</Title>
          <CarouselCategories />
        </section>
        <section>
          <Title level={2}>En ce moment sur leboncoin</Title>
          <Title level={3}>Tablettes & liseuses</Title>
          <Caroussel data={tablets} Item={Product} />
          <Caroussel data={consols} Item={Product} />
        </section>
      </Container>
    </main>
  );
};

export default Main;
