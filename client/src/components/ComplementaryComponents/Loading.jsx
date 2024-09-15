
import {Spinner2 } from '../svgs/InterfaceSvg'

function Loading() {
    return (
        <div className="p-4 justify-center items-center flex flex-col space-y-2">
            <div className="animate-spin"><Spinner2 fill="red" height='20' width='20' /></div>
            <p className="mx-auto font-bold text-sm text-default/55">Fetching data. Please wait...</p>
        </div>
    );
}

export default Loading;