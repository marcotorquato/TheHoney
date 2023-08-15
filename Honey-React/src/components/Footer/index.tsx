import ifoodIcon from '../../assets/icons/ifood.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import logoFooter from '../../assets/logo-footer.svg';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer id={styles["footer"]}>
      <div className="container">
        <div className={styles.navFooter}>
          <a href="#home" className={styles.logo}><img src={logoFooter} alt="Logo Royals Burguer" /></a>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Localização</a></li>
              <li><a href="#menufood">Cardápio</a></li>
              <li><a href="#">Sobre</a></li>
            </ul>
          </nav>
          <ul className={styles.social}>
            <li><a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer"><img src={ifoodIcon} alt="Logo Ifood" /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Logo Instagram" /></a></li>
          </ul>
        </div>
        <small>2023 © RoyalsBurger. Todos os direitos reservados.</small>
        <small>Desensolvido por <a className={styles.dev} href="https://www.marcotorquato.com" target='_blank'>Marco Torquato</a></small>

      </div>
    </footer>
  )
}