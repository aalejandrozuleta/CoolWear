import { Header } from "../../components/Header/Header";
import { useState } from 'react';
import ImgUserDefault from '../../../public/assets/main/userLogin.svg';

export default function UserSettings() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <div>
      <Header/>
      <section id="informationUser">
      <div id="imgUser">
          <label htmlFor="imageUpload">
            <input type="file" id="imageUpload" onChange={handleImageChange} style={{ display: 'none' }} />
            <img src={selectedImage || ImgUserDefault} alt="User" id="userImg" />
          </label>
        </div>


          <form id="dataUser" action="/api/updateUser" method="post" >
              <div className="userdate">
                <label htmlFor="" className="labelInfo">Nombre</label>
                <input type="text" className="inputInfo" name="name_user" id="name_user" />
                </div>
              <div className="userdate">
                <label htmlFor="" className="labelInfo">Teléfono</label>
                <input type="text" className="inputInfo" name="phone_user" id="phone_user" />
                </div>
              <div className="userdate">
                <label htmlFor="" className="labelInfo">correo</label>
                <input type="text" className="inputInfo" name="email_user" id="email_user" />
                </div>
              <div className="userdate">
                <label htmlFor="" className="labelInfo">contraseña</label>
                <input type="text" className="inputInfo" name="password_user" id="password_user" />
              </div>

              <div className="btnOptionUser">
                    <button type="submit">
                      Actualizar
                    </button>

                    <button type="submit">
                      Cerrar sesión
                    </button>
              </div>
          </form>
      </section>
    </div>
  )
}
