import React from 'react';


const QuizQuestion = ({ number }) => (
    <div className="row">
                    <div className="col-md-6 ">
                        <div className="quiz-question">
                            <div className="background-text d-block d-md-none">
                                01
                            </div>
                            Question question question question question question question ?
                        </div>
                        <div className="quiz-desc">
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                            en page
                            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                            les
                            années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                            réaliser un livre spécimen de polices de texte.
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 col-lg-12 col-xl-4 mt-4">
                                <input type="button" value="Moins de 6 mois" className="quiz-btn-selected" />
                            </div>
                            <div className="col-md-12  col-lg-12 col-xl-4 mt-4">
                                <input type="button" value="Entre 6 mois et 12 mois" className="quiz-btn" />
                            </div>
                            <div className="col-md-12  col-lg-12 col-xl-4 mt-4">
                                <input type="button" value="Plus de 6 mois" className="quiz-btn" />
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 quiz-question-number d-none d-md-block">
                        {number}
                    </div>

    </div>
);
export default QuizQuestion;
