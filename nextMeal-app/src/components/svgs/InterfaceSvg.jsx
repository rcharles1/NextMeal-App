import React from 'react';

export function Filter({ fill, height, width }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill='none' stroke={fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="m19.795 4.413l-5.074 7.852a1.79 1.79 0 0 0-.287.987v4.788a1.229 1.229 0 0 1-.678 1.09l-3.662 1.826a.356.356 0 0 1-.528-.322v-7.382a1.803 1.803 0 0 0-.287-.987L4.205 4.413A.976.976 0 0 1 5.112 3h13.776a.975.975 0 0 1 .907 1.412Z"></path></svg>);
}

export function Sort({ fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" ><path fill='none' stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 6v36M7 17.9l12-12m10 36.2v-36m0 36l12-12"></path></svg>);
}

export function Ascending({ fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 2048 2048" ><path fill={fill} d="M1216 1024h512l-320 640h320v128h-512l320-640h-320zm-704 614l163-163l90 90l-317 318l-317-318l90-90l163 163V128h128zm811-870l-43 128h-128l256-768h128l256 768h-128l-43-128zm149-448l-107 320h214z"></path></svg>);
}

export function Descending({ fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 2048 2048" ><path fill={fill} d="M1728 896h-512l320-640h-320V128h512l-320 640h320zM512 1638l163-163l90 90l-317 318l-317-318l90-90l163 163V128h128zm1152 154l-43-128h-298l-43 128h-128l256-768h128l256 768zm-299-256h214l-107-320z"></path></svg>);
}

export function Rise({ fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1024 1024" ><path fill={fill} d="m917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3l-226 226l-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534L535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8"></path></svg>);
}

export function Fall({fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1024 1024" ><path fill={fill} d="m925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5L557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490L156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226l-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9"></path></svg>);
}

export function Rating({ height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" ><circle cx={24} cy={24} r={21} fill="#f8382f"></circle><path fill="#ffca28" d="m24 11l3.9 7.9l8.7 1.3l-6.3 6.1l1.5 8.7l-7.8-4.1l-7.8 4.1l1.5-8.7l-6.3-6.1l8.7-1.3z"></path></svg>);
}

export function Account({fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" ><path fill={fill} d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A8 8 0 0 0 8.016 16a8 8 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106m-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.2 4.2 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.2 4.2 0 0 1 8 10.342a4.18 4.18 0 0 1 2.928 1.166q.552.552.864 1.295q.168.432.24.911A7.03 7.03 0 0 1 8 14.993m-2.448-7.4a2.5 2.5 0 0 1-.208-1.024c0-.351.064-.703.208-1.023s.336-.607.576-.847s.528-.431.848-.575s.672-.208 1.024-.208c.368 0 .704.064 1.024.208s.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.8 2.8 0 0 1-.576.848a2.8 2.8 0 0 1-.848.575a2.72 2.72 0 0 1-2.064 0a2.8 2.8 0 0 1-.848-.575a2.5 2.5 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.2 5.2 0 0 0-.688-1.406a4.9 4.9 0 0 0-1.088-1.135a5.2 5.2 0 0 0-1.04-.608a3 3 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.6 3.6 0 0 0 .528-1.934a3.7 3.7 0 0 0-.288-1.47a3.8 3.8 0 0 0-.816-1.199a3.9 3.9 0 0 0-1.2-.8a3.7 3.7 0 0 0-1.472-.287a3.7 3.7 0 0 0-1.472.288a3.6 3.6 0 0 0-1.2.815a3.8 3.8 0 0 0-.8 1.199a3.7 3.7 0 0 0-.288 1.47q0 .528.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784q.216.216.48.383a5 5 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a5 5 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907"></path></svg>);
}

export function Favorite({fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 13 24" ><path fill={fill} d="M0 2.089v21.912l6.546-6.26l6.545 6.26V2.089A2.11 2.11 0 0 0 10.982 0l-.077.001h.004h-8.726L2.11 0A2.109 2.109 0 0 0 .001 2.088z"></path></svg>);
}

export function Cart({fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill={fill} d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"></path></svg>);
}

export function SignOut({fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" ><path fill={fill} d="M9 20.75H6a2.64 2.64 0 0 1-2.75-2.53V5.78A2.64 2.64 0 0 1 6 3.25h3a.75.75 0 0 1 0 1.5H6a1.16 1.16 0 0 0-1.25 1v12.47a1.16 1.16 0 0 0 1.25 1h3a.75.75 0 0 1 0 1.5Zm7-4a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L18.94 12l-3.47-3.47a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.74.74 0 0 1-.53.22"></path><path fill="#fafafa" d="M20 12.75H9a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5"></path></svg>);
}