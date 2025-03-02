import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <img src="/logo.svg" height={40} width={40} /> 
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>CHAH</span>
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#skills" passHref>
          <NavLink>Compétences</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Acomplishments" passHref>
          <NavLink>Certifications</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/theonlysaad">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chah-saad-14a748216">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/saad.01__/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
