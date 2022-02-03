import React, {memo} from 'react';
function Header(props){
    const title = props.title;
    return(
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

export default memo(Header);