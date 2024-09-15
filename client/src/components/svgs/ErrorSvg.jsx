import PropTypes from 'prop-types';
export function Error404({ fill, height, width }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-9v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m7-1v4a1 1 0 0 0 1 1h3m0-5v10"></path></svg>);
}
Error404.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};

export function SubwayError({ fill, height, width }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512"><path fill={fill} d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0M64 256c0-106.1 86-192 192-192c42.1 0 81 13.7 112.6 36.7L100.7 368.6C77.7 337 64 298.1 64 256m192 192c-42.1 0-81-13.7-112.6-36.7l267.9-267.9c23 31.7 36.7 70.5 36.7 112.6c0 106.1-86 192-192 192"></path></svg>);
}
SubwayError.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};

export function Retry({ fill, height, width }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" ><path fill={fill} fillRule="evenodd" d="M7.32.029a8 8 0 0 1 7.18 3.307V1.75a.75.75 0 0 1 1.5 0V6h-4.25a.75.75 0 0 1 0-1.5h1.727A6.5 6.5 0 0 0 1.694 6.424A.75.75 0 1 1 .239 6.06A8 8 0 0 1 7.319.03Zm-3.4 14.852A8 8 0 0 0 15.76 9.94a.75.75 0 0 0-1.455-.364A6.5 6.5 0 0 1 2.523 11.5H4.25a.75.75 0 0 0 0-1.5H0v4.25a.75.75 0 0 0 1.5 0v-1.586a8 8 0 0 0 2.42 2.217" clipRule="evenodd"></path></svg>);
}

Retry.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};

export function IconBack({ fill, height, width }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" ><g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M10 33c0-7.299 4.103-13.583 10-16.408A16.147 16.147 0 0 1 27 15c9.389 0 17 8.059 17 18"></path><path d="m18 28l-8 5l-6-8"></path></g></svg>);
}

IconBack.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};
