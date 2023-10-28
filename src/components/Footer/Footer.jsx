import WhatsappImg from '../../../public/assets/main/whatsapp.svg';
import InstagramIng from '../../../public/assets/main/instagram.svg';
import FacebookImg from '../../../public/assets/main/facebook.svg';

export default function Footer() {
  return (
    <footer>
        <section id="blockInformacion">
            <p>&copy; CoolWear, Alejandro Zuleta</p>
            <p>Compra con los mejores estilos</p>
        </section>
        <section id="blockContacto">
            <img src={WhatsappImg} alt="Red social Whatsapp"/>
            <img src={InstagramIng} alt="Red social Instagram"/>
            <img src={FacebookImg} alt="Red social Facebook"/>
        </section>
    </footer>
  )
}
