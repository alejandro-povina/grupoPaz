import React from 'react';
import zulo from '../img/deposito.JPG'
import { Container} from 'react-bootstrap';
import depo from "../img/depositoGeneral.jpeg"
import grupoPaz from "../img/grupo.png"
import Slider from './Slider';
import siempreVerde from "../img/siempreverde.png" 
import sanGeronimo from "../img/AzucareraSanGeronimo.png"
import fundadores from "../img/angieyzulo.jpg"
import hijos from "../img/hijos.jpeg"
import grupoChofer from "../img/grupoChofer.JPG"
import juampi from "../img/juampi.jpeg"
const Empresa = () => {
    return (
        <div className="fondo2">
            <div className="m-navbar" >
            <Slider />
            </div>
            <Container>
                            <div className="d-flex justify-content-center align-items-center">
                        <h3 className="lead display-4">Nuestra Empresa</h3>
                        <img src={grupoPaz} className="logoSG" alt="" />
                            </div>
                            <hr className="w-100 mt-0"/>
                <section className="row mt-3">
                        <div className="col-sm-12 col-md-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis sapiente et. Repellat qui doloribus illum tempore accusamus impedit, ab fugit quaerat fuga! Quos eligendi, ad asperiores cupiditate illo eaque tempora? Hic tenetur nobis itaque sequi quae, doloribus error non quas dolorum voluptatem, cumque cupiditate explicabo quis quo odit, asperiores aut exercitationem! Quaerat distinctio ratione eius animi. At ipsam repellat numquam amet sint fugiat labore atque recusandae ut corporis sequi quisquam, velit odit doloribus a reprehenderit voluptatum consectetur illum sed ex molestias reiciendis iusto. Unde?</p>
                        </div>
                    <div className="col-sm-12 col-md-6 d-flex align-items-center">
                    <img src={fundadores} className=" w-100 imgPrincipal" alt="" />
                    </div>
                    <div className="my-3 divlogos mx-auto py-3 d-flex justify-content-around align-items-center">
                        <img src={siempreVerde} className="logoSV my-2" alt="" />
                        <img src={sanGeronimo} className="logoSG my-2" alt="" />          
                    </div>
                    <div>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis sapiente et. Repellat qui doloribus illum tempore accusamus impedit, ab fugit quaerat fuga! Quos eligendi, ad asperiores cupiditate illo eaque tempora? Hic tenetur nobis itaque sequi quae, doloribus error non quas dolorum voluptatem, cumque cupiditate explicabo quis quo odit, asperiores aut exercitationem! Quaerat distinctio ratione eius animi. At ipsam repellat numquam amet sint fugiat labore atque recusandae ut corporis sequi quisquam, velit.</p>
<img src={hijos} alt="" className="w-100 imgPrincipal" />
                    </div>
                    <div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat provident sit, beatae, ipsa magnam in, saepe iusto ex ducimus accusamus aspernatur nostrum. Necessitatibus facere quod doloremque nihil laboriosam dolores blanditiis, ad earum eum exercitationem commodi iure, consectetur harum placeat? Nostrum laboriosam impedit, facere vero eius tempora magnam incidunt.</p>
                    </div>
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae praesentium animi fuga dolore tempore excepturi distinctio, repudiandae harum ut reiciendis quia itaque, id quo temporibus vel nesciunt sapiente! Veniam cupiditate reprehenderit voluptatibus magni! Ipsa dicta laudantium facere animi placeat repellat.</p>
                </section>
                <section className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h3>AREA1</h3>
                        <img src={zulo} className="w-100 imagen" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem reiciendis vel eaque praesentium nisi perferendis velit illum.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>AREA2</h3>
                        <img src={grupoChofer} className="w-100 imagen" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem reiciendis vel eaque praesentium nisi perferendis velit illum.</p> 
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>AREA3</h3>
                        <img src={juampi} className="w-100 imagen" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem reiciendis vel eaque praesentium nisi perferendis velit illum.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3>AREA4</h3>
                        <img src={depo} className="w-100 imagen" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem reiciendis vel eaque praesentium nisi perferendis velit illum.</p>
                    </div>
                </section>
  </Container>   
        </div>
    );
};

export default Empresa