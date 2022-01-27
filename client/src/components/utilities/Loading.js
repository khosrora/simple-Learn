import React from 'react';

const Loading = () => {
    return (
        <div className=" text-center loading">
            <svg width="205" height="250" viewBox="0 0 40 50">
                <polygon stroke="#000" strokeWidth="1" fill="none"
                    points="20,1 40,40 1,40" />
            </svg>
            <text fill="#fff" x="5" y="47">  لطفا منتظر بمانید ...</text>
        </div>
    );
};

export default Loading;
