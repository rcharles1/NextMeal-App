import React from 'react';

function LoginButton({ onClick }) {
    return (
        <>
            <button onClick={onClick} className=' w-fit outline outline-1 mt-2 text-pure_white font-bold w-14 h-12 p-2 focus:bg-pure_white/70 focus: rounded-md' value='submit'>Sign in</button>
        </>
    );
}

export default LoginButton;