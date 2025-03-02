import React from 'react';
import Header from '../components/Header/Header';  
import Footer from '../components/Footer/Footer';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import images from the src/images folder
import MyImage1 from '../../public/images/emsi.bmp'; // Replace with actual image filenames


const formations = [
  {
    title: "Master Architect Web Expert en stratégie et transformation digitale",
    company: "Digital School of Paris",
    duration: "2024 - 2025",
    logo: 'images/emsi.jpg'
  },
  {
    title: "FULL STACK Software Engineering | Back-end",
    company: "ALX Africa",
    duration: "2023 - 2024",
    // icon: MyImage2
  },
  {
    title: "Diplome D’ingénieur D’état en Informatique et Réseaux option MIAGE",
    company: "EMSI",
    duration: "2019 - 2024",
    // icon: MyImage3
  },
  {
    title: "Baccalaureat Sciences option française",
    company: "Lycée L'Ambassadeur",
    duration: "2018 - 2019",
    description: "Containerisation des pipelines CI/CD.",
     // icon: MyImage4
  }
];

const experiences = [
  {
    title: "Développeur Full-Stack | Développement d'Applications Web",
    company: "INETUM",
    duration: "2025",
    description: "Collaboré avec le client pour comprendre et formaliser les besoins spécifiques en matière de suivi et exploitation de production.\nCréé des maquettes fonctionnelles basées sur les exigences du client pour valider les interfaces utilisateurs et les fonctionnalités prévues.\nDéveloppé le frontend de l'application en utilisant React.js, assurant une interface utilisateur réactive et intuitive.\nImplémenté le backend de l'application avec Node.js, garantissant une gestion efficace des données et une communication fluide entre le serveur et le client.\nRéalisé des tâches de maintenance et de résolution de bugs pour améliorer la stabilité et la performance de l'application.",
    outils: "Outils : React.js, Node.js, Figma (pour les maquettes), Visual Studio Code, Git, Postman."
  },
  {
    title: "Ingénieur DevOps | Conteneurisation & Automatisation",
    company: "INETUM",
    duration: "2024",
    description: "Étude sur la plateforme existante.\nAnalyse du besoin sur le paramétrage applicatif.\nCréation des fichiers de conteneurisation.\nTest et validation des fichiers Dockerfile.",
    outils: "Outils : Docker, Docker Compose, Jenkins, Git, Shell Scripting."
  },
  {
    title: "Développeur Web & Gestion des Systèmes d'Information",
    company: "S'TOURS",
    duration: "2023",
    description: "Conception et développement d’une application web de gestion de stock en utilisant le framework Django (Python), intégrant une interface intuitive et des fonctionnalités optimisées pour la gestion des flux de stock.\nRefonte du système d’information, incluant l’analyse des besoins, l’amélioration des processus existants et la mise en place de nouvelles solutions adaptées.\nAssistance et support technique aux utilisateurs, garantissant une résolution efficace des incidents et une optimisation de l’expérience utilisateur.",
    outils: "Outils : Django (Python), PostgreSQL, Visual Studio Code, Windows Server, Git."
  }
];

const About = () => (
  <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '1px' }}>
    <Header />
    <Section id="Formations">
      <SectionTitle>Formations</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        {formations.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '90%',
              maxWidth: '800px',
              textAlign: 'left',
              padding: '20px',
              border: '2px solid #ddd',
              borderRadius: '16px',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease-in-out',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '15px'
            }}
          >
            <img src={exp.icon} alt="Formation Icon" style={{ width: '50px', height: '50px', marginRight: '15px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.6rem', color: '#333', marginBottom: '5px' }}>{exp.title}</h3>
              <p style={{ fontSize: '1rem', color: '#555', fontWeight: 'bold' }}>{exp.company}</p>
              <p style={{ fontSize: '0.9rem', color: '#777' }}>{exp.duration}</p>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <SectionDivider />
    </Section>
    <Section id="Experiences">
      <SectionTitle>Expériences Professionnelles</SectionTitle>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
  key={index}
  date={exp.duration}
  iconStyle={{ background: '#06b6d4', color: '#fff' }}
  contentStyle={{ background: '#f3f4f6', color: '#333' }}
  contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
>
  <h3 className="vertical-timeline-element-title">{exp.title}</h3>
  <h4 className="vertical-timeline-element-subtitle" style={{ color: '#555' }}>{exp.company}</h4>
  <p style={{ whiteSpace: 'pre-line' }}>{exp.description}</p>
  <p>{exp.outils}</p>
</VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
    <Footer />
  </div>
);

export default About;
