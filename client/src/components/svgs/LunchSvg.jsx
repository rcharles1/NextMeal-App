import PropTypes from 'prop-types';

export function LunchSvg({ fill, width, height }) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C5.07734375 1.6290625 5.1546875 2.258125 5.234375 2.90625 C5.78495269 5.16757659 5.78495269 5.16757659 7.890625 5.90625 C8.66921875 6.1021875 9.4478125 6.298125 10.25 6.5 C15.3813457 8.05077062 18.54679257 9.58872229 21.41015625 14.33984375 C23.62344497 18.53831065 25 21.17469281 25 26 C26.32 26 27.64 26 29 26 C29.29296875 32.0546875 29.29296875 32.0546875 29 34 C25.7995069 36.13366207 24.97637262 36.25180158 21.30078125 36.25878906 C20.34969482 36.26509338 19.3986084 36.27139771 18.41870117 36.27789307 C17.39365479 36.2738446 16.3686084 36.26979614 15.3125 36.265625 C14.25844971 36.26753845 13.20439941 36.2694519 12.1184082 36.27142334 C9.88915773 36.27278475 7.65989932 36.26909138 5.43066406 36.26074219 C2.01349116 36.25004224 -1.403156 36.26063916 -4.8203125 36.2734375 C-6.98437616 36.2721159 -9.1484395 36.26955349 -11.3125 36.265625 C-12.33754639 36.26967346 -13.36259277 36.27372192 -14.41870117 36.27789307 C-15.84533081 36.26843658 -15.84533081 36.26843658 -17.30078125 36.25878906 C-18.13778564 36.25719788 -18.97479004 36.25560669 -19.8371582 36.25396729 C-22 36 -22 36 -25 34 C-25.40843923 31.28796348 -25.13336867 28.7562858 -25 26 C-23.68 26 -22.36 26 -21 26 C-20.95875 25.030625 -20.9175 24.06125 -20.875 23.0625 C-20.0822374 17.85140714 -17.57213964 13.81456029 -14 10 C-10.43231441 7.64521824 -6.38456057 5 -2 5 C-1.855625 4.360625 -1.71125 3.72125 -1.5625 3.0625 C-1 1 -1 1 0 0 Z M-14.9375 16.4375 C-17.31551032 19.78283656 -17.24027139 21.44162836 -18 26 C-4.8 26 8.4 26 22 26 C20.83005567 18.980334 18.65886722 15.34151649 13.46875 10.6015625 C3.73640422 3.8747941 -8.17246565 7.78901859 -14.9375 16.4375 Z M-23 29 C-22.34 30.32 -21.68 31.64 -21 33 C-5.82 33 9.36 33 25 33 C25.66 31.68 26.32 30.36 27 29 C10.5 29 -6 29 -23 29 Z " fill="#000000" transform="translate(30,14)"/>
            <path d="M0 0 C-1.65593745 3.58786447 -3.62837691 6.83783588 -6 10 C-6.99 10 -7.98 10 -9 10 C-8.69121904 6.39755548 -8.00552268 5.00654002 -5.625 2.1875 C-3 0 -3 0 0 0 Z " fill={fill} transform="translate(24,27)"/>
        </svg>
    );
}

LunchSvgSvg.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};