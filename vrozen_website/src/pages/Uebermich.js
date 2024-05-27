import React from 'react';
import './Uebermich.css';
import mainImage from '../assets/images/main.jpg'; // Beispielhafter Pfad zum Hauptbild
import thumbnail1 from '../assets/images/thumb1.jpg'; // Beispielhafter Pfad zu den Thumbnails
import thumbnail2 from '../assets/images/thumb2.jpg';
import thumbnail3 from '../assets/images/thumb3.jpg';
import thumbnail4 from '../assets/images/thumb4.jpg';
import thumbnail5 from '../assets/images/thumb5.jpg';
import thumbnail6 from '../assets/images/thumb6.jpg';
import thumbnail7 from '../assets/images/thumb7.jpg';
import thumbnail8 from '../assets/images/thumb8.jpg';
import thumbnail9 from '../assets/images/thumb9.jpg';
import thumbnail10 from '../assets/images/thumb10.jpg';

const UeberMich = () => {
  return (
    <div className="ueber-mich-container">
      <div className="content">
        <div className="main-image">
          <img src={mainImage} alt="Hauptbild" />
        </div>
        <div className="text">
          <p>Lernen Sie Julia Schmidt kennen, eine leidenschaftliche Reiterin mit über zehn Jahren Erfahrung im Sattel. Geboren und aufgewachsen in den malerischen Hügeln Bayerns, hat Julia eine tiefe Verbindung zu Pferden entwickelt, die mehr als nur ein Hobby ist – es ist eine Lebensweise. Sie hat sich in verschiedenen Disziplinen des Reitsports bewährt, darunter Dressur, Springreiten und Geländereiten. Julia ist nicht nur bekannt für ihre technischen Fähigkeiten, sondern auch für ihre geduldige und einfühlsame Art, mit Pferden umzugehen. Ihre Liebe und ihr Engagement für Pferde gehen über den Sport hinaus; sie engagiert sich auch in der Pferdepflege und im Tierschutz. Julia ist eine inspirierende Persönlichkeit in der Reitgemeinschaft und ein Vorbild für junge Reiterinnen und Reiter.</p>
        </div>
      </div>
      <div className="thumbnails">
        <img src={thumbnail1} alt="Thumbnail 1" />
        <img src={thumbnail2} alt="Thumbnail 2" />
        <img src={thumbnail3} alt="Thumbnail 3" />
        <img src={thumbnail4} alt="Thumbnail 4" />
        <img src={thumbnail5} alt="Thumbnail 5" />
        <img src={thumbnail6} alt="Thumbnail 6" />
        <img src={thumbnail7} alt="Thumbnail 7" />
        <img src={thumbnail8} alt="Thumbnail 8" />
        <img src={thumbnail9} alt="Thumbnail 9" />
        <img src={thumbnail10} alt="Thumbnail 10" />
      </div>
    </div>
  );
};

export default UeberMich;