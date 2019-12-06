import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import Dropdown from 'react-dropdown';
import Slidercomp from '../../components/Slidercomp';
import ImageArticle from '../../images/imagesArticle.png';
import Why from '../../images/why.png';
import Feet from '../../images/feet.png';
import Fertility from '../../images/fertility1.png';
import Fertility2 from '../../images/fertility2.png';
import FertileState from '../../images/FertileState.png';
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
  number: '1', image: Article, title: 'Devrais-je en parler avec un médecin ?', description: 'Parler de votre vie sexuelle et de votre contraception peut sembler gênant, mais si vous êtes inquiète pour votre fertilité, il est...',
}, {
  number: '2', image: Article, title: 'A quel médecin devrais-je en parler ?', description: 'Il existe de nombreux médecins spécialisés dans l\'infertilité. Pour une première visite, référez-vous à l\'un des spécialistes suivants...',
}, {
  number: '3', image: Article, title: 'Vos médecins sont là pour vous aider', description: 'Partager pour la première fois des détails intimes avec un médecin peut être gênant, mais vous confier à votre médecin l’aidera à vous...',
}, {
  number: '4', image: Article, title: 'Les critères à considérer', description: 'Chaque personne aura des exigences différentes pour le choix de sa clinique, mais peut-être devriez-vous tenir compte des critères suivants pour...',
}];
const Details = (props) => {
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
        <div className="offset-md-1 slide-row-2-position">
        <div className="col-12">
            Cause d'infertilité
        </div>
        <div className="col-12">
            Chez
<span className="option-bg"> Les femmes </span>
        </div>
        </div>

      </header>
    <div className=" detail-row-3-position no-margin ">
        <div className="row no-margin  ">
            <div className="col-md-5 offset-md-1">
                <img src={ImageArticle} width="100%"/>
                <div className="sec-0-description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                    en page
                    avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                    les
                    années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                    réaliser un livre spécimen de polices de texte.


                </div>
            </div>
            <div className="col-md-3 offset-md-1 d-none d-md-block ">
                <img src={Why} width="100%"/>

            </div>
        </div>
        <div>
            <div className="col-md-10 offset-md-1 ">
                <div className="row article-section">
                    <div className="col-md-7">
                        <img src={Feet} width="100%"/>
                    </div>

                    <div className="col-md-5 sec-description ">

                        <div className="sec-title">
                            <div className="background-text">
                                01
                            </div>
                            Âge de la femme
                        </div>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-section-2">
            <div className="col-md-10 offset-md-1  ">
                <div className="row article-section">


                    <div className="col-md-7 sec-description ">

                        <div className="sec-title">
                            <div className="background-text">
                                02
                            </div>
                            Problemes d'ovulation
                        </div>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        <br/>
                        <br/>
                        <br/>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.

                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
{' '}
<br/>
{' '}
<br/>
                        <br/>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.

                    </div>
                    <div className="col-md-5">
                        <img src={Fertility} width="100%" style={{ marginTop: '30px' }}/>
                        <img src={Fertility2} width="100%" style={{ marginTop: '30px' }}/>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="col-md-10 offset-md-1  ">
                <div className="row article-section">
                    <div className="col-md-7">
                        <img src={FertileState} width="100%"/>
                    </div>

                    <div className="col-md-5 sec-description ">

                        <div className="sec-title">
                            <div className="background-text">
                                03
                            </div>
                            Trompe de Fallope bloquée
                        </div>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                        en page
                        avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte.
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-section-ved">
            <div className="col-md-10 offset-md-1  ">
                <div className="row article-section">


                    <div className="col-md-8 sec-description ">

                        <div className="sec-title">
                            <div className="background-text">
                                04
                            </div>
                            Problemes d'ovulation
                        </div>
                        <div className="sec-video-desc">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition

                        et la mise
                        en page
                        avant impression.
<br/>
{' '}
Le Lorem Ipsum est
                        le faux texte standard de l'imprimerie
                            depuis
                        les
                        années 1500, quand un imprimeur anonyme assembla
{' '}
<br/>
                        ensemble des morceaux de texte pour
                            <br/>

                        réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition

                            et la mise
{' '}
<br/>
                            en page
                            avant impression.

                            <br/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="d-none  d-xl-block">
            <div className="col-md-10 offset-md-1 ">
                <div className="row article-section">
                    <div className="col-md-12 see-other">
                        Lire Aussi
                    </div>

                    <div className="col-md-12 sec-description ">

                    <div >
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
                    </div>
                    </div>
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

export default Details;
