import React from 'react';
import styled from 'styled-components';

import { addQuote } from '../actions/quotes';

function loadQuote(){
    return <div>
        <button onClick={addQuote}>LOAD QUOTE</button>
    </div>
}

export default loadQuote;