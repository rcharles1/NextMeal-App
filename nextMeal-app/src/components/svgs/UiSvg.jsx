import React from 'react';

export function Filter({ fill, height, width }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill='none' stroke={fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="m19.795 4.413l-5.074 7.852a1.79 1.79 0 0 0-.287.987v4.788a1.229 1.229 0 0 1-.678 1.09l-3.662 1.826a.356.356 0 0 1-.528-.322v-7.382a1.803 1.803 0 0 0-.287-.987L4.205 4.413A.976.976 0 0 1 5.112 3h13.776a.975.975 0 0 1 .907 1.412Z"></path></svg>);
}

export function Sort({ fill, height, width}) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" ><path fill='none' stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 6v36M7 17.9l12-12m10 36.2v-36m0 36l12-12"></path></svg>);
}