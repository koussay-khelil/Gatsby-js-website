import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Dropdown from 'react-dropdown';
import Slider from 'react-slick';
import PeopleOne from '../../images/people-one.png';
import PeopleTwo from '../../images/people-two.png';
import PeopleThree from '../../images/people-three.png';
import Slidercomp from '../../components/Slidercomp';
import SliderArrow from '../../components/SliderArrow';
import Article from '../../images/article1.png';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Logo from '../../images/logo.png';


const settings = {
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

  ],
};
const items = [{
  number: '1', image: Article, title: 'Décider d\'un ou plusieurs cycles ', description: 'Suivre un traitement de l’infertilité est une entreprise de grande envergure et peut affecter de manière significative votre bien-être...',
}, {
  number: '2', image: Article, title: 'Peut-on gérer nos émotions ? ', description: 'Il est important de savoir que vous devrez peut-être subir plusieurs cycles de traitement de l’infertilité, y compris différentes options... ',
}, {
  number: '3', image: Article, title: 'Sommes-nous physiquement prêts pour un autre cycle ?', description: 'Si vous avez des perturbations physiques suite au traitement, tels que des effets indésirables, parlez-en avec votre...',
}, {
  number: '4', image: Article, title: 'Pouvons-nous assumer ces coûts ?', description: 'Le traitement contre l’infertilité peut devenir une problématique financière. Si vous essayez de nouveau, vous pouvez peut-être...',
}];
const Options = (props) => {
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
                <button href="/quiz" className="btn u-btn-indigo u-btns-hover-v1-4" style={{ border: 'none' }}>Passer le test de fertilité</button>
            </div>
        </div>
      </header>
      <div className="pl-4 offset-md-1 slide-row-2-position" >
       Comprendre
{' '}
<br />
<div className="option-bg">
{' '}
Vos Options
</div>
      </div>
      <div className="slide-row-3-position col-md-12" >
<div className="container">
      <Slider {...settings}>
        {
          items.map(e => <div className="col-10">
{' '}
<Slidercomp number = {e.number} image = {e.image} title={e.title} description = {e.description} />
{' '}
                         </div>)
        }

      </Slider>
</div>
<div className=" col-md-2 offset-md-9 nbr-article article-slider">
            {items.length}
{' '}
Articles
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

export default Options;
