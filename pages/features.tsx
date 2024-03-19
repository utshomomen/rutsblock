
import Image from 'next/image';
import Header from '../components/Header';
import  Hero  from '../components/Hero';

export default function Features() {
  return (
    <div>
      <Header backgroundImage="/images/whitebackground.jpg" />
      <Hero />
    </div>
  );
}
