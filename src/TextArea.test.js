import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './TextArea';

it('it renders a textArea', () => {
    let textArea = document.createElement('textarea');
    ReactDOM.render(<TextArea />, textArea);
    ReactDOM.unmountComponentAtNode(textArea);
});

