import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {createGroup} from "../redux/actions/groupsActionCreators";
import {connect} from "react-redux";
import AddQuestion from "../components/addquestion.component";
import {
    addQuestion,
    handleQuestionFieldChange,
    handleTestFieldChange,
    removeQuestion
} from "../redux/actions/editTestActionCreators";


const EditTestPage = ({test, history, dispatchCreateGroupAction, dispatchAddTestQuestionAction,
                          dispatchHandleQuestionFieldChangeAction, dispatchHandleTestFieldChangeAction,
                          dispatchHandleRemoveTestQuestionAction }) => {


    const handleAddQuestion = (event) => {
        event.preventDefault();
        dispatchAddTestQuestionAction();
    }
    console.log(test.questionDtos.length)

    const handleQuestionInputChange = (data) => {
        dispatchHandleQuestionFieldChangeAction(data);
    }

    const handleTestInputChange = (data) => {
        dispatchHandleTestFieldChangeAction(data)
    }

    const handleRemoveQuestion = (event, index) => {
        event.preventDefault();
        dispatchHandleRemoveTestQuestionAction({index})
    }


    return (
        <>
            <div className="rov">
                <div className="col">
                    <h2>Создать тест </h2>
                    <Link to="/profile" className="text-dark">
                        <i className="fas fa-arrow-left cursor-pointer" /></Link>
                </div>
                <div className="col-9 mt-5">
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Название теста</label>
                            <input type="text" name="name" placeholder="Названия теста" value={test.name}
                                   onChange={(event) => handleTestInputChange({event})}
                                   className="form-control mt-2 mb-2"/>
                            <label htmlFor="timeToPass">Время на прохождение</label>
                            <input type="number" name="timeToPass" placeholder="Время на прохождение" value={test.timeToPass}
                                   onChange={(event) => handleTestInputChange({event})}
                                   className="form-control mt-2 mb-2" min="10"/>
                            <label htmlFor="number" className="mt-5">Вопросы</label>
                            <hr className="light"/>
                            {
                                test.questionDtos.length > 0 ? test.questionDtos.map((item,index) => {
                                    return (
                                        <>
                                            <label htmlFor="name" className="d-block mt-3">Вопрос</label>
                                            <input type="text" name="question" placeholder="Вопрос" value={item.question}

                                                  onChange={(event) => {handleQuestionInputChange({event, index})}} className="form-control mt-2 mb-2"/>
                                            <button className="btn btn-primary mr2 mt-3 d-block" onClick={(event) => handleRemoveQuestion(event, index)}>
                                                Удалить вопрос
                                            </button>
                                            <label htmlFor="number" className="mt-5">Ответы</label>
                                            <hr className="light"/>
                                            {
                                                item.answerDtos.length > 0 ? item.answerDtos.map((answer,answerIndex) => {
                                                    return (
                                                        <>
                                                            <label htmlFor="name" className="d-block mt-3">Ответ</label>
                                                            <input type="text" name="answer" placeholder="Вопрос" value={item.answer}
                                                                   className="form-control mt-2 mb-2"/>
                                                            <label htmlFor="name">Правильный</label>
                                                            <input  name="isCorrect" value={item.isCorrect}

                                                                    className="form-check-input d-block" type="checkbox"  id="flexCheckChecked"/>
                                                            <button className="btn btn-primary mr2 mt-3 d-block">
                                                                Удалить ответ
                                                            </button>
                                                        </>
                                                    )
                                                }) : null

                                            }
                                        </>
                                    )
                                }) : null

                            }
                            <button className="btn btn-primary mr2 d-block mt-3" onClick={handleAddQuestion} >
                                Добавить вопрос
                            </button>
                        </div>

                        <button type="submit" className="btn btn-primary mr2 mt-5">
                            Сохранить | <i className="fas fa-save"/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateGroupAction: (data, onSuccess, onError) =>
        dispatch(createGroup(data, onSuccess, onError)),
    dispatchAddTestQuestionAction: (data) => dispatch(addQuestion(data)),
    dispatchHandleQuestionFieldChangeAction: (data) => dispatch(handleQuestionFieldChange(data)),
    dispatchHandleTestFieldChangeAction: (data) => dispatch(handleTestFieldChange(data)),
    dispatchHandleRemoveTestQuestionAction: (data) => dispatch(removeQuestion(data))
});

const mapStateToProps = state => ({
    test: state.editTest.test
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTestPage);