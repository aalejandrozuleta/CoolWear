import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import SliderHome from "../../components/layouts/SliderHome/SliderHome";
import Card3D from "../../components/layouts/cards3D/Card3D";


//import img
import ShoesImg from "../../../public/assets/product/shoes/airForceBlack.png";
import DressBagsImg from "../../../public/assets/product/dressBags/foxBlue.png";
import ShirtsImg from "../../../public/assets/product/shirts/armaniBlack.png";
import GoalsImg from "../../../public/assets/Home/ideaHome.svg";

export const Home = () => {
    return (
        <div>
            <Header />
            <SliderHome />
            <section id="carsProducts">
                <Card3D
                    frontImage={ShoesImg}
                    backText={
                        " Experimenta el máximo confort y estilo con los icónicos zapatos Nike AirForce. Diseñados para cualquier ocasión, desde un paseo en el parque hasta una noche en la ciudad"
                    }
                />
                <Card3D
                    frontImage={DressBagsImg}
                    backText={
                        "Eleva tu estilo con este elegante saco azul de la marca Fox. Este saco no solo te mantendrá abrigado en las noches frías, sino que también te hará destacar en cualquier ocasión."
                    }
                />
                <Card3D
                    frontImage={ShirtsImg}
                    backText={
                        "Haz una declaración de moda con esta lujosa camisa de vestir negra de la marca Armani. La elegancia y el refinamiento se combinan en esta prenda de alta costura"
                    }
                />
            </section>

            <section id="businessIdentity">
                <figure id="goalsCompanyImg">
                    <img src={GoalsImg} alt="" />
                </figure>

                <article id="goalsComapanyText">
                    <h2>
                        Nuestra empresa
                    </h2>

                    <p>
                    En CoolWear, te ofrecemos moda juvenil de alta calidad que abarca una variedad de estilos y tendencias. Nuestra ropa no solo te hará lucir bien, sino que también está diseñada para durar. Nuestro equipo de atención al cliente se dedica a satisfacer tus necesidades. Únete a nosotros y descubre cómo CoolWear puede elevar tu estilo.
                    </p>
                </article>
            </section>
            <Footer />
        </div>
    );
};
