<template>
    <div>
        <div class="container"  id="section-home">
            <div class="row  px-3 px-lg-0" :class="[isMobile ? 'welcome-2' : 'welcome']">
                <div class="col-12 col-lg-7">
                    <div
                        class="d-flex flex-column h-100 justify-content-center"
                    >
                        <div
                            class="hello nav-item m me-3 animate__animated animate__slideInUp"
                            style="animation-delay: 0ms"
                        >
                            Hi, my name is
                        </div>
                        <div
                            class="name nav-item m me-3 animate__animated animate__slideInUp"
                            style="animation-delay: 100ms"
                        >
                            Christian Uyeh.
                        </div>
                        <div
                            class="build nav-item m me-3 animate__animated animate__fadeInUp"
                            style="animation-delay: 400ms"
                        >
                        I craft impactful digital experiences for the web.

                        </div>
                        <p
                            class="intro mb-3 nav-item m me-3 animate__animated animate__fadeInUp"
                            style="animation-delay: 500ms"
                        >
                          As a software engineer, I specialize in building exceptional websites, web applications, and everything in between — blending functionality with clean, modern design.
                        </p>

                        <div>
                            <a href="mailto:christianuyeh@gmail.com"
                                class="btn mt-4 in-touch nav-item m me-3 animate__animated animate__fadeInUp"
                                style="animation-delay: 600ms"
                                onclick="this.blur();">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <svg class="w-100 d-block d-lg-inline animate__animated animate__fadeInRight"
                        width="550"
                        height="600"
                        viewBox="0 0 490 470"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_11_0)">
                            <path
                                d="M420.21 175.891C394.707 75.4792 306.587 2.99573 203.152 0.0884837C148.469 -1.4485 90.9278 16.7106 49.0333 80.256C-25.8576 193.85 53.6355 272.347 109.056 309.648C135.831 327.705 159.956 349.416 180.734 374.154C218.169 418.634 290.185 473.906 375.952 387.303C438.117 324.533 437.198 242.776 420.21 175.891Z"
                                fill="#F2D492"
                            />
                            <path
                                d="M489.432 399.504C489.432 424.152 382.013 470 246.703 470C111.394 470 0 426.994 0 402.347C0 377.699 111.394 380.743 246.703 380.743C382.013 380.743 489.432 374.856 489.432 399.504Z"
                                fill="#3F3D56"
                            />
                            <path
                                opacity="0.1"
                                d="M489.432 399.504C489.432 424.152 382.013 470 246.703 470C111.394 470 0 426.994 0 402.347C0 377.699 111.394 380.743 246.703 380.743C382.013 380.743 489.432 374.856 489.432 399.504Z"
                                fill="black"
                            />
                            <path
                                d="M245 446.691C380.31 446.691 490 426.71 490 402.062C490 377.415 380.31 357.434 245 357.434C109.69 357.434 0 377.415 0 402.062C0 426.71 109.69 446.691 245 446.691Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M337.753 250.282V369.639L357.692 402.175L359.21 404.65H437.884L439.473 250.282H337.753Z"
                                fill="#2F2E41"
                            />
                            <path
                                opacity="0.1"
                                d="M337.753 250.282V369.639L357.692 402.175L358.916 250.282H337.753Z"
                                fill="black"
                            />
                            <path
                                d="M147.822 247.099V366.456L127.883 398.992L126.365 401.467H47.6907L46.1014 247.099H147.822Z"
                                fill="#2F2E41"
                            />
                            <path
                                opacity="0.1"
                                d="M147.822 247.099V366.456L127.883 398.992L126.659 247.099H147.822Z"
                                fill="black"
                            />
                            <path
                                d="M463.314 244.712V251.873H35.7706V241.529L75.5049 220.841H428.347L463.314 244.712Z"
                                fill="#2F2E41"
                            />
                            <path
                                opacity="0.1"
                                d="M463.314 244.712V251.873H35.7706V241.529L463.314 244.712Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M96.9615 280.519H77.889L69.9422 274.949H105.703L96.9615 280.519Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M96.9615 303.595H77.889L69.9422 298.024H105.703L96.9615 303.595Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M96.9615 336.219H77.889L69.9422 330.649H105.703L96.9615 336.219Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M96.9615 368.843H77.889L69.9422 363.273H105.703L96.9615 368.843Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M388.613 283.702H407.686L415.632 278.132H379.872L388.613 283.702Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M388.613 306.777H407.686L415.632 301.208H379.872L388.613 306.777Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M388.613 339.402H407.686L415.632 333.832H379.872L388.613 339.402Z"
                                fill="black"
                            />
                            <path
                                opacity="0.1"
                                d="M388.613 372.026H407.686L415.632 366.456H379.872L388.613 372.026Z"
                                fill="black"
                            />
                            <path
                                d="M302.355 200.929L299.705 217.875C299.705 217.875 286.654 224.816 295.83 225.021C305.006 225.225 348.234 225.021 348.234 225.021C348.234 225.021 356.595 225.021 343.341 217.67L340.69 199.908L302.355 200.929Z"
                                fill="#3F3D56"
                            />
                            <path
                                opacity="0.1"
                                d="M293.984 224.837C295.767 223.394 297.682 222.124 299.705 221.045L302.355 204.099L340.69 204.136L343.341 220.841C345.519 221.967 347.572 223.32 349.466 224.877C351.169 224.488 353.029 223.043 343.341 217.67L340.69 199.908L302.355 200.929L299.705 217.875C299.705 217.875 288.739 223.708 293.984 224.837Z"
                                fill="black"
                            />
                            <path
                                d="M401.601 82.8167H241.036C237.683 82.8167 234.964 85.5389 234.964 88.8969V197.196C234.964 200.554 237.683 203.277 241.036 203.277H401.601C404.955 203.277 407.674 200.554 407.674 197.196V88.8969C407.674 85.5389 404.955 82.8167 401.601 82.8167Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M401.862 89.248H240.775V179.491H401.862V89.248Z"
                                fill="#F2D492"
                            />
                            <path
                                d="M321.319 87.4105C321.882 87.4105 322.338 86.9534 322.338 86.3897C322.338 85.8259 321.882 85.3688 321.319 85.3688C320.756 85.3688 320.299 85.8259 320.299 86.3897C320.299 86.9534 320.756 87.4105 321.319 87.4105Z"
                                fill="#F2F2F2"
                            />
                            <path
                                d="M407.674 186.637V197.196C407.674 197.995 407.517 198.785 407.212 199.523C406.906 200.261 406.459 200.931 405.895 201.496C405.331 202.06 404.662 202.508 403.925 202.814C403.188 203.119 402.399 203.277 401.601 203.276H241.036C240.239 203.277 239.449 203.119 238.712 202.814C237.976 202.508 237.306 202.06 236.742 201.496C236.178 200.931 235.731 200.261 235.426 199.523C235.121 198.785 234.964 197.995 234.964 197.196V186.637H407.674Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M321.319 198.887C323.458 198.887 325.193 197.15 325.193 195.008C325.193 192.865 323.458 191.128 321.319 191.128C319.179 191.128 317.445 192.865 317.445 195.008C317.445 197.15 319.179 198.887 321.319 198.887Z"
                                fill="#F2F2F2"
                            />
                            <path
                                d="M315.281 236.045V238.088H205.579V236.454L205.73 236.045L208.434 228.696H313.038L315.281 236.045Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M357.498 234.047C357.299 234.902 356.544 235.805 354.84 236.658C348.722 239.721 336.284 235.841 336.284 235.841C336.284 235.841 326.7 234.208 326.7 229.921C326.969 229.736 327.25 229.569 327.54 229.42C330.112 228.058 338.64 224.696 353.76 229.563C354.874 229.913 355.869 230.566 356.634 231.449C356.973 231.782 357.228 232.192 357.378 232.644C357.529 233.095 357.57 233.576 357.498 234.047Z"
                                fill="#3F3D56"
                            />
                            <path
                                opacity="0.1"
                                d="M357.498 234.047C350.011 236.92 343.337 237.134 336.488 232.371C333.034 229.97 329.896 229.375 327.54 229.42C330.112 228.058 338.64 224.696 353.76 229.563C354.874 229.913 355.869 230.566 356.634 231.449C356.973 231.782 357.228 232.192 357.378 232.644C357.529 233.095 357.57 233.576 357.498 234.047Z"
                                fill="black"
                            />
                            <path
                                d="M348.111 232.371C349.575 232.371 350.761 232.005 350.761 231.554C350.761 231.103 349.575 230.737 348.111 230.737C346.647 230.737 345.46 231.103 345.46 231.554C345.46 232.005 346.647 232.371 348.111 232.371Z"
                                fill="#F2F2F2"
                            />
                            <path
                                opacity="0.1"
                                d="M315.281 236.045V238.088H205.579V236.454L205.73 236.045H315.281Z"
                                fill="black"
                            />
                            <path
                                d="M377.972 131.868C377.107 131.001 365.999 116.991 364.124 114.68C362.104 112.369 361.239 112.802 359.94 112.946C358.642 113.091 344.649 115.546 343.063 115.691C341.476 115.98 340.466 116.557 341.476 118.002C342.341 119.302 351.574 132.301 353.593 135.334L316.808 144.145L287.669 95.1803C286.515 93.447 286.226 92.8693 283.63 93.0137C281.033 93.1581 260.693 94.8914 259.251 94.8914C257.808 95.0359 256.221 95.6136 257.664 99.0802C259.107 102.547 282.187 152.234 282.764 153.678C283.341 155.123 285.072 157.434 288.967 156.567C293.006 155.556 306.855 151.945 314.5 149.923C318.539 157.145 326.618 171.878 328.204 174.044C330.224 176.933 331.666 176.355 334.696 175.489C337.148 174.766 372.49 162.056 374.077 161.334C375.664 160.611 376.674 160.178 375.52 158.589C374.654 157.434 365.422 144.867 360.517 138.368C363.835 137.501 375.808 134.323 377.107 133.89C378.549 133.457 378.838 132.735 377.972 131.868V131.868ZM311.182 145.59C310.75 145.734 290.121 150.645 289.111 150.934C287.957 151.223 287.957 151.078 287.957 150.645C287.669 150.212 263.434 99.9468 263.001 99.3691C262.713 98.7913 262.713 98.2136 263.001 98.2136C263.29 98.2136 282.476 96.4803 283.053 96.4803C283.774 96.4803 283.63 96.6247 283.918 97.058C283.918 97.058 310.894 143.712 311.327 144.434C311.904 145.156 311.615 145.445 311.182 145.59V145.59ZM369.173 156.423C369.461 157 369.894 157.289 368.74 157.578C367.73 158.011 333.974 169.422 333.253 169.711C332.532 170 332.099 170.144 331.234 168.844C330.368 167.544 319.405 148.623 319.405 148.623L355.324 139.234C356.19 138.945 356.478 138.801 357.055 139.668C357.632 140.679 368.884 155.989 369.173 156.423V156.423ZM371.481 131.001C370.615 131.146 357.488 134.468 357.488 134.468L346.669 119.735C346.38 119.302 346.092 118.868 346.813 118.724C347.534 118.58 359.796 116.413 360.373 116.268C360.95 116.124 361.383 115.98 362.104 116.991C362.825 117.857 372.058 129.701 372.49 130.135C372.923 130.568 372.346 130.857 371.481 131.001V131.001Z"
                                fill="#FB503B"
                            />
                            <path
                                d="M224.071 110.372C236.064 110.372 245.787 100.637 245.787 88.6285C245.787 76.6197 236.064 66.8846 224.071 66.8846C212.077 66.8846 202.355 76.6197 202.355 88.6285C202.355 100.637 212.077 110.372 224.071 110.372Z"
                                fill="#FFB9B9"
                            />
                            <path
                                d="M208.07 99.5004V133.833H243.501C243.501 133.833 238.929 105.222 241.215 96.6394L208.07 99.5004Z"
                                fill="#FFB9B9"
                            />
                            <path
                                d="M278.361 145.849C278.361 145.849 244.644 129.255 244.644 128.111C244.644 126.966 241.215 119.528 238.929 119.528C236.643 119.528 217.213 113.233 206.355 122.389L205.212 129.827L163.495 157.293L174.924 199.064C174.924 199.064 182.353 207.075 180.067 212.797C177.782 218.519 181.782 247.702 181.782 247.702L271.503 244.841V205.931C271.503 205.931 274.36 196.775 276.075 193.914C277.789 191.053 276.075 182.47 276.075 182.47L289.79 165.304C289.79 165.304 288.076 149.282 278.361 145.849Z"
                                fill="#D0CDE1"
                            />
                            <path
                                opacity="0.1"
                                d="M164.923 171.312L167.495 157.293C167.495 157.293 152.637 221.953 154.351 229.391C156.066 236.83 168.638 248.274 170.352 248.846C172.067 249.418 188.068 199.636 188.068 199.636L164.923 171.312Z"
                                fill="black"
                            />
                            <path
                                d="M173.21 155.577L163.495 157.293C163.495 157.293 148.636 221.952 150.351 229.391C152.065 236.83 164.638 248.274 166.352 248.846C168.067 249.418 184.068 199.636 184.068 199.636L173.21 155.577Z"
                                fill="#D0CDE1"
                            />
                            <path
                                opacity="0.1"
                                d="M281.504 174.746L286.361 165.304C286.361 165.304 293.219 229.963 288.647 236.258C284.075 242.552 265.991 244.907 265.991 244.907L265.788 197.92L281.504 174.746Z"
                                fill="black"
                            />
                            <path
                                d="M282.361 157.865L289.79 165.304C289.79 165.304 296.648 229.963 292.076 236.258C287.504 242.552 269.42 244.907 269.42 244.907L269.217 197.92L282.361 157.865Z"
                                fill="#D0CDE1"
                            />
                            <path
                                d="M171.495 256.285C171.495 256.285 154.923 249.991 152.065 262.007C149.208 274.023 158.923 327.811 158.923 327.811C158.923 327.811 165.209 368.437 169.209 369.582C173.21 370.726 190.925 371.298 193.783 366.148C196.64 360.999 185.211 308.356 185.211 308.356L251.502 307.211C251.502 307.211 247.501 352.988 245.215 356.993C242.929 360.999 242.929 374.732 245.215 374.732C247.501 374.732 272.646 373.587 274.36 370.154C276.075 366.721 285.79 289.473 285.79 289.473C285.79 289.473 293.79 262.579 284.647 264.296C275.503 266.012 171.495 256.285 171.495 256.285Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M269.217 367.865C269.217 367.865 274.932 363.86 277.789 367.865C280.647 371.871 281.79 376.448 269.217 383.315C256.645 390.181 246.93 388.465 246.93 387.32V370.726L269.217 367.865Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M170.352 366.148C170.352 366.148 164.638 362.143 161.78 366.148C158.923 370.154 157.78 374.732 170.352 381.598C182.925 388.465 192.64 386.748 192.64 385.603V369.009L170.352 366.148Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M224.212 61.2116C222.049 61.1364 219.889 61.4446 217.833 62.1219C216.239 62.7636 214.716 63.5703 213.29 64.5291L203.702 70.4986C202.888 70.8513 202.197 71.4374 201.715 72.1831C201.234 72.9288 200.983 73.8006 200.996 74.6885L199.798 83.6721C199.496 85.9392 199.217 88.3637 200.231 90.4134C201.077 92.1243 202.69 93.295 204.017 94.6662C206.139 96.8696 207.568 99.6496 208.125 102.66C208.811 106.411 208.372 110.928 211.336 113.321C212.942 114.617 215.129 114.863 217.188 114.983C222.817 115.312 228.465 115.094 234.052 114.333C234.94 114.267 235.806 114.024 236.6 113.618C237.607 113.021 238.242 111.968 238.835 110.957C240.976 107.307 243.182 103.425 243.159 99.192C243.148 97.0981 242.613 94.8492 243.617 93.0124C244.147 92.2316 244.723 91.4828 245.341 90.7696C246.585 89.0204 246.827 86.7729 247.029 84.6355C247.676 77.8083 247 72.6129 241.975 67.8038C237.284 63.3145 230.609 61.253 224.212 61.2116Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M170.868 323.885L151.796 420.962H161.332L179.61 325.477L170.868 323.885Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M232.059 331.843L243.98 443.242H251.926L244.774 328.659L232.059 331.843Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M264.641 328.659L281.33 402.661H289.277L273.383 327.068L264.641 328.659Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M201.066 328.659L198.682 387.542H205.04L209.808 328.659H201.066Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M157.358 313.541C157.358 313.541 144.643 228.4 180.404 226.013C216.165 223.626 267.026 226.013 267.026 226.013C267.026 226.013 296.429 223.626 287.688 313.541C287.688 313.541 295.634 339.799 224.112 337.412C152.59 335.025 157.358 313.541 157.358 313.541Z"
                                fill="#F29559"
                            />
                            <path
                                id="leaf"
                                d="M483.187 348.31C483.187 363.157 474.372 368.341 463.498 368.341C452.624 368.341 443.809 363.157 443.809 348.31C443.809 333.463 463.498 314.575 463.498 314.575C463.498 314.575 483.187 333.463 483.187 348.31Z"
                                fill="#F29559"
                            />
                            <path
                                d="M462.982 353.644L471.374 338.272L463.014 351.695L463.104 346.108L468.888 334.986L463.128 344.629L463.291 334.581L469.485 325.727L463.317 333.001L463.419 314.575L462.806 337.922L456.535 328.31L462.73 339.892L462.144 351.115L462.126 350.817L454.867 340.661L462.104 351.869L462.031 353.273L462.018 353.294L462.024 353.409L460.535 368.385H462.524L462.763 367.175L469.982 355.994L462.78 366.07L462.982 353.644Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M476.072 400.547H452.599L446.533 366.217H480.819L476.072 400.547Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M131.159 168.451H82.3291V225.774H131.159V168.451Z"
                                fill="#3F3D56"
                            />
                            <path
                                d="M123.582 177.346H89.9061V216.879H123.582V177.346Z"
                                fill="#F2D492"
                            />
                            <path
                                d="M110.119 185.742L106.699 191.673L103.279 185.742H91.8921L106.699 211.422L121.506 185.742H110.119Z"
                                fill="#4DBA87"
                            />
                            <path
                                d="M110.119 185.742L106.699 191.673L103.279 185.742H97.8149L106.699 201.15L115.583 185.742H110.119Z"
                                fill="#435466"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_11_0">
                                <rect width="490" height="470" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="container" :class="{'my-section' : !isMobile}" id="section-about">
            <div class="row about  px-3 px-lg-0">
                <div class="col-12 col-lg-6">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="active-text nav-item m me-3">About Me</div>
                        <svg
                            class="ms-3"
                            width="133"
                            height="7"
                            viewBox="0 0 133 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0H54V7H27H0V0Z" fill="#F29559" />
                            <path d="M79 0H133V7H106H79V0Z" fill="#F29559" />
                        </svg>

                        <div class="company-sub mt-4">
                            <p>
                                Hello! I'm Christian Uyeh, a software developer
                                passionate about building innovative and
                                efficient solutions. I enjoy using technology to
                                solve complex problems and constantly work to
                                improve my skills in both frontend and backend
                                development.
                            </p>
                            <p>
                                I’m experienced with HTML, CSS, SCSS, PHP,
                                JavaScript, jQuery, SQL, MySQL, Laravel,
                                Bootstrap, Vue.js, Tailwind, and Git. I've
                                worked on various projects, including
                                <a
                                    class="text-white font-weight-bold"
                                    href="https://worksy.io/"
                                    target="_blank"
                                    >Worksy.io</a
                                >, helping businesses streamline their
                                operations. I focus on writing clean, scalable
                                code, collaborating with teams, and delivering
                                reliable, high-quality applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 d-flex justify-content-end align-items-center">
                    <div class="about-img"></div>
                </div>
            </div>
        </div>
        <div class="container my-section"  id="section-experience">
            <div class="about px-3 px-lg-0">
                <div class="active-text nav-item m me-3">Experience</div>
                <svg
                    class="ms-3"
                    width="133"
                    height="7"
                    viewBox="0 0 133 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0H54V7H27H0V0Z" fill="#F29559" />
                    <path d="M79 0H133V7H106H79V0Z" fill="#F29559" />
                </svg>
                <div v-if="isMobile" class="vertical-nav d-flex mt-5">
                  <div class="d-flex align-items-center"  @click="companySelect = 'first'"
                            :class="[
                                companySelect === 'first'
                                    ? 'vertical-nav-active'
                                    : 'vertical-nav-inactive',
                            ]">Lightman</div>
                    <div class="d-flex align-items-center"  @click="companySelect = 'second'"
                            :class="[
                                companySelect === 'second'
                                    ? 'vertical-nav-active'
                                    : 'vertical-nav-inactive',
                            ]">Legion</div>
                </div>
                <div class="d-flex w-100 mt-5">
                    <div v-if="!isMobile" class="horizonal-nav">
                        <div
                            @click="companySelect = 'first'"
                            :class="[
                                companySelect === 'first'
                                    ? 'horizonal-nav-active'
                                    : 'horizonal-nav-inactive',
                            ]"
                        >
                            Lightman
                        </div>
                        <div
                            @click="companySelect = 'second'"
                            :class="[
                                companySelect === 'second'
                                    ? 'horizonal-nav-active'
                                    : 'horizonal-nav-inactive',
                            ]"
                        >
                            Legion
                        </div>
                    </div>
                    <div
                        v-if="companySelect === 'first'"
                        class="d-flex flex-column animate__animated animate__fadeIn"
                    >
                        <div class="d-flex mb-4">
                            <div class="me-2" :class="[isMobile ? 'header-about-2' : 'header-about']">
                                Software Developer
                            </div>
                            <a
                                href="https://worksy.io/"
                                target="_blank"
                                style="text-decoration: none; color: inherit"
                            >
                            <div class=""  :class="[isMobile ? 'header-about-company-2' : 'header-about-company']">
                                    @ Lightman Consulting Sdn Bhd
                                </div></a
                            >
                        </div>
                        <div class="header-sub-header mb-3">
                            May 2019 - <span class="main-color">Present</span>
                        </div>

                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Collaborated to create strategic initiaticves to
                                design, code, and test solutions.
                            </p>
                        </div>
                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Effectively coded software changes and
                                alterations based on specific design
                                <br />specifications.
                            </p>
                        </div>
                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Work with a variety of different languages,
                                frameworks, such as JavaScript, Vue<br />
                                js, Native Script , php, Laravel frameworks,
                                Bootstrap, CSS, Sass etc. Develop HR <br />
                                management system
                            </p>
                            <br />
                        </div>
                    </div>

                    <div
                        v-if="companySelect === 'second'"
                        class="d-flex flex-column animate__animated animate__fadeIn"
                    >
                        <div class="d-flex mb-4">
                            <div class="me-2" :class="[isMobile ? 'header-about-2' : 'header-about']">
                                Software Developer
                            </div>
                            <div class=""  :class="[isMobile ? 'header-about-company-2' : 'header-about-company']">
                                @ Legion Technology Enterprise
                            </div>
                        </div>
                        <div class="header-sub-header mb-3">
                            January 2019 — March 2019
                        </div>

                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Effectively coded software changes and
                                alterations based on specific design<br />
                                specifications.
                            </p>
                        </div>
                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Worked with a team of designers to build a
                                marketing website for Night life and<br />
                                entertainment.
                            </p>
                        </div>
                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Maintain and update Legion Technology website
                            </p>
                            <br />
                        </div>
                        <div class="d-flex">
                            <span class="active-small-nav me-3 mt-2"></span>
                            <p class="company-sub">
                                Using language and framework such as, Php ,
                                JavaScript, CSS, jQuery etc.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" :class="{'my-section' : !isMobile}"   id="section-project">
            <div class="about">
                <div class="active-text nav-item m me-3">Projects</div>
                <svg
                    class="ms-3"
                    width="133"
                    height="7"
                    viewBox="0 0 133 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0H54V7H27H0V0Z" fill="#F29559" />
                    <path d="M79 0H133V7H106H79V0Z" fill="#F29559" />
                </svg>

                <div class="text-center">
                    <div class="row mt-5">
                        <div class="col-12 col-lg mb-3">
                            <div
                                class="card card-bg shadow-lg" :class="[isMobile ? 'card-project-2' : 'card-project']"
                                @click="()=>{$router.push('/currency-converter');$emit('toggleDrawer');}"
                            >
                                <img
                                    src="/public/CurrencyConverter-small.png"
                                    class="card-img-top w-100 h-100"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title main-moph">
                                        CurrencyConverter
                                    </h5>
                                    <p class="card-text text-light">
                                        Stay ahead with real-time exchange rates
                                        and make confident.....
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
    props:{
        navSelect : String,
    },
    inject: ["shared"],
    data() {
        return {
            companySelect: "first",
            isMobile: window.innerWidth < 992

        };
    },
    computed: {
        state: {
            get() {
                return this.shared.state;
            },
            set(val) {
                this.shared.state = val;
            },
        },
    },
    methods: {
         checkMobile() {
          this.isMobile = window.innerWidth < 992;
        }

    },
     beforeDestroy() {
       window.removeEventListener("resize", this.checkMobile);
    },
    created() {},
    mounted() {
     window.addEventListener("resize", this.checkMobile);
    },
};
</script>
