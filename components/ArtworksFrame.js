import React, { useState } from 'react';
import styles from '@/styles/artworksframe.module.css';
import Modal from '@/components/Modal'


const ArtworksFrame = () => {
  const [openImage, setOpenImage] = useState(null);

  const artworks = [
    { imageUrl: '/moonlight.jpeg', name: 'Moonlight'},
   
    { imageUrl: '/feelthemagic.png' , name: 'The Magic' },
    { imageUrl: '/spillways.png' , name: 'Spillways' },
    { imageUrl: '/thewalls.jpeg' , name: 'Through the Walls' },
    { imageUrl: '/creativenights.jpg', name: 'Creative Nights'},
   
    { imageUrl: '/areyouready.jpeg', name: 'Are You Ready'},
    { imageUrl: '/huntersmoon.png' , name: 'Hunters Moon' },
    
    { imageUrl: '/noodlecat.JPG' , name: 'Noodle Cat'},
    { imageUrl: '/betterinlove.png', name: 'Better when in love'},
    { imageUrl: '/inthedarkness.jpeg' , name: 'In the Darkness'},
    { imageUrl: '/howmuchlonger.png', name: 'How much longer'},
    { imageUrl: '/items.jpeg' , name: 'Items'},
    { imageUrl: '/keepitcool.jpg', name: 'Keep It Cool'},
    { imageUrl: '/kirby.jpg', name: 'Kirby'},
    { imageUrl: '/makemyheartdisco.jpeg', name: 'Make My Heart Disco' },
  
    { imageUrl: '/nighttrain.jpeg', name: 'Night Train' },
    { imageUrl: '/thewoods.jpg', name: 'The Woods'},
    { imageUrl: '/plantup.jpeg' , name: 'Plant Up' },
    { imageUrl: '/saladdays.png' , name: 'Salad Days'},
    { imageUrl: '/spacedog.png', name: 'Space Dog' },
    { imageUrl: '/summersover.png', name: 'Summers Over'},
    { imageUrl: '/thecastle.png', name: 'The Castle'},
    { imageUrl: '/thevoyage.jpeg' , name: 'The Voyage'},
    { imageUrl: '/boredom.jpeg' , name: 'Boredom'},
    { imageUrl: '/gamesofluck.JPG' , name: 'Games of Luck'},
    { imageUrl: '/inversion.png', name: 'Inversion'},
  ];

  const toggleImage = (imageUrl) => {
    setOpenImage(imageUrl === openImage ? null : imageUrl);
  };

  return (
    <div className={styles.artworksframe}>
      {openImage && (
        <Modal
          imageUrl={openImage}
          onClose={() => setOpenImage(null)}
          artworkDetails={artworks.find((artwork) => artwork.imageUrl === openImage)}
        />
      )}

      {artworks.map((artwork) => (
        <img
          key={artwork.imageUrl}
          src={artwork.imageUrl}
          height={300}
          onClick={() => toggleImage(artwork.imageUrl)}
        />
      ))}
    </div>
  );
};

export default ArtworksFrame;
