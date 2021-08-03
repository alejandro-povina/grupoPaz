import React from 'react';
import { Container } from 'react-bootstrap';
import siempreVerde from "../img/siempreverde.png"
import sanGeronimo from "../img/AzucareraSanGeronimo.png"
import campo from "../img/campo.jpeg"
import transporteBB from "../img/transporteBB.JPG"
import estibaBigBag from "../img/estibaBigBag.JPG"
import bolsaAzucar from "../img/bolsaAzucar1.png" 
import paletizado from "../img/paletizadoStretch.JPG"
import sider from "../img/camionSider.JPG"

const Logistica = () => {
    return (
        <div className="m-navbar fondo2 p-1">
            <Container>
            <div className="d-flex justify-content-around align-items-center py-2">
            <h3 className="display-6"><b>Logistica</b> </h3>
            <img src={siempreVerde} className="altura mt-2 imgNombre"  alt="" />
                    </div>  
                    <section className="row">
                <div className="col-sm-12 col-md-6 contenedor ">
                    <img src={sider} className="w-100 imagen" alt="" />            
                </div>
                <div className="col-sm-12 col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi, aut assumenda magni tenetur at veniam quas nemo repellat hic architecto omnis, tempore saepe fugit, deserunt consequatur ducimus corporis velit laboriosam reprehenderit porro aspernatur reiciendis debitis! Dolorem debitis illum ab eius vitae aliquid quos earum, veniam commodi magni eveniet.</p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat distinctio quod sunt modi architecto vitae quia perspiciatis possimus, cum optio fuga est exercitationem animi. Dolorum accusantium obcaecati nam beatae? Mollitia quae alias reiciendis, exercitationem facilis dolor recusandae perspiciatis error repellat.</p>
                </div>
                <div className="col-sm-12 col-md-6 contenedor">
                    <img src={transporteBB} className="w-100 imagen" alt="" />
                </div>
            </section>
            <p className="mb-0 py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet consequatur magnam nostrum. Repellendus aspernatur accusamus similique non soluta, corporis ipsam facere asperiores dolorem quaerat deleniti beatae dolor unde eos iure odit minima ipsum. Quod beatae voluptatibus fuga! Itaque temporibus voluptas quia odio omnis fugit sunt eum, aliquam molestiae ipsam error repudiandae? Ipsa, dolores exercitationem impedit, vel eligendi porro aliquam odit molestias, tempore est aut? Fugiat soluta alias ducimus voluptates omnis non unde, quidem reprehenderit sequi beatae vero perspiciatis dolorem, architecto quos! Perspiciatis distinctio ipsa in ipsam vitae. Odit libero cum aliquid, quam ea velit dolore deserunt quis alias tempora perferendis ut harum blanditiis animi nam consequuntur fugiat? Alias nemo totam, nobis rerum assumenda ipsa! Laboriosam qui, quia quae quod tempora dolorum, deleniti animi laborum maiores hic at ducimus tempore rerum. Asperiores laudantium nobis deleniti aperiam libero laboriosam, quidem provident id neque odio deserunt repudiandae voluptates ad, ipsum quae. Nam?</p>
            </Container>
        </div>
    );
};

export default Logistica;