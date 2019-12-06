import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Dropdown from 'react-dropdown';
import PeopleOne from '../images/people-one.png';
import PeopleTwo from '../images/people-two.png';
import PeopleThree from '../images/people-three.png';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Logo from '../images/logo.png';


const Home = (props) => {
  const options = [<a href="#" style={{ color: 'Black' }} > Le partage </a>, <a href="#" style={{ color: 'Black' }} >Mode de vie</a>, <a href="#" style={{ color: 'Black' }} > Femmes fertilité et age </a>];
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <header>
        <div className="row no-margins">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 bg-left">
                <div className="container-fluid mt-3">
                    <img className="logo-system img-fluid" src={Logo} alt=""/>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 bg-right">
                <div className="row no-margins align-items-center mt-3 text-center menu">
                    <div className="col-xl-4 col-lg-4 col-md-3 d-sm-none d-md-block d-none">
                    <a href="/quiz" className="btn u-btn-indigo u-btns-hover-v1-4">Passer le test de fertilité</a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 d-sm-none d-md-block d-none">
                    <Dropdown placeholder="Conseil et support" options={options} className="btn u-btn-white  secondary-button" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 d-flex justify-content-center text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item mr-3"><a href="#">Contact</a></li>
                            <li className="list-inline-item"><a href="#">Ar</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row no-margins mt-2 button-responsive">
            <div className="col display-buttons justify-content-center d-md-none d-lg-none d-xl-none">
                <div>
                <button href="#!" className="btn u-btn-indigo u-btns-hover-v1-4" style={{ border: 'none' }}>Passer le test de fertilité</button>
                </div>
                <div>
                <Dropdown placeholder="Conseil et support" options={options} className="btn u-btn-white  secondary-button" />
                </div>
            </div>

        </div>
      </header>

      <div className="container containing home-background">
                <div className="row text-center">
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 illustration mb-5">
                        <img className="img-fluid" src={PeopleOne} alt=""/>
                        <div className="cat-title mt-3 text-layout">
                            <div>
En savoir plus sur
<br />
vos options
                            </div>
                        </div>
                        <div className="cat-desc mb-3 options-paragraph fade">
                            <h6>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</h6>
                        </div>
                        <div>
                            <a href="/ensavoirplus" className="btn btn-md u-btn-aqua g-rounded-50 g-mr-50 g-ml-50">Découvrir</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 illustration mb-5">
                        <img className="img-fluid" src={PeopleTwo} alt=""/>
                        <div className="cat-title mt-3  text-layout">
                            <div>
Comprendre
<br />
{' '}
vos options
                            </div>
                        </div>
                        <div className="cat-desc mb-3 options-paragraph fade">
                            <h6>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</h6>
                        </div>
                        <div>
                            <a href="comprendrevosoptions" className="btn btn-md u-btn-pink g-rounded-50 g-mr-50 g-ml-50">Découvrir</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 illustration mb-5">
                        <img className="img-fluid" src={PeopleThree} alt=""/>
                        <div className="cat-title mt-3  text-layout">
                            <div>
Maximiser
<br />
{' '}
vos options
                            </div>
                        </div>
                        <div className="cat-desc mb-3 options-paragraph fade">
                            <h6>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</h6>
                        </div>
                        <div>
                            <a href="/maximiservosoptions" className="btn btn-md u-btn-bluegray g-rounded-50 g-mr-50 g-ml-50">Découvrir</a>
                        </div>
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
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
