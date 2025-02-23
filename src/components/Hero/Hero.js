import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bonjour,
        </SectionTitle>
        <SectionText>
        Je suis ingénieur en informatique et réseaux, spécialisé en développement full-stack et DevOps. Actuellement en Master à Paris, je cherche une alternance dans le domaine des systèmes d'information, ERP (Odoo, Sage X3) et développement web.
        </SectionText>
        <Button onClick={() => window.open('/files/CV.pdf', '_blank')}>Télécharger mon CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
