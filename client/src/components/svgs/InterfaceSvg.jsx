import PropTypes from 'prop-types';

export function CloseToMenu() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 ssm:h-8 md:h-4 lg:h-8" viewBox="0 0 24 24" ><g fill="none" stroke="#f8382f" strokeLinecap="round" strokeWidth={2}><path d="M5 5L12 12L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 12L19 5;M5 5L12 5L19 5"></animate></path><path d="M12 12H12"><animate fill="freeze" attributeName="d" dur="0.4s" values="M12 12H12;M5 12H19"></animate></path><path d="M5 19L12 12L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 12L19 19;M5 19L12 19L19 19"></animate></path></g></svg>);
}

export function MenuToClose() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 ssm:h-8 md:h-4 lg:h-8" viewBox="0 0 24 24" ><g fill="none" stroke="#f8382f" strokeLinecap="round" strokeWidth={2}><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg>);
}

export function Filter({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ssm:h-3 xl:h-4" viewBox="0 0 24 24"><path fill='none' stroke={fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="m19.795 4.413l-5.074 7.852a1.79 1.79 0 0 0-.287.987v4.788a1.229 1.229 0 0 1-.678 1.09l-3.662 1.826a.356.356 0 0 1-.528-.322v-7.382a1.803 1.803 0 0 0-.287-.987L4.205 4.413A.976.976 0 0 1 5.112 3h13.776a.975.975 0 0 1 .907 1.412Z"></path></svg>);
}

Filter.propTypes = {
    fill: PropTypes.string,
};

export function Sort({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ssm:h-3 xl:h-4" viewBox="0 0 48 48" ><path fill='none' stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 6v36M7 17.9l12-12m10 36.2v-36m0 36l12-12"></path></svg>);
}

Sort.propTypes = {
    fill: PropTypes.string,
};

export function Ascending({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 2048 2048" ><path fill={fill} d="M1216 1024h512l-320 640h320v128h-512l320-640h-320zm-704 614l163-163l90 90l-317 318l-317-318l90-90l163 163V128h128zm811-870l-43 128h-128l256-768h128l256 768h-128l-43-128zm149-448l-107 320h214z"></path></svg>);
}
Ascending.propTypes = {
    fill: PropTypes.string,
};

export function Descending({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 2048 2048" ><path fill={fill} d="M1728 896h-512l320-640h-320V128h512l-320 640h320zM512 1638l163-163l90 90l-317 318l-317-318l90-90l163 163V128h128zm1152 154l-43-128h-298l-43 128h-128l256-768h128l256 768zm-299-256h214l-107-320z"></path></svg>);
}
Descending.propTypes = {
    fill: PropTypes.string,
};

export function Rise({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 1024 1024" ><path fill={fill} d="m917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3l-226 226l-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534L535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8"></path></svg>);
}
Rise.propTypes = {
    fill: PropTypes.string,
};

export function Fall({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 1024 1024" ><path fill={fill} d="m925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5L557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490L156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226l-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9"></path></svg>);
}
Fall.propTypes = {
    fill: PropTypes.string,
};

export function Rating() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 48 48" ><circle cx={24} cy={24} r={21} fill="#f8382f"></circle><path fill="#ffca28" d="m24 11l3.9 7.9l8.7 1.3l-6.3 6.1l1.5 8.7l-7.8-4.1l-7.8 4.1l1.5-8.7l-6.3-6.1l8.7-1.3z"></path></svg>);
}

export function Account() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 16 16" ><path fill={'black'} d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A8 8 0 0 0 8.016 16a8 8 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106m-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.2 4.2 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.2 4.2 0 0 1 8 10.342a4.18 4.18 0 0 1 2.928 1.166q.552.552.864 1.295q.168.432.24.911A7.03 7.03 0 0 1 8 14.993m-2.448-7.4a2.5 2.5 0 0 1-.208-1.024c0-.351.064-.703.208-1.023s.336-.607.576-.847s.528-.431.848-.575s.672-.208 1.024-.208c.368 0 .704.064 1.024.208s.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.8 2.8 0 0 1-.576.848a2.8 2.8 0 0 1-.848.575a2.72 2.72 0 0 1-2.064 0a2.8 2.8 0 0 1-.848-.575a2.5 2.5 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.2 5.2 0 0 0-.688-1.406a4.9 4.9 0 0 0-1.088-1.135a5.2 5.2 0 0 0-1.04-.608a3 3 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.6 3.6 0 0 0 .528-1.934a3.7 3.7 0 0 0-.288-1.47a3.8 3.8 0 0 0-.816-1.199a3.9 3.9 0 0 0-1.2-.8a3.7 3.7 0 0 0-1.472-.287a3.7 3.7 0 0 0-1.472.288a3.6 3.6 0 0 0-1.2.815a3.8 3.8 0 0 0-.8 1.199a3.7 3.7 0 0 0-.288 1.47q0 .528.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784q.216.216.48.383a5 5 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a5 5 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907"></path></svg>);
}

export function Bookmark({fill, stroke}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ssm:h-4 "viewBox="0 0 24 24" ><path fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"></path></svg>);
}
Bookmark.propTypes = {
    fill: PropTypes.string,
	stroke: PropTypes.string,
};

export function SignOut({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 24 24" ><path fill={fill} d="M9 20.75H6a2.64 2.64 0 0 1-2.75-2.53V5.78A2.64 2.64 0 0 1 6 3.25h3a.75.75 0 0 1 0 1.5H6a1.16 1.16 0 0 0-1.25 1v12.47a1.16 1.16 0 0 0 1.25 1h3a.75.75 0 0 1 0 1.5Zm7-4a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L18.94 12l-3.47-3.47a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.74.74 0 0 1-.53.22"></path><path fill="#fafafa" d="M20 12.75H9a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5"></path></svg>);
}
SignOut.propTypes = {
    fill: PropTypes.string,
};

export function Diamonds({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 ssm:h-2" viewBox="0 0 24 24" ><path fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10.831 20.413l-5.375-6.91c-.608-.783-.608-2.223 0-3l5.375-6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608.783.608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1-2.338 0"></path></svg>);
}
Diamonds.propTypes = {
    fill: PropTypes.string,
};

export function ArrowUp({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 ssm:h-19 lg:h-12" viewBox="0 0 24 24" ><path fill={fill} fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-13.53-.47a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06 0" clipRule="evenodd"></path></svg>);
}
ArrowUp.propTypes = {
    fill: PropTypes.string,
};

export function Search({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-5" viewBox="0 0 24 24" ><g fill="none" stroke={fill} strokeWidth={2}><circle cx={11} cy={11} r={7}></circle><path strokeLinecap="round" d="m20 20l-3-3"></path></g></svg>);
}
Search.propTypes = {
    fill: PropTypes.string,
};

export function Spinner1({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 md:h-4 lg:h-8" viewBox="0 0 16 16" ><path fill={fill} d="M.001 8.025v.003c.002.061.009.12.021.177l.011.09l.011.095l.019.128l.045.296l.068.326c.011.058.028.117.044.178l.049.188c.009.032.016.065.027.097l.031.098l.065.203l.017.052l.019.052l.039.105l.081.215l.094.218l.048.111c.016.037.035.073.053.111l.11.224c.039.075.081.149.123.224l.063.113c.021.038.045.074.068.112l.14.224c.198.295.417.587.66.864c.245.275.511.535.792.775c.284.236.582.452.886.642c.306.188.619.349.928.487l.232.095c.038.015.076.032.115.046l.115.041c.038.014.151.054.226.078l.224.066c.037.011.073.022.109.031l.109.027l.213.052l.207.04l.101.019l.049.009l.049.007l.192.027l.093.013l.091.009l.174.015c.056.005.111.011.164.012h.011a1 1 0 0 0 1 .982l.025-.001h.004a1.02 1.02 0 0 0 .177-.021l.09-.011l.095-.011l.128-.019l.296-.045l.326-.068c.058-.011.117-.028.178-.044l.188-.049c.032-.009.065-.016.097-.027l.098-.031l.203-.065l.052-.017l.052-.019l.105-.039l.215-.081l.218-.094l.111-.048c.037-.016.073-.035.111-.053l.224-.11c.075-.039.149-.081.224-.123l.113-.063c.038-.021.074-.045.112-.068l.224-.14c.295-.197.587-.417.864-.66c.275-.245.535-.511.775-.792c.236-.284.452-.582.642-.886c.188-.306.349-.619.487-.928l.095-.232c.015-.038.032-.076.046-.115l.04-.115c.013-.038.054-.151.078-.226l.066-.224c.011-.037.022-.073.031-.109l.027-.109l.052-.213l.04-.207l.019-.101l.009-.049a.753.753 0 0 0 .007-.05l.027-.192l.013-.093l.009-.091l.015-.174c.005-.056.011-.111.012-.165l.001-.025a1 1 0 0 0 .996-1l-.001-.025v-.003a1.02 1.02 0 0 0-.021-.177l-.011-.09l-.011-.095l-.019-.128l-.045-.296l-.068-.326c-.011-.058-.028-.117-.044-.178l-.049-.188c-.009-.032-.016-.065-.027-.097l-.031-.098l-.065-.203l-.017-.052l-.019-.052l-.039-.105l-.081-.215l-.094-.218l-.048-.111c-.016-.037-.035-.073-.053-.111l-.11-.224c-.039-.075-.081-.149-.123-.224l-.063-.113c-.021-.038-.045-.074-.068-.112l-.14-.224a8.307 8.307 0 0 0-.66-.864a8.164 8.164 0 0 0-.792-.775a8.155 8.155 0 0 0-.886-.642a8.024 8.024 0 0 0-.928-.487l-.232-.095c-.038-.015-.076-.032-.115-.046l-.115-.04c-.038-.013-.151-.054-.226-.078l-.224-.066c-.037-.01-.073-.022-.109-.031l-.109-.027a54.114 54.114 0 0 0-.213-.052l-.207-.04l-.101-.019l-.049-.009l-.049-.007l-.192-.027l-.093-.013l-.091-.009l-.174-.015C9.136.987 9.081.981 9.028.98L8.989.979a1 1 0 0 0-.999-.981l-.025.001h-.003a1.02 1.02 0 0 0-.177.021l-.09.011L7.6.042l-.128.019l-.296.045l-.326.068c-.058.011-.117.028-.178.044l-.188.049c-.032.009-.065.016-.097.027l-.098.031l-.203.065l-.052.017l-.052.019l-.105.039l-.215.081l-.218.094l-.111.048c-.037.016-.073.035-.111.053l-.224.11c-.075.039-.149.081-.224.123l-.113.063c-.038.021-.074.045-.112.068l-.224.14a8.448 8.448 0 0 0-.864.66a8.164 8.164 0 0 0-.775.792a8.155 8.155 0 0 0-.642.886a8.024 8.024 0 0 0-.487.928l-.095.232c-.015.038-.032.076-.046.115l-.04.115c-.013.038-.054.151-.078.226l-.066.224l-.032.109c-.01.036-.018.073-.027.109l-.052.213l-.04.207l-.019.101l-.009.049a.753.753 0 0 0-.007.05l-.027.192l-.013.093l-.009.091l-.015.174c-.005.056-.011.111-.012.165l-.001.025A1 1 0 0 0 .002 8l.001.025zm1.148-1.014l.002-.009c.01-.051.026-.102.04-.155l.045-.163l.024-.084l.028-.086l.058-.176l.015-.045l.017-.045l.035-.091l.073-.186l.084-.189l.043-.096l.048-.096l.098-.194c.034-.065.073-.128.109-.194l.056-.098c.019-.033.04-.064.061-.096l.124-.194a7.38 7.38 0 0 1 .583-.744c.217-.236.451-.459.697-.665c.25-.202.511-.385.776-.547c.268-.159.541-.294.808-.41l.202-.079c.033-.013.066-.027.099-.038l.1-.033c.033-.011.131-.045.196-.065l.194-.054c.032-.009.063-.019.095-.026l.094-.021l.184-.042l.179-.032l.087-.015l.043-.008c.014-.003.029-.003.043-.005l.166-.02l.08-.01l.078-.006l.15-.011c.049-.003.095-.008.142-.008l.256-.006l.2.007l.085.002a11.23 11.23 0 0 1 .34.024l.022-.001h.004a1 1 0 0 0 .962-.84l.025.006c.051.01.102.026.155.04l.163.045l.084.024l.086.028l.176.058l.045.015l.045.017l.091.035l.186.073l.189.084l.096.043l.096.048l.194.098c.065.034.129.073.194.109l.098.056c.033.019.064.04.096.061l.194.124c.255.176.506.369.744.583c.236.217.459.451.665.697c.202.25.385.511.547.776c.159.268.294.541.41.808l.079.202c.013.033.027.066.038.099l.033.1c.011.033.045.131.065.196l.054.194c.009.032.019.063.026.095l.021.094l.042.184l.032.179l.015.087l.008.043c.003.014.003.029.005.043l.02.166l.01.08l.006.078l.011.15c.003.049.008.095.008.142l.006.256l-.007.2l-.002.085a11.23 11.23 0 0 1-.024.34l.001.022v.004a1 1 0 0 0 .823.959l-.003.014c-.01.051-.025.102-.04.155l-.045.163l-.024.084l-.028.086l-.058.176l-.015.045l-.017.045l-.035.091l-.073.186l-.084.189l-.043.096l-.048.096l-.098.194c-.034.065-.073.129-.109.194l-.056.098c-.019.033-.04.064-.061.096l-.124.194a7.38 7.38 0 0 1-.583.744a7.422 7.422 0 0 1-.697.665c-.25.202-.511.385-.776.547a7.227 7.227 0 0 1-.808.41l-.202.079c-.033.013-.066.027-.099.038l-.1.033c-.033.011-.131.045-.196.065l-.194.054c-.032.009-.063.019-.095.026l-.094.021l-.184.042l-.179.032l-.087.015l-.043.008c-.015.003-.029.003-.043.005l-.166.02l-.08.01l-.078.006l-.15.011c-.049.003-.095.008-.142.008a77.64 77.64 0 0 0-.256.006l-.2-.007l-.085-.002a11.23 11.23 0 0 1-.34-.024l-.022.001H7.96a1.001 1.001 0 0 0-.961.834c-.05-.01-.101-.025-.153-.039l-.163-.045l-.084-.024l-.086-.028l-.176-.058l-.045-.015l-.045-.017l-.091-.035a31.884 31.884 0 0 1-.186-.073a17.554 17.554 0 0 0-.189-.084l-.096-.043l-.096-.048l-.194-.098c-.065-.034-.129-.073-.194-.109l-.098-.056c-.033-.019-.064-.04-.096-.061l-.194-.124a7.238 7.238 0 0 1-.744-.583a7.422 7.422 0 0 1-.665-.697a7.276 7.276 0 0 1-.547-.776a7.227 7.227 0 0 1-.41-.808l-.079-.202c-.013-.033-.027-.066-.038-.099l-.033-.1c-.011-.033-.045-.131-.065-.196l-.054-.194c-.009-.032-.019-.063-.026-.095l-.021-.094a78.832 78.832 0 0 0-.042-.184l-.032-.179l-.015-.087l-.008-.043c-.003-.015-.003-.029-.005-.043a12.365 12.365 0 0 1-.02-.166l-.01-.08l-.006-.078l-.011-.15c-.003-.049-.008-.095-.008-.142a77.64 77.64 0 0 0-.006-.256l.007-.2l.002-.085a11.23 11.23 0 0 1 .024-.34L2 7.98v-.003a1 1 0 0 0-.851-.964z"></path></svg>);
}
Spinner1.propTypes = {
    fill: PropTypes.string,
};

export function Spinner2({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 16 16" ><path fill={fill} d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8"></path></svg>);
}
Spinner2.propTypes = {
    fill: PropTypes.string,
};

export function SpinnerFidget({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 md:h-4 lg:h-8" viewBox="0 0 26 24"><path fill={fill} d="M11.87.12a4.238 4.238 0 0 0-2.226 1.454l-.007.009a4.071 4.071 0 0 0-.863 2.515c0 1.101.434 2.101 1.141 2.837l-.001-.001c.306.238.512.591.553.993v.006a7.743 7.743 0 0 1-.007 2.677l.007-.047a6.43 6.43 0 0 1-4.048 4.717l-.044.014l-.632.24l-.48-.133a3.916 3.916 0 0 0-1.134-.164c-.667 0-1.295.163-1.848.451l.022-.011a4.118 4.118 0 0 0-2.3 3.69a4.11 4.11 0 0 0 2.205 3.643l.023.011a4.114 4.114 0 0 0 5.856-2.62l.006-.029c.12-.494.222-.626.897-1.131c.62-.45 1.34-.813 2.115-1.052l.052-.014a6.53 6.53 0 0 1 1.72-.225c1.734 0 3.314.659 4.503 1.74l-.005-.005a.975.975 0 0 1 .372.676v.004a3.658 3.658 0 0 0 1.081 1.846l.003.002c.284.318.626.577 1.01.762l.019.008a3.588 3.588 0 0 0 2.055.409l-.015.001c.404 0 .793-.066 1.157-.188l-.026.007a4.197 4.197 0 0 0 2.691-2.951l.006-.029a5.1 5.1 0 0 0-.012-1.94l.005.032a4.224 4.224 0 0 0-2.757-2.899l-.03-.008a4.59 4.59 0 0 0-2.271-.042l.031-.006a1.494 1.494 0 0 1-1.307-.1l.007.004c-2.477-.935-4.206-3.286-4.206-6.041c0-.435.043-.86.125-1.271l-.007.041l.108-.566l.4-.427a3.993 3.993 0 0 0 1.192-2.676v-.008a4.103 4.103 0 0 0-3.06-4.201l-.029-.006a4.559 4.559 0 0 0-2.081.007l.031-.006zm1.76 2.546a1.613 1.613 0 0 1 .41 2.583a1.325 1.325 0 0 1-1.151.439l.006.001a1.325 1.325 0 0 1-1.142-.437l-.001-.001a1.517 1.517 0 0 1-.449-1.436l-.002.01a1.625 1.625 0 0 1 2.343-1.155l-.009-.004zm.337 9.39c.514.251.92.658 1.162 1.159l.006.015a1.716 1.716 0 0 1 .168 1.014l.001-.009a1.813 1.813 0 0 1-.197 1.081l.005-.01a2.466 2.466 0 0 1-1.803 1.364l-.015.002a2.48 2.48 0 0 1-2.612-1.369l-.006-.015a1.746 1.746 0 0 1-.185-1.063l-.001.009a1.74 1.74 0 0 1 .165-1.003l-.005.01a2.54 2.54 0 0 1 1.451-1.319l.018-.005a1.984 1.984 0 0 1 .889-.101l-.009-.001l.067-.001c.333 0 .646.089.915.244l-.009-.005zm-9.394 5.698c.443.137.8.441 1.004.837l.004.009a1.127 1.127 0 0 1 .173.819l.001-.007a1.58 1.58 0 0 1-.994 1.423l-.011.004a1.786 1.786 0 0 1-1.419-.101l.01.005a1.604 1.604 0 0 1-.806-1.554l-.001.007a1.45 1.45 0 0 1 .457-.98l.001-.001a1.54 1.54 0 0 1 1.591-.459l-.011-.003zm17.696.06c.398.175.718.467.922.833l.005.01c.076.195.12.421.12.657c0 .27-.057.526-.161.757l.005-.012a1.56 1.56 0 0 1-1.405.885l-.042-.001h.002a1.56 1.56 0 0 1-1.612-1.527v-.002a1.123 1.123 0 0 1 .183-.822l-.003.004a1.558 1.558 0 0 1 1.999-.779l-.01-.004zM5.062 6.082a10.763 10.763 0 0 0-2.195 3.944l-.02.076c-.217.789-.234 1.006-.03.4c.319-.864.67-1.598 1.077-2.295l-.037.068c.399-.627.823-1.172 1.294-1.673l-.006.006a3.02 3.02 0 0 0 .432-.513l.007-.011a.406.406 0 0 0-.237-.246l-.003-.001c-.11.066-.203.147-.28.243zm15.68.416a10.149 10.149 0 0 1 2.014 4.023l.015.07c.205.88.24.96.386.96c.234 0 .259-.193.09-.765a10.599 10.599 0 0 0-2.466-4.325l.005.005l-.4-.422zm-15.293.795a9.066 9.066 0 0 0-1.378 2.596l-.019.064c-.259.789-.325 1.168-.096.572c.426-1.086 1-2.02 1.708-2.835l-.01.012c.301-.349.349-.463.222-.59s-.21-.085-.427.18z"></path><path fill={fill} d="M20.273 7.642a9.716 9.716 0 0 1 1.455 3.25l.014.067c.036.169.16.253.301.198c.15-.06.16-.193.012-.608a9.337 9.337 0 0 0-1.961-3.213l.005.005c-.102-.114-.024.018.174.301m-14.62.956a7.921 7.921 0 0 0-.775 1.869l-.013.057a3.14 3.14 0 0 0 .237-.382l.009-.018c.212-.368.424-.682.654-.979l-.014.019c.295-.4.379-.548.337-.62c-.11-.163-.296-.139-.434.054zm14.349.332c.146.285.293.631.416.988l.018.059c.193.584.331.72.512.494c.108-.133.108-.145-.08-.475a11.87 11.87 0 0 0-.978-1.413l.018.023c-.158-.193-.152-.162.094.325zm-8.516 12.79a.16.16 0 0 0 .042.222h.001c.09.09.198.096.981.06c.48-.018.969-.054 1.083-.08c.198-.036.205-.042.06-.084a2.704 2.704 0 0 0-.478-.048h-.002a8.885 8.885 0 0 1-.873-.096c-.703-.113-.735-.113-.814.026m-1.066.644c-.102.042-.102.234 0 .313a6.857 6.857 0 0 0 1.858.251c.176 0 .351-.007.524-.019l-.023.001a8.262 8.262 0 0 0 2.001-.265l-.057.013h-.045c-.224 0-.444.013-.661.039l.026-.003a9.86 9.86 0 0 1-2.755-.204l.065.012c-.686-.15-.837-.178-.933-.136zm-1.017.897c-.072.181.06.295.463.4c.803.214 1.726.337 2.677.337c.751 0 1.485-.077 2.193-.223l-.07.012c.62-.12.602-.174-.03-.08a10.992 10.992 0 0 1-4.34-.356l.078.019c-.741-.218-.923-.242-.971-.11z"></path></svg>);
}
SpinnerFidget.propTypes = {
    fill: PropTypes.string,
};

export function EmailIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 24 24" ><g fill="none"><path fill={fill} d="M3 5v-.75a.75.75 0 0 0-.75.75zm18 0h.75a.75.75 0 0 0-.75-.75zM3 5.75h18v-1.5H3zM20.25 5v12h1.5V5zM19 18.25H5v1.5h14zM3.75 17V5h-1.5v12zM5 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 19.75zM20.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 17z"></path><path stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m3 5l9 9l9-9"></path></g></svg>);
}
EmailIcon.propTypes = {
    fill: PropTypes.string,
};

export function OpenIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 20 20" ><path fill={fill} d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1zm5-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.707l-4.146 4.147a.5.5 0 0 1-.708-.708L15.293 4H11.5a.5.5 0 0 1-.5-.5"></path></svg>);
}
OpenIcon.propTypes = {
    fill: PropTypes.string,
};

export function CheckIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5" viewBox="0 0 56 56"><path fill={fill} d="M23.664 52.399c2.953 2.976 5.695 2.953 8.649 0l3.609-3.587c.375-.351.703-.492 1.195-.492h5.063c4.195 0 6.14-1.922 6.14-6.14v-5.063c0-.492.141-.82.492-1.195l3.563-3.61c3-2.953 2.976-5.695 0-8.648l-3.563-3.61c-.351-.35-.492-.702-.492-1.171v-5.086c0-4.172-1.922-6.14-6.14-6.14h-5.063c-.492 0-.82-.118-1.195-.47l-3.61-3.585c-2.953-2.977-5.695-2.953-8.648 0l-3.61 3.586c-.35.351-.702.468-1.171.468h-5.086c-4.195 0-6.14 1.922-6.14 6.14v5.087c0 .469-.118.82-.47 1.172l-3.585 3.61c-2.977 2.952-2.953 5.694 0 8.648l3.586 3.609c.351.375.468.703.468 1.195v5.063c0 4.195 1.946 6.14 6.14 6.14h5.087c.469 0 .82.141 1.172.492Zm.375-12.61c-.726 0-1.195-.234-1.547-.633l-7.828-8.695a2.027 2.027 0 0 1-.515-1.336c0-1.102.843-1.922 2.039-1.922c.632 0 1.101.211 1.523.656l6.21 6.868l12.071-16.993c.469-.68.938-.96 1.758-.96c1.148 0 1.969.843 1.969 1.945c0 .398-.164.867-.422 1.242L25.633 39.063c-.352.445-.89.726-1.594.726"></path></svg>);
}
CheckIcon.propTypes = {
    fill: PropTypes.string,
};

export function UnCheckIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5" viewBox="0 0 56 56"><path fill={fill} d="M23.664 52.399c2.953 2.976 5.695 2.953 8.649 0l3.609-3.587c.375-.351.703-.492 1.195-.492h5.063c4.195 0 6.14-1.922 6.14-6.14v-5.063c0-.492.141-.82.492-1.195l3.563-3.61c3-2.953 2.976-5.695 0-8.648l-3.563-3.61c-.351-.35-.492-.702-.492-1.171v-5.086c0-4.172-1.922-6.14-6.14-6.14h-5.063c-.492 0-.82-.118-1.195-.47l-3.61-3.585c-2.953-2.977-5.695-2.953-8.648 0l-3.61 3.586c-.35.351-.702.468-1.171.468h-5.086c-4.195 0-6.14 1.922-6.14 6.14v5.087c0 .469-.118.82-.47 1.172l-3.585 3.61c-2.977 2.952-2.953 5.694 0 8.648l3.586 3.609c.351.375.468.703.468 1.195v5.063c0 4.195 1.946 6.14 6.14 6.14h5.087c.469 0 .82.141 1.172.492Zm-4.031-13.852c-1.078 0-1.992-.914-1.992-2.016c0-.515.234-1.008.586-1.336l6.984-7.007l-6.984-6.985a1.872 1.872 0 0 1-.586-1.36c0-1.077.89-1.945 1.992-1.945c.539 0 1.008.211 1.312.563l7.032 6.984l7.054-7.007c.375-.422.82-.586 1.336-.586a1.98 1.98 0 0 1 1.969 1.968c0 .54-.164.985-.586 1.36l-6.984 7.008l6.96 6.96c.376.375.587.844.587 1.383c0 1.102-.868 2.016-1.97 2.016a1.98 1.98 0 0 1-1.382-.586l-6.984-7.008l-6.985 7.008a1.87 1.87 0 0 1-1.36.586"></path></svg>);
}
UnCheckIcon.propTypes = {
    fill: PropTypes.string,
};

export function RatingBubble({fill, stroke}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-3" viewBox="0 0 24 24"><circle cx={12} cy={12} r={9} fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></circle></svg>);
}
RatingBubble.propTypes = {
    fill: PropTypes.string,
	stroke: PropTypes.string,
};

export function CircleHalfFull({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-3" viewBox="0 0 24 24"><path fill={fill} d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8z"></path></svg>);
}
CircleHalfFull.propTypes = {
    fill: PropTypes.string,
};

export function Share({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-4 md:h-4 lg:h-8" viewBox="0 0 24 24" ><path fill={fill} fillRule="evenodd" d="M16.5 2.25a3.25 3.25 0 0 0-3.2 3.824L8.57 9.386a.757.757 0 0 0-.068.053a3.25 3.25 0 1 0 0 5.121a.755.755 0 0 0 .068.054l4.73 3.312a3.25 3.25 0 1 0 .617-1.4l-4.479-3.135c.2-.422.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136A3.25 3.25 0 1 0 16.5 2.25M14.75 5.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M6.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m10 6.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" clipRule="evenodd"></path></svg>);
}
Share.propTypes = {
    fill: PropTypes.string,
};

export function LocationIcon({stroke, fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ssm:h-3" viewBox="0 0 24 24" ><g fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M12.56 20.82a.964.964 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.592 7.592 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64"></path><path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path></g></svg>);
}
LocationIcon.propTypes = {
    fill: PropTypes.string,
	stroke: PropTypes.string,
};

export function BrandIcon({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 md:h-4 lg:h-8" viewBox="0 0 24 24" ><path fill={fill} d="M10 17h9v-6h-9zm-6 3q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></path></svg>);
}
BrandIcon.propTypes = {
    fill: PropTypes.string,
};

export function CompanyIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 ssm:h-5" viewBox="0 0 24 24" ><path fill={fill} d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"></path></svg>);
}
CompanyIcon.propTypes = {
    fill: PropTypes.string,
};

export function PricetagIcon({stroke, fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-4 ssm:h-5" viewBox="0 0 512 512" ><path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32"></path><path fill={fill} d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></path><path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="m230 480l262-262a13.8 13.8 0 0 0 4-10V80"></path></svg>);
}
PricetagIcon.propTypes = {
    fill: PropTypes.string,
	stroke: PropTypes.string,
};

export function CategoryIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ssm:h-5" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><circle cx={17} cy={7} r={3}></circle><circle cx={7} cy={17} r={3}></circle><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></g></svg>);
}
CategoryIcon.propTypes = {
    fill: PropTypes.string,
};

export function RibbonIcon({ fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 20 20" ><path fill={fill} d="M12.825 10.653c.118-.258.445-.497.727-.529s.539-.29.571-.572c.034-.28.272-.608.529-.727a.69.69 0 0 0 .369-.72c-.058-.278.068-.663.276-.854a.689.689 0 0 0 .127-.801a1.017 1.017 0 0 1 0-.897a.688.688 0 0 0-.127-.801c-.208-.193-.333-.577-.276-.854a.691.691 0 0 0-.369-.722a1.03 1.03 0 0 1-.529-.727a.689.689 0 0 0-.571-.572a1.024 1.024 0 0 1-.727-.528a.686.686 0 0 0-.722-.366a1.024 1.024 0 0 1-.854-.278c-.193-.21-.553-.266-.8-.127s-.652.139-.898 0a.684.684 0 0 0-.801.125a1.022 1.022 0 0 1-.854.278a.685.685 0 0 0-.72.367c-.119.256-.446.495-.728.527a.69.69 0 0 0-.572.573a1.023 1.023 0 0 1-.529.726a.69.69 0 0 0-.366.722c.055.277-.07.662-.278.854s-.266.552-.127.801c.139.246.139.651 0 .897a.69.69 0 0 0 .127.802c.209.19.333.575.278.854a.687.687 0 0 0 .366.72c.258.119.495.447.528.727c.034.282.29.54.572.572s.609.272.728.529a.688.688 0 0 0 .72.366c.278-.055.663.069.854.278a.69.69 0 0 0 .801.127c.246-.139.651-.139.898 0s.607.081.8-.127c.193-.21.576-.333.854-.278a.69.69 0 0 0 .723-.365M10 9.399a3.4 3.4 0 1 1 0-6.8a3.4 3.4 0 0 1 0 6.8m-4.025 2.01l-1.243 7.049l3.128-.464l2.781 1.506l1.238-7.021a6.707 6.707 0 0 1-5.904-1.07m7.986.048a6.741 6.741 0 0 1-.99.597l-.748 4.236l3.369-1.828z"></path></svg>);
}
RibbonIcon.propTypes = {
    fill: PropTypes.string,
};

export function VolumeIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-4 ssm:h-4" viewBox="0 0 36 36" ><path fill={fill} d="M25.88 32H12a4 4 0 0 1-4-4V11.46L2.31 5.77a1 1 0 0 1-.22-1.09A1 1 0 0 1 3 4.06h25.86a1 1 0 0 1 1 1V28a4 4 0 0 1-3.98 4M5.43 6l4.28 4.34a.75.75 0 0 1 .21.63v17A2.13 2.13 0 0 0 12 30h13.88A2.1 2.1 0 0 0 28 28V6Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill={fill} d="M33 16a1 1 0 0 1-1-1V6h-3.14a.92.92 0 0 1-1-.9a1 1 0 0 1 1-1H33a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1" className="clr-i-outline clr-i-outline-path-2"></path><path fill={fill} d="M24 11h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" className="clr-i-outline clr-i-outline-path-3"></path><path fill={fill} d="M24 15h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2" className="clr-i-outline clr-i-outline-path-4"></path><path fill={fill} d="M24 19h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" className="clr-i-outline clr-i-outline-path-5"></path><path fill={fill} d="M24 27h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" className="clr-i-outline clr-i-outline-path-6"></path><path fill={fill} d="M24 23h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2" className="clr-i-outline clr-i-outline-path-7"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>);
}
VolumeIcon.propTypes = {
    fill: PropTypes.string,
};

export function MapPinIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 320 512" ><path fill={fill} d="M16 144a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64m-32 400V317.1a177.984 177.984 0 0 0 64 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32"></path></svg>);
}

MapPinIcon.propTypes = {
    fill: PropTypes.string,
};

export function CartRemoveIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 md:h-4 lg:h-8" viewBox="0 0 24 24" ><g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color={fill}><path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2m14 0h-3.5m-8-3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3"></path><circle cx={6} cy={20} r={2}></circle><circle cx={17} cy={20} r={2}></circle><path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></path></g></svg>);
}
CartRemoveIcon.propTypes = {
    fill: PropTypes.string,
};

export function CartAddIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 md:h-4 lg:h-8" viewBox="0 0 24 24"><g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color={fill}><path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h.5M22 6h-2.5m-10 0h7M13 9.5v-7"></path><circle cx={6} cy={20} r={2}></circle><circle cx={17} cy={20} r={2}></circle><path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></path></g></svg>);
}
CartAddIcon.propTypes = {
    fill: PropTypes.string,
};

export function CartIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 md:h-4 lg:h-8" viewBox="0 0 24 24" ><g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color={fill}><path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h16"></path><circle cx={6} cy={20} r={2}></circle><circle cx={17} cy={20} r={2}></circle><path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></path></g></svg>);
}

CartIcon.propTypes = {
    fill: PropTypes.string,
};

export function ArrowDownIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-8" viewBox="0 0 1024 1024"><path fill={fill} d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"></path></svg>);
}
ArrowDownIcon.propTypes = {
    fill: PropTypes.string,
};

export function ArrowUpIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg"className="h-5 md:h-4 lg:h-8" viewBox="0 0 1024 1024"><path fill={fill} d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"></path></svg>);
}
ArrowUpIcon.propTypes = {
    fill: PropTypes.string,
};

export function PreviousIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 ssm:h-4 lg:h-6"viewBox="0 0 24 24" ><path fill={fill} d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"></path></svg>);
}
PreviousIcon.propTypes = {
    fill: PropTypes.string,
};

export function DirectionIcon({stroke}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-4 lg:h-6" viewBox="0 0 24 24" ><path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9.706 12.781l-5.316-.953a2.085 2.085 0 0 1-.167-3.96l14.11-4.992a2.084 2.084 0 0 1 2.673 2.673l-4.992 14.386a2.084 2.084 0 0 1-3.91-.098l-.914-5.572a2.015 2.015 0 0 0-1.484-1.484m5.571-3.979l-4.579 4.579"></path></svg>);
}
DirectionIcon.propTypes = {
	stroke: PropTypes.string,
};

export function CarbonDelivery() {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" ><path fill="#fafafa" d="M4 16h12v2H4zm-2-5h10v2H2z"></path><path fill="#fafafa" d="m29.919 16.606l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A4 4 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"></path></svg>);
}

export function TablerReservedLine() {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="none" stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20h6m-3-6v6M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 3h6"></path></svg>);
}

export function CloseIcon({fill}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-4 lg:h-8" viewBox="0 0 32 32" ><path fill={fill} d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"></path></svg>);
}
CloseIcon.propTypes = {
    fill: PropTypes.string,
};

export function PlusIcon({stroke}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-4 lg:h-8" viewBox="0 0 24 24" ><path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h6m6 0h-6m0 0V6m0 6v6"></path></svg>);
}
PlusIcon.propTypes = {
	stroke: PropTypes.string,
};

export function MinusIcon({stroke}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-4 lg:h-8" viewBox="0 0 24 24" ><path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12"></path></svg>);
}
MinusIcon.propTypes = {
	stroke: PropTypes.string,
};

export function MdiLocation() {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="#fafafa" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>);
}

export function TwitterIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-5 lg:h-8" viewBox="0 0 16 16" ><path fill="#e7eefe" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path></svg>);
}

export function WhatsappIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-6 lg:h-8" viewBox="0 0 24 24" ><path fill="#e7eefe" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>);
}

export function PhoneIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-6 lg:h-8" viewBox="0 0 256 256" ><path fill="#e7eefe" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"></path></svg>);
}

export function InstagramIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg"  className="h-7 md:h-6 lg:h-8" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path><path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path></g></svg>);
}
export function NextIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-3" viewBox="0 0 24 24" ><path fill="" d="M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6z"></path></svg>);
}

export function BreadcrumbIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4" viewBox="0 0 24 24" ><path fill="" d="M2 6.5v11h7.914l5.5-5.5l-5.5-5.5zm2 2h5.086l3.5 3.5l-3.5 3.5H4zm10.586-1l4.5 4.5l-4.5 4.5L16 17.914L21.914 12L16 6.086z"></path></svg>);
}

export function AboutIcon() {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4" viewBox="0 0 24 24" ><path fill="#f8382f" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>);
}