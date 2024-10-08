import PropTypes from 'prop-types';

export function SodaSvg({ fill }) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill={fill} stroke="none">
            <path d="M371 615 c-35 -13 -68 -29 -72 -37 -5 -7 -9 -34 -9 -60 l0 -48 -58 0
            c-55 0 -58 -1 -69 -30 -6 -16 -18 -30 -27 -30 -22 0 -20 -37 2 -49 15 -8 21
            -32 31 -133 6 -68 15 -147 18 -175 l6 -53 127 0 127 0 6 53 c3 28 12 107 18
            175 10 101 16 125 31 133 22 12 24 49 2 49 -9 0 -21 14 -27 30 -11 29 -14 30
            -69 30 l-58 0 0 39 c0 39 1 40 53 56 64 21 67 24 56 53 -10 27 -8 27 -88 -3z
            m67 -7 c-2 -6 -26 -19 -54 -28 -49 -16 -49 -17 -52 -63 -2 -26 -8 -47 -13 -47
            -6 0 -9 22 -7 53 l3 52 60 22 c73 26 68 26 63 11z m20 -180 c3 -16 -10 -18
            -135 -21 l-138 -3 158 -2 c96 -1 157 -6 157 -12 0 -6 -67 -10 -180 -10 -113 0
            -180 4 -180 10 0 6 7 10 15 10 9 0 20 11 25 25 l10 26 132 -3 c116 -3 133 -5
            136 -20z m-9 -230 c-10 -90 -18 -166 -18 -170 -1 -10 -221 -10 -222 0 0 4 -8
            80 -18 170 l-17 162 146 0 146 0 -17 -162z"/>
            </g>
        </svg>
    );
}

SodaSvg.propTypes = {
    fill: PropTypes.string,
};
