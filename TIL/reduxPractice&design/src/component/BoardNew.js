import React from 'react';
import styled from 'styled-components'

const DivWrap = styled.div`
margin-left: 110px;
margin-top: 20px;
 > form{
     > button.submitBtn{
         margin-top: 20px;
         padding: 10px;
         border: none;
         border-radius: 10%;
         margin-left: 20px;
         background-color:  #5B6DCD ;
         opacity: 70%;
         &:hover{
             opacity: 100%;
         }
         cursor: pointer;
     }
 } 

`

function BoardNew({ onSave, changeInput, inputData, resetForm }) {

    const saveBtnClick = (e) => {
        e.preventDefault();
        onSave(inputData);
        resetForm();
    }

    return (
        <DivWrap>
            <form onSubmit={saveBtnClick}>
                <div>
                    제목 : <input type="text" name="boardTitle" onChange={changeInput} value={inputData.boardTitle} />
                </div>
                <div>
                    내용 : <input type="text" name="boardContent"  onChange={changeInput} value={inputData.boardContent} />
                </div>
                <input type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
                <button type="submit" className='submitBtn'>New Confirm</button>
            </form>
        </DivWrap>
    )
};

export default BoardNew;