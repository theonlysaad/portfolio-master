import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { 
    title: 'IBM', 
    description: 'DevOps, Cloud, and Agile Foundations Specialization', 
    logo: 'images/4xl9a347.bmp' // Replace with the actual logo URL
  },
  { 
    title: 'Honoris Online Academy', 
    description: 'Honoris 21st Century Soft Skills Certificate',
    logo: '/images/k361d8rx.bmp' // Replace with the actual logo URL
  },
  { 
    title: 'University of Michigan', 
    description: 'Python Functions, Files and Dictionaries',
    logo: '/images/ktqfaz4h.bmp' // Replace with the actual logo URL
  },
  { 
    title: 'IBM', 
    description: 'Developing Back-End Apps with Node.js and Express',
    logo: 'images/4xl9a347.bmp' // Replace with the actual logo URL
  },
  { 
    title: 'The Hong Kong University Of Science and Technology', 
    description: 'Full-Stack Web Development with React Specialization',
    logo: 'images/qruk3qcf.bmp' // Replace with the actual logo URL
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      {data.map((card, index) => (
        <Box key={index} style={{ 
          width: '80%', 
          textAlign: 'center', 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '12px', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          alignItems: 'center', // Align the logo and text horizontally
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          
          {/* Logo */}
          <img src={card.logo} alt={`${card.title} Logo`} style={{
            width: '40px', 
            height: '40px', 
            marginRight: '20px', // Space between logo and text
          }} />
          
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{card.title}</h3>
            <BoxText style={{ fontSize: '1rem', color: '#555' }}>{card.description}</BoxText>
          </div>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
