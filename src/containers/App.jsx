
import React from 'react';
import Header from '../componets/Header';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';
import Footer from '../componets/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';
import '../assets/styles/components/header.scss';

const API = 'http://localhost:3000/initalState/';

const App = () => {
  const initialState = useInitialState(API);
  console.log(initialState);

  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Originals">
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
