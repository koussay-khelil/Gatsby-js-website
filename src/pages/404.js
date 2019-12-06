import React from 'react';
import Layout from '../layouts/index';
import NotFound from '../images/404.png';
import Logo from '../images/logo.png'
;
class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
       <header>
        <div className="row no-margins">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 bg-left">
                <div className="container-fluid mt-3">
                    <img className="logo-system img-fluid" src={Logo} alt=""/>
                </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 bg-right">
                <div className="row no-margins align-items-center mt-3 text-center menu">
                    <div className="col-xl-6 col-lg-6 col-md-6 d-sm-none d-md-block d-none">
                    <a href="#!" className="btn u-btn-indigo u-btns-hover-v1-4" style={{ fontSize: '1.5rem' }}>Passer le test de fertilité</a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item mr-3"><a href="#" style={{ fontSize: '1.4rem' }}>Contact</a></li>
                            <li className="list-inline-item"><a href="#" style={{ fontSize: '1.4rem' }}>Ar</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row no-margins mt-2 button-responsive">
            <div className="col d-flex justify-content-center d-md-none d-lg-none d-xl-none">
                <button href="#!" className="btn u-btn-indigo u-btns-hover-v1-4" style={{ border: 'none' }}>Passer le test de fertilité</button>
            </div>
        </div>
       </header>
       <div className=" p404-row-3-position col-lg-12">

       <div className="col-lg-4 offset-lg-4 col-md-10 offset-md-1">
   <img src={NotFound} alt="not-found" width="100%"/>
    <div className="p404-title">

        Page non trouvée !
    </div>
    <div className="p404-desc">
        Veuillez réessayez

    </div>

       </div>
       </div>
 <footer>
 <div className="row no-margins">
     <div className="col-3 bg-footer">
         <a href="#">Accueil</a>
     </div>
 </div>
 </footer>
      </Layout>
    );
  }
}

export default NotFoundPage;
