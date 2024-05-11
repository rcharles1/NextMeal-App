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