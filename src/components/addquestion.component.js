import React, {useState} from 'react';

const AddQuestion = () => {
    const[answers, setAnswers] = useState([])
    const [question, setQuestion] = useState()

    function handleChangeInput(i, event) {
        const values = [...answers];
        console.log(values)
        const { name, value } = event.target;
        values[i][name] = value;
        setAnswers(values);
    }

    function handleAddInput() {
        const values = [...answers];
        values.push({
            answer: "",
            isCorrect: false,
        });
        setAnswers(values);
    }

    function handleRemoveInput(i) {
        const values = [...answers];
        values.splice(i, 1);
        setAnswers(values);
    }

    return (
        <div className="form-group mt-3">
            <label htmlFor="name">Вопрос</label>
            <input type="text" name="name" placeholder="Вопрос" value={question}
                   onChange={(e) => setQuestion(e.target.value)}
                   className="form-control mt-2 mb-2"/>
            <label htmlFor="number" className="mt-5">Ответы</label>
            <hr className="light"/>
            {
                answers.map((item,index) => {
                    return (
                    <>
                        <label htmlFor="name" className="d-block mt-3">Ответ</label>
                        <input type="text" name="answer" placeholder="Вопрос" value={item.answer}
                               onChange={e => handleChangeInput(index, e)}
                               className="form-control mt-2 mb-2"/>
                        <label htmlFor="name">Правильный</label>
                        <input  name="isCorrect" value={item.isCorrect}
                               onChange={e => handleChangeInput(index, e)}
                               className="form-check-input d-block" type="checkbox"  id="flexCheckChecked"/>
                        <button className="btn btn-primary mr2 mt-3 d-block" onClick={() => handleRemoveInput(index)}>
                            Удалить ответ
                        </button>
                    </>
                    )
                })

            }
            <button className="btn btn-primary mr2 mt-3 d-block" onClick={() => handleAddInput()}>
                Добавить ответ
            </button>
        </div>
    )
}

export default AddQuestion;
