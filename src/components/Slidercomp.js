
import React from 'react';


const Slidercomp = ({
 number, image, title, description 
}) => (
                        <div>
                            <div className="row col-md-12 mr-0 ml-0 ">
                                <div className="mt-2 mb-2">
                                <a href="#" className="badge-a">
                                    <div className="pl-0 pr-0 badge-article  col-md-12">
                                        <div className="badge-notif">
                                            {number}
                                        </div>
                                        <div className="badge-content pb-4" >
                                            <div className="col-md-12 no-padding carousel-img" style={{ background: `url(${image})` }} />
                                            <div className="box-item-carousel">
                                                <div className="col-md-12 article-badge-title pl-4 ">

                                                    <div className="row">
                                                        <div className="col-m-1 square-title pr-1" />
                                                        <div className="col-md-11 pl-2">
                                                            {title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 article-badge-description pl-4 pr-4">
                                                    {description}
                                                </div>
                                                <div className="col-md-12 mt-3 pl-4 pr-4 ">
                                                    <input type="button" className="btn-badge-article" value="Lire"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>);
export default Slidercomp;
