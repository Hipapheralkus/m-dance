import React from 'react';
import CertificationSlideshow from './CertificationSlideshow';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">O nás</h2>
        <div className="about-content">
          <p>
            Jsme skupina mladých tanečníků od 4 do 18 let, kteří se věnují disciplíně art dance. 
            Naší specialitou je kombinace současného, klasického a jazzového tance s akrobacií. 
            Jsme <a href="https://www.acrobaticarts.com/certified-studios" target="_blank" rel="noopener noreferrer">jediné certifikované studio Acrobatic Arts v České republice</a>.
          </p>
          
          <CertificationSlideshow />
          
          <p>
            Program Acrobatic Arts dali dohromady odborníci z oblasti baletu, jazzu, současného tance, 
            moderní a sportovní gymnastiky, sportovní akrobacie, acro yogy, fyzioterapie a dalších. 
            Na světě v tomto programu trénuje cca 500 000 tanečníků, mnohé z nich znáte z největších 
            světových soutěží jako SYTYCD (So You Think You Can Dance) nebo World of Dance.
          </p>
          <p>
            Kromě toho, že se celoročně připravujeme na soutěže skupin, soutěžíme také v duetech nebo jako sólisté. 
            Jezdíme na soustředění, připravujeme závěrečná vystoupení pro rodiče, nahráváme vánoční videa, 
            a navíc každoročně vystupujeme s Pražským filmovým orchestrem na jejich plese.
          </p>
          <p>
            Tančí u nás jak vítězové MČR, které můžete na tréninku potkat každý den, tak děti, 
            které se s tancem teprve seznamují jednou či dvakrát týdně na svých prvních lekcích. 
            Jsme certifikovaným studiem Acrobatic Arts, dále trénujeme také podle programu 
            Progressing Ballet Technique a Progressing Contemporary Technique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;