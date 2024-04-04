import React from 'react';

export function Wine({ fill, height, width }) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill={fill} stroke="none">
            <path d="M293 621 c-18 -15 -22 -26 -17 -50 6 -26 11 -31 35 -31 16 0 32 0 37
            0 4 0 11 14 15 31 6 25 4 33 -15 49 -28 24 -28 24 -55 1z m40 -17 c20 -7 9
            -44 -13 -44 -20 0 -34 37 -16 44 6 2 12 5 13 5 1 1 8 -2 16 -5z"/>
            <path d="M220 581 c0 -5 9 -19 20 -32 22 -28 28 -6 6 24 -14 18 -26 22 -26 8z"/>
            <path d="M401 559 c-13 -11 -21 -22 -18 -25 7 -7 57 25 57 37 0 14 -13 10 -39
            -12z"/>
            <path d="M170 522 c0 -10 60 -25 68 -17 8 8 0 12 -35 20 -19 4 -33 3 -33 -3z"/>
            <path d="M375 506 c-49 -15 -52 -31 -30 -147 17 -90 32 -115 78 -127 24 -6 32
            -16 43 -52 19 -62 17 -74 -8 -85 -26 -12 -31 -25 -18 -45 8 -13 16 -13 67 0
            51 13 58 18 58 40 0 22 -4 25 -31 23 -31 -3 -32 -1 -47 58 l-15 61 24 22 c28
            23 36 79 14 99 -10 10 -11 7 -6 -15 3 -15 1 -38 -6 -53 -21 -46 -95 -46 -116
            0 -18 40 -14 58 16 77 15 10 35 23 44 30 15 10 22 10 39 0 21 -13 21 -12 15
            15 -4 15 -16 47 -26 71 -21 46 -28 48 -95 28z m81 -41 c17 -42 17 -45 2 -45
            -7 0 -26 -11 -42 -25 -38 -33 -52 -32 -60 6 -12 64 -8 78 27 88 51 15 57 13
            73 -24z m94 -374 c0 -11 -54 -31 -83 -31 -26 0 -14 12 26 27 40 14 57 16 57 4z"/>
            <path d="M176 465 c-9 -24 -8 -35 4 -35 6 0 10 7 10 15 0 18 21 19 72 5 26 -8
            35 -15 33 -28 -14 -71 -11 -67 -62 -66 -75 2 -75 2 -68 24 4 11 2 20 -4 20 -6
            0 -19 -28 -29 -62 -21 -68 -16 -107 19 -131 17 -13 17 -16 2 -74 -16 -58 -18
            -61 -47 -59 -26 1 -31 -3 -31 -23 0 -21 8 -26 53 -39 48 -13 55 -13 69 1 13
            13 14 19 3 31 -7 9 -19 16 -28 16 -11 0 -13 8 -8 39 10 64 24 91 46 91 32 0
            23 18 -12 22 -20 2 -38 13 -51 29 -17 23 -18 31 -8 62 l12 36 62 -2 62 -2 -3
            -35 c-2 -19 -8 -43 -14 -53 -11 -21 -3 -36 12 -21 10 10 40 160 40 202 0 25
            -29 40 -91 49 -28 4 -37 1 -43 -12z m-25 -417 c37 -11 53 -28 27 -28 -27 0
            -88 21 -88 30 0 13 14 12 61 -2z"/>
            </g>
        </svg>
    );
}

export function Champagne({ fill, height, width }) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="72" height="45">
            <path d="M0 0 C1.875 1.125 1.875 1.125 3 3 C2.87901316 6.38763145 2.7548982 8.94314251 0.75 11.75 C-1 13 -1 13 -3.375 14.25 C-8.52873602 17.68582402 -11.23515466 23.18010641 -13.72387695 28.69458008 C-17.48163177 37.00521474 -22.06863069 43.21262865 -28.55908203 49.56347656 C-30.05339518 51.05323233 -31.47926713 52.59067427 -32.90234375 54.1484375 C-33.85077259 55.16219792 -34.79996552 56.17524414 -35.75 57.1875 C-36.59046875 58.08855469 -37.4309375 58.98960938 -38.296875 59.91796875 C-41.753227 62.58015895 -43.63039144 63.21280561 -48 63 C-50.76220884 61.39347827 -52.81169741 59.30793644 -55 57 C-55.59683594 56.43410156 -56.19367187 55.86820313 -56.80859375 55.28515625 C-59.64960203 52.39165821 -60.90375962 50.74892512 -61.4296875 46.65625 C-59.24734378 41.07517425 -55.39508156 37.60784442 -51.125 33.5 C-50.31546875 32.68402344 -49.5059375 31.86804687 -48.671875 31.02734375 C-41.25882688 23.74291319 -33.12547209 18.2350037 -23.6875 13.875 C-16.91274195 10.56660132 -12.89676585 7.55365166 -9 1 C-5.82759773 -1.32642833 -3.68383623 -1.22794541 0 0 Z M-7 3 C-5.95125002 5.62187494 -5.35068687 6.79371361 -2.875 8.25 C-2.25625 8.4975 -1.6375 8.745 -1 9 C-2.04874998 6.37812506 -2.64931313 5.20628639 -5.125 3.75 C-6.053125 3.37875 -6.053125 3.37875 -7 3 Z M-14.125 11.5 C-14.84945312 12.1496875 -15.57390625 12.799375 -16.3203125 13.46875 C-16.87460937 13.9740625 -17.42890625 14.479375 -18 15 C-16.35 16.65 -14.7 18.3 -13 20 C-10.69 17.36 -8.38 14.72 -6 12 C-6.66 10.68 -7.32 9.36 -8 8 C-10.94354357 8 -11.97578837 9.55877659 -14.125 11.5 Z M-22 17 C-30.74877785 20.83322741 -37.2325398 25.30977187 -44 32 C-45.25528722 33.18489096 -46.51188881 34.36839041 -47.76953125 35.55078125 C-49.07692364 36.80322479 -50.38291814 38.0571292 -51.6875 39.3125 C-52.64342041 40.2106543 -52.64342041 40.2106543 -53.61865234 41.12695312 C-54.20211426 41.69994141 -54.78557617 42.27292969 -55.38671875 42.86328125 C-55.91483154 43.37157471 -56.44294434 43.87986816 -56.98706055 44.40356445 C-58.21366389 45.97392117 -58.21366389 45.97392117 -57.79736328 48.03271484 C-56.5626744 51.07898643 -54.48351903 52.98958763 -52.1875 55.3125 C-51.31480469 56.21613281 -50.44210938 57.11976562 -49.54296875 58.05078125 C-47.28447531 60.22472145 -47.28447531 60.22472145 -45.12573242 59.87939453 C-40.27936458 57.87449997 -36.75972869 53.22607574 -33.125 49.5625 C-32.23941406 48.69689453 -31.35382812 47.83128906 -30.44140625 46.93945312 C-23.49357299 39.98644265 -17.54661444 32.67713487 -15 23 C-17.31 21.02 -19.62 19.04 -22 17 Z " fill={fill} transform="translate(61,1)"/>
            <path d="M0 0 C2.4056114 1.07140676 3.83431681 2.06779218 5.63671875 3.97265625 C6.14847656 4.49730469 6.66023438 5.02195312 7.1875 5.5625 C8.32421875 7.03515625 8.32421875 7.03515625 8.32421875 9.03515625 C4.52833009 8.49288644 2.85209882 6.83388062 0.32421875 4.03515625 C-3.57863892 5.62183203 -6.01099107 8.16866106 -8.92578125 11.16015625 C-10.26382812 12.52527344 -10.26382812 12.52527344 -11.62890625 13.91796875 C-12.304375 14.61664063 -12.97984375 15.3153125 -13.67578125 16.03515625 C-13.24265625 16.51726563 -12.80953125 16.999375 -12.36328125 17.49609375 C-11.80640625 18.12773438 -11.24953125 18.759375 -10.67578125 19.41015625 C-9.84046875 20.34988281 -9.84046875 20.34988281 -8.98828125 21.30859375 C-7.67578125 23.03515625 -7.67578125 23.03515625 -7.67578125 25.03515625 C-11.27484033 24.4796493 -12.67487924 23.28628377 -14.92578125 20.47265625 C-15.4465625 19.83199219 -15.96734375 19.19132812 -16.50390625 18.53125 C-16.890625 18.03753906 -17.27734375 17.54382813 -17.67578125 17.03515625 C-15.28526718 12.60034049 -12.29762821 9.2257373 -8.80078125 5.66015625 C-8.28386719 5.10199219 -7.76695313 4.54382812 -7.234375 3.96875 C-3.38765014 0.04450927 -3.38765014 0.04450927 0 0 Z " fill={fill} transform="translate(27.67578125,31.96484375)"/>
        </svg>
    );
}