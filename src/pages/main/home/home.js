import React from 'react'
import "./home.scss";
import NavMain from '../../../components/navMain/navMain';
import SliderMain from '../../../components/sliderMain/sliderMain';
import CardsMain from '../../../components/cardsMain/cardsMain';
import Info1 from '../../../components/info/info1/info1';
import Info2 from '../../../components/info/info2/info2';
import Resourses from '../../../components/resourses/resourses';
import Advantages from '../../../components/advantages/advantages';
import Footer from '../../../components/footer/footer';

const Home = () => {
  return (
    <div>
       <NavMain />
       <SliderMain />
       <CardsMain />
       <Info1 />
       <Info2 />
       <Advantages />
       <Resourses />
       <Footer />
    </div>
  )
}

export  {Home}
