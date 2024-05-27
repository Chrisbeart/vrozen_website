import React from 'react';
import './UnserePferde1.css';
import horseImage from '../../assets/images/horse2.jpg'; // Passen Sie den Pfad entsprechend an

const UnserePferde4 = () => {
  return (
    <div className="pferde-detail">
      <h1>Biographie von Blitz</h1>
      <div className="details">
        <div className="text">
          <p><strong>Name:</strong> Blitz</p>
          <p><strong>Geburtsdatum:</strong> 12. Mai 2012</p>
          <p><strong>Rasse:</strong> Hannoveraner</p>
          <p><strong>Farbe:</strong> Rappe (schwarz)</p>
          <p><strong>Geschlecht:</strong> Hengst</p>
          <p><strong>Besitzer:</strong> Familie Müller</p>
          <h2>Frühes Leben:</h2>
          <p>Blitz wurde auf einem renommierten Gestüt in Niedersachsen geboren. Seine Eltern waren beide preisgekrönte Springpferde, und schon früh zeigte Blitz großes Potenzial. Als Fohlen war er lebhaft und neugierig, liebte es, über die Weiden zu galoppieren und mit anderen Fohlen zu spielen.</p>
          <h2>Ausbildung:</h2>
          <p>Im Alter von drei Jahren begann Blitz seine formelle Ausbildung. Er zeigte sich als äußerst lernfähig und talentiert, insbesondere im Springreiten. Sein Trainer lobte seine Intelligenz und seinen Mut, und Blitz nahm bald an ersten kleinen Turnieren teil. Mit fünf Jahren gewann er bereits mehrere regionale Wettbewerbe.</p>
          <h2>Karriere:</h2>
          <p>Blitz' Karriere als Springpferd nahm schnell Fahrt auf. Er gewann zahlreiche nationale und internationale Turniere, darunter mehrere Grand-Prix-Springen. Sein größter Erfolg war der Sieg beim CHIO Aachen, einem der prestigeträchtigsten Springturniere der Welt. Blitz wurde bekannt für seine Eleganz, Schnelligkeit und Präzision, und er begeisterte das Publikum mit seiner beeindruckenden Sprungkraft.</p>
          <h2>Persönlichkeit:</h2>
          <p>Abseits des Turnierplatzes ist Blitz ein liebevoller und zutraulicher Hengst. Er genießt die Gesellschaft von Menschen und anderen Pferden gleichermaßen. Seine Pfleger beschreiben ihn als freundlich, verspielt und manchmal ein wenig übermütig. Blitz liebt Äpfel und Karotten. Blitz ist auch bekannt dafür, dass er eine besondere Bindung zu seinem Reiter aufgebaut hat, was sich in ihrer harmonischen Zusammenarbeit im Parcours zeigt.</p>
        </div>
        <div className="image">
          <img src={horseImage} alt="Blitz" />
        </div>
      </div>
    </div>
  );
};

export default UnserePferde4;
