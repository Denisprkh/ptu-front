import React from 'react';
import TestCard from "./testcard.component";

const TestList = ({testList}) => {
    return (
        <>
            {
                testList.map((item) =>
                    <TestCard testData={item}/>
                )
            }
            </>
    )
}

export default TestList;