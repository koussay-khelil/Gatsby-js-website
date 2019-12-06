import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Dropdown from 'react-dropdown';
import Pagination from 'react-js-pagination';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Logo from '../../images/logo.png';
import QuizQuestion from '../../components/QuizQuestion';




const numbers = [{ number: '01', title: 'aze', description: 'aze' }];


const Quiz = (props) => {
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
            <div className="col d-flex justify-content-center d-md-none d-lg-none d-xl-none">
                <button href="#!" className="btn u-btn-indigo u-btns-hover-v1-4" style={{ border: 'none' }}>Passer le test de fertilité</button>
            </div>
        </div>
      </header>
      <div className="pl-4 offset-md-1 slide-row-2-position" >
     Test d'évaluation
{' '}
<br />
De la
<span className="option-bg"> Fertilité </span>
      </div>
      <div className="quiz-row-3-position col-md-11 offset-md-1 col-12">
      <ul id="question">
            <li>
                {numbers.map(el => <QuizQuestion number = {el.number} />)}
            </li>
      </ul>

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

export default Quiz;
