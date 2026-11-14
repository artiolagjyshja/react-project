import './style.css';
import Header from './components/UI/Header';
import PhotoCard from './components/UI/PhotoCard';
import React from 'react';

function App() {
  return (
    <main className="container">
      <h2>Photo Fetcher</h2>
      <Header />
      <section className="gallery">
        <PhotoCard 
        imgSrc="https://images.unsplash.com/photo-1513694203232-719a280e022f"
        imgAlt="photo 1"
        authorName="Lukas Budimaier"
        authorLink="https://unsplash.com/photos/pwaaqfoMibi"
        />
        <PhotoCard 
        imgSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        imgAlt="photo 2"
        authorName="Lukas Budimaier"
        authorLink="https://unsplash.com/photos/pwaaqfoMibi"
        />
        <PhotoCard 
        imgSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9" 
        imgAlt="photo 3"
        authorName="Lukas Budimaier"
        authorLink="https://unsplash.com/photos/pwaaqfoMibi"
        />
        <PhotoCard 
        imgSrc="https://plus.unsplash.com/premium_photo-1794227548897-6f0a8667d98d?"
        imgAlt="photo 4"
        authorName="Lukas Budimaier"
        authorLink="https://unsplash.com/photos/pwaaqfoMibi"
        />
      </section>
    </main>
  );
}

export default App;
