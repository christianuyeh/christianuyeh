<template>
    <div class="wrapper">
        <div class="animStar">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
        </div>
         <div v-if="!isMobile" class="social">
            <div class="mb-4">
                <a href="https://github.com/christianuyeh" target="_blank" rel="noopener noreferrer"><svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.68952 15.5234C6.68952 15.6016 6.59677 15.6641 6.47984 15.6641C6.34677 15.6758 6.25403 15.6133 6.25403 15.5234C6.25403 15.4453 6.34677 15.3828 6.46371 15.3828C6.58468 15.3711 6.68952 15.4336 6.68952 15.5234ZM5.43548 15.3477C5.40726 15.4258 5.4879 15.5156 5.60887 15.5391C5.71371 15.5781 5.83468 15.5391 5.85887 15.4609C5.88306 15.3828 5.80645 15.293 5.68548 15.2578C5.58065 15.2305 5.46371 15.2695 5.43548 15.3477ZM7.21774 15.2813C7.10081 15.3086 7.02016 15.3828 7.03226 15.4727C7.04435 15.5508 7.14919 15.6016 7.27016 15.5742C7.3871 15.5469 7.46774 15.4727 7.45565 15.3945C7.44355 15.3203 7.33468 15.2695 7.21774 15.2813ZM9.87097 0.312496C4.27823 0.312496 0 4.42578 0 9.84375C0 14.1758 2.81452 17.8828 6.83468 19.1875C7.35081 19.2773 7.53226 18.9688 7.53226 18.7148C7.53226 18.4727 7.52016 17.1367 7.52016 16.3164C7.52016 16.3164 4.69758 16.9023 4.10484 15.1523C4.10484 15.1523 3.64516 14.0156 2.98387 13.7227C2.98387 13.7227 2.06048 13.1094 3.04839 13.1211C3.04839 13.1211 4.05242 13.1992 4.60484 14.1289C5.4879 15.6367 6.96774 15.2031 7.54435 14.9453C7.6371 14.3203 7.89919 13.8867 8.18952 13.6289C5.93548 13.3867 3.66129 13.0703 3.66129 9.3125C3.66129 8.23828 3.96774 7.69922 4.6129 7.01172C4.50806 6.75781 4.16532 5.71094 4.71774 4.35937C5.56048 4.10547 7.5 5.41406 7.5 5.41406C8.30645 5.19531 9.17339 5.08203 10.0323 5.08203C10.8911 5.08203 11.7581 5.19531 12.5645 5.41406C12.5645 5.41406 14.504 4.10156 15.3468 4.35937C15.8992 5.71484 15.5565 6.75781 15.4516 7.01172C16.0968 7.70312 16.4919 8.24219 16.4919 9.3125C16.4919 13.082 14.1169 13.3828 11.8629 13.6289C12.2339 13.9375 12.5484 14.5234 12.5484 15.4414C12.5484 16.7578 12.5363 18.3867 12.5363 18.707C12.5363 18.9609 12.7218 19.2695 13.2339 19.1797C17.2661 17.8828 20 14.1758 20 9.84375C20 4.42578 15.4637 0.312496 9.87097 0.312496ZM3.91935 13.7852C3.86694 13.8242 3.87903 13.9141 3.94758 13.9883C4.0121 14.0508 4.10484 14.0781 4.15726 14.0273C4.20968 13.9883 4.19758 13.8984 4.12903 13.8242C4.06452 13.7617 3.97177 13.7344 3.91935 13.7852ZM3.48387 13.4687C3.45565 13.5195 3.49597 13.582 3.57661 13.6211C3.64113 13.6602 3.72177 13.6484 3.75 13.5938C3.77823 13.543 3.7379 13.4805 3.65726 13.4414C3.57661 13.418 3.5121 13.4297 3.48387 13.4687ZM4.79032 14.8594C4.72581 14.9102 4.75 15.0273 4.84274 15.1016C4.93548 15.1914 5.05242 15.2031 5.10484 15.1406C5.15726 15.0898 5.13306 14.9727 5.05242 14.8984C4.96371 14.8086 4.84274 14.7969 4.79032 14.8594ZM4.33065 14.2852C4.26613 14.3242 4.26613 14.4258 4.33065 14.5156C4.39516 14.6055 4.50403 14.6445 4.55645 14.6055C4.62097 14.5547 4.62097 14.4531 4.55645 14.3633C4.5 14.2734 4.39516 14.2344 4.33065 14.2852Z"
                            fill="#F2D492"
                        />
                    </svg>
                </a>
            </div>
            <div class="mb-4">
                <a  href="https://www.linkedin.com/in/christian-uyeh-9b416a179/" target="_blank" rel="noopener noreferrer"
                    ><svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.47679 17.5005H0.330357V5.81686H4.47679V17.5005ZM2.40134 4.22311C1.07545 4.22311 0 3.26218 0 2.10202C9.49017e-09 1.54475 0.252998 1.01031 0.703336 0.616268C1.15367 0.222222 1.76446 0.000849247 2.40134 0.000849247C3.03821 0.000849247 3.649 0.222222 4.09934 0.616268C4.54968 1.01031 4.80268 1.54475 4.80268 2.10202C4.80268 3.26218 3.72679 4.22311 2.40134 4.22311ZM19.9955 17.5005H15.858V11.813C15.858 10.4575 15.8268 8.7192 13.7022 8.7192C11.5464 8.7192 11.2161 10.1919 11.2161 11.7153V17.5005H7.07411V5.81686H11.0509V7.41061H11.1089C11.6625 6.49264 13.0147 5.52389 15.0321 5.52389C19.2286 5.52389 20 7.94186 20 11.0825V17.5005H19.9955Z"
                            fill="#F2D492"
                        />
                    </svg>
                </a>
            </div>
            <div class="mb-4">
                <a href="https://codepen.io/uhchristian" target="_blank" rel="noopener noreferrer">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.6205 6.23843L10.4799 0.144655C10.1679 -0.0473383 9.8349 -0.0490961 9.52006 0.144655L0.379452 6.23843C0.145078 6.39464 0 6.6737 0 6.95269V13.0464C0 13.3254 0.145078 13.6045 0.379491 13.7607L9.5201 19.8553C9.83209 20.0473 10.1651 20.0491 10.4799 19.8553L19.6205 13.7607C19.8549 13.6045 20 13.3254 20 13.0464V6.95269C20 6.6737 19.8549 6.39464 19.6205 6.23843ZM10.8594 2.46603L17.5893 6.95269L14.587 8.96164L10.8594 6.47276V2.46603ZM9.14061 2.46603V6.47276L5.41292 8.96164L2.4107 6.95269L9.14061 2.46603ZM1.71875 8.55984L3.87277 9.99957L1.71875 11.4393V8.55984ZM9.14061 17.5331L2.4107 13.0465L5.41292 11.0375L9.14061 13.5264V17.5331ZM9.99998 12.0308L6.96424 9.99957L9.99998 7.96831L13.0357 9.99957L9.99998 12.0308ZM10.8594 17.5331V13.5264L14.587 11.0375L17.5893 13.0465L10.8594 17.5331ZM18.2812 11.4393L16.1272 9.99957L18.2812 8.55984V11.4393Z"
                            fill="#F2D492"
                        />
                    </svg>
                </a>
            </div>
            <div class="mb-4">
                <a href="https://www.instagram.com/christianuyeh/" target="_blank" rel="noopener noreferrer">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_29_25)">
                            <path
                                d="M10.0044 5.50782C7.16516 5.50782 4.87498 7.51172 4.87498 9.9961C4.87498 12.4805 7.16516 14.4844 10.0044 14.4844C12.8437 14.4844 15.1339 12.4805 15.1339 9.9961C15.1339 7.51172 12.8437 5.50782 10.0044 5.50782ZM10.0044 12.9141C8.16962 12.9141 6.66962 11.6055 6.66962 9.9961C6.66962 8.38672 8.16516 7.07813 10.0044 7.07813C11.8437 7.07813 13.3393 8.38672 13.3393 9.9961C13.3393 11.6055 11.8393 12.9141 10.0044 12.9141ZM16.5401 5.32422C16.5401 5.90625 16.0044 6.3711 15.3437 6.3711C14.6785 6.3711 14.1473 5.90235 14.1473 5.32422C14.1473 4.7461 14.683 4.27735 15.3437 4.27735C16.0044 4.27735 16.5401 4.7461 16.5401 5.32422ZM19.9375 6.38672C19.8616 4.98438 19.4955 3.74219 18.3214 2.71875C17.1518 1.69531 15.7321 1.375 14.1294 1.30469C12.4777 1.22266 7.52677 1.22266 5.87498 1.30469C4.27677 1.37109 2.85713 1.69141 1.68302 2.71484C0.508919 3.73828 0.147312 4.98047 0.0669555 6.38282C-0.0267944 7.82813 -0.0267944 12.1602 0.0669555 13.6055C0.142848 15.0078 0.508919 16.25 1.68302 17.2735C2.85713 18.2969 4.27231 18.6172 5.87498 18.6875C7.52677 18.7695 12.4777 18.7695 14.1294 18.6875C15.7321 18.6211 17.1518 18.3008 18.3214 17.2735C19.491 16.25 19.8571 15.0078 19.9375 13.6055C20.0312 12.1602 20.0312 7.83204 19.9375 6.38672ZM17.8035 15.1563C17.4553 15.9219 16.7812 16.5117 15.9018 16.8203C14.5848 17.2774 11.4598 17.1719 10.0044 17.1719C8.54909 17.1719 5.41963 17.2735 4.10713 16.8203C3.23213 16.5156 2.55802 15.9258 2.20535 15.1563C1.68302 14.0039 1.80356 11.2695 1.80356 9.9961C1.80356 8.72266 1.68749 5.98438 2.20535 4.83594C2.55356 4.07031 3.22766 3.48047 4.10713 3.17188C5.42409 2.71484 8.54909 2.82031 10.0044 2.82031C11.4598 2.82031 14.5893 2.71875 15.9018 3.17188C16.7768 3.47656 17.4509 4.06641 17.8035 4.83594C18.3259 5.98829 18.2053 8.72266 18.2053 9.9961C18.2053 11.2695 18.3259 14.0078 17.8035 15.1563Z"
                                fill="#F2D492"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_29_25">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <div class="mb-4">
                <a href="https://x.com/Uhchristian" target="_blank" rel="noopener noreferrer">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                    <g fill="#f2d492" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
                     stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                     text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)">
                        <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z">

                        </path></g></g></svg>
                </a>
            </div>
             <div class="mb-4">
             <a href="mailto:christianuyeh@gmail.com" style="text-decoration: none;">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="#F2D492"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
           <polyline points="3 7 12 13 21 7"></polyline>
         </svg>
          </a>
            </div>

        </div>

        <nav id="navBar" class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid mx-0 mx-sm-1 mx-md-2 mx-lg-5">
                <a class="navbar-brand animate__animated animate__fadeInDown" href="#" @click.prevent="scrollToSection('section-home')"  aria-label="Go to Home" style="animation-delay: 50ms">
                    <svg
                        width="38"
                        height="47"
                        viewBox="0 0 38 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M38 28.9231C38 38.9067 29.4934 47 19 47C8.50659 47 0 38.9067 0 28.9231C0 18.9395 8.50659 0 19 0C29.4934 0 38 18.9395 38 28.9231Z"
                            fill="#F2D492"
                        />
                        <g filter="url(#filter0_d_38_0)">
                            <path
                                d="M19.4019 33.4252C17.6899 33.4252 16.1379 33.0572 14.7459 32.3212C13.3699 31.5692 12.2819 30.5372 11.4819 29.2252C10.6979 27.8972 10.3059 26.4012 10.3059 24.7372C10.3059 23.0732 10.6979 21.5852 11.4819 20.2732C12.2819 18.9452 13.3699 17.9132 14.7459 17.1772C16.1379 16.4252 17.6979 16.0492 19.4259 16.0492C20.8819 16.0492 22.1939 16.3052 23.3619 16.8172C24.5459 17.3292 25.5379 18.0652 26.3379 19.0252L23.8419 21.3292C22.7059 20.0172 21.2979 19.3612 19.6179 19.3612C18.5779 19.3612 17.6499 19.5932 16.8339 20.0572C16.0179 20.5052 15.3779 21.1372 14.9139 21.9532C14.4659 22.7692 14.2419 23.6972 14.2419 24.7372C14.2419 25.7772 14.4659 26.7052 14.9139 27.5212C15.3779 28.3372 16.0179 28.9772 16.8339 29.4412C17.6499 29.8892 18.5779 30.1132 19.6179 30.1132C21.2979 30.1132 22.7059 29.4492 23.8419 28.1212L26.3379 30.4252C25.5379 31.4012 24.5459 32.1452 23.3619 32.6572C22.1779 33.1692 20.8579 33.4252 19.4019 33.4252Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_38_0"
                                x="6.30585"
                                y="16.0492"
                                width="24.032"
                                height="25.376"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_38_0"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_38_0"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </a>
              <button class="navbar-toggler third-button" type="button" @click="toggleDrawer" aria-label="Toggle navigation menu"
>
                <div class="animated-icon3"><span></span><span></span><span></span></div>
              </button>
                <div class="navbar-collapse" :class="{ collapse: !isDrawerOpen, show: isDrawerOpen }"
               id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li
                            @click.prevent="scrollToSection('section-home')"
                            class="nav-item m me-lg-3 animate__animated animate__fadeInDown"
                            style="animation-delay: 100ms"
                        >
                            <div class="d-flex flex-column align-items-center">
                                <span
                                    v-if="navSelect === 'section-home'"
                                    class="active-dot animate__animated animate__fadeInDown"
                                ></span>
                                <a
                                    :class="[
                                        navSelect === 'section-home'
                                            ? 'active-link pt-0'
                                            : 'inactive-link',
                                    ]"
                                    class="nav-link"
                                      href="#"
                                    >Home</a
                                >
                            </div>
                        </li>
                        <li
                            @click.prevent="scrollToSection('section-about')"
                            class="nav-item m me-lg-3 animate__animated animate__fadeInDown"
                            style="animation-delay: 200ms"
                        >
                            <div class="d-flex flex-column align-items-center">
                                <span
                                    v-if="navSelect === 'section-about'"
                                    class="active-dot animate__animated animate__fadeInDown"
                                ></span>
                                <a
                                    :class="[
                                        navSelect === 'section-about'
                                            ? 'active-link pt-0'
                                            : 'inactive-link',
                                    ]"
                                    class="nav-link"
                                      href="#"
                                    >About</a
                                >
                            </div>
                        </li>
                        <li
                            @click.prevent="scrollToSection('section-experience')"
                            class="nav-item m me-lg-3 animate__animated animate__fadeInDown"
                            style="animation-delay: 300ms"
                        >
                            <div class="d-flex flex-column align-items-center">
                                <span
                                    v-if="navSelect === 'section-experience'"
                                    class="active-dot animate__animated animate__fadeInDown"
                                ></span>
                                <a
                                    :class="[
                                        navSelect === 'section-experience'
                                            ? 'active-link pt-0'
                                            : 'inactive-link',
                                    ]"
                                    class="nav-link"
                                      href="#"

                                    >Experience</a
                                >
                            </div>
                        </li>
                        <li
                            @click.prevent="scrollToSection('section-project')"
                            class="nav-item m me-lg-3 animate__animated animate__fadeInDown"
                            style="animation-delay: 400ms"
                        >
                            <div class="d-flex flex-column align-items-center">
                                <span
                                    v-if="navSelect === 'section-project'"
                                    class="active-dot animate__animated animate__fadeInDown"
                                ></span>
                                <a
                                    :class="[
                                        navSelect === 'section-project'
                                            ? 'active-link pt-0'
                                            : 'inactive-link',
                                    ]"
                                    class="nav-link"
                                    href="#"
                                    >Project</a
                                >
                            </div>
                        </li>
                    </ul>
                    <form
                        class="d-flex animate__animated animate__fadeInDown justify-content-center justify-content-lg-start"
                        role="search"
                        style="animation-delay: 600ms"
                    >
                        <a class="btn btn-resume"  onclick="this.blur();">Resume</a>
                    </form>
                </div>
            </div>
        </nav>
      <div v-if="isRouteReady">
        <transition>
          <Main v-if="currentState === 'index'" :navSelect="navSelect" @toggleDrawer="()=>{ if (isDrawerOpen) toggleDrawer()}" />
        </transition>
        <transition class="animate__animated animate__fadeIn">
          <CurrencyConverter v-if="currentState === 'currency-converter'" style="animation-delay: 300ms" />
        </transition>
      </div>

        <div v-if="!isMobile" class="small-nav d-flex flex-column">
            <a
                @click.prevent="scrollToSection('section-home')"
                class="mb-4"
                :class="[
                    navSelect == 'section-home'
                        ? 'active-small-nav'
                        : 'inactive-small-nav',
                ]"
                href="#"
            ></a>
            <a
                @click.prevent="scrollToSection('section-about')"
                class="mb-4"
                :class="[
                    navSelect == 'section-about'
                        ? 'active-small-nav'
                        : 'inactive-small-nav',
                ]"
                href="#"
            ></a>
            <a
                @click.prevent="scrollToSection('section-experience')"
                class="mb-4"
                :class="[
                    navSelect == 'section-experience'
                        ? 'active-small-nav'
                        : 'inactive-small-nav',
                ]"
                  href="#"
            ></a>
            <a
                @click.prevent="scrollToSection('section-project')"
                class="mb-4"
                :class="[
                    navSelect == 'section-project'
                        ? 'active-small-nav'
                        : 'inactive-small-nav',
                ]"
                href="#"
            ></a>
        </div>
    </div>
</template>

<script>
import { DateTime } from "luxon";
import CurrencyConverter from "./CurrencyConverter.vue";
import Main from "./Main.vue";

export default {
    components: {
        Main,
        CurrencyConverter,
    },
    props: {},
    data() {
        return {
            navSelect: "section-home",
            companySelect: "first",
            year: null,
            shared: {
                state: "index",
            },
            isProgrammaticScroll: false,
            userClickedTab: false,
            currentState: 'index',
             isRouteReady: false,
            isDrawerOpen: false,
           isMobile: window.innerWidth < 992

        };
    },
    provide() {
        return {
            shared: this.shared,
        };
    },
    computed: {

    },
    methods: {
        updateStateFromRoute(routeName) {
            if (routeName === 'currency-converter') {
                this.currentState = 'currency-converter';
                this.navSelect = 'section-project';
            } else {
                this.currentState = 'index';
            }
        },
        onResizeLeft() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isMobile = window.innerWidth <= 768; // adjust breakpoint if needed

            if (scrollTop > 10) {
                $("#navBar").addClass("shadow");
            } else {
                // Only remove shadow if NOT on mobile
                if (!isMobile) {
                    $("#navBar").removeClass("shadow");
                }
            }
        },
        scrollToSection(id) {
            this.toggleDrawer();
            // Determine offset dynamically (based on viewport or header)
            const getYOffset = () => {
                // Option 1: Based on screen width (mobile vs desktop)
                const mobileOffset = this.navSelect === 'section-about'? -290 : -200;
                const desktopOffset = -100;

                // Option 2: Based on fixed header height (if any)
                const header = document.getElementById("navbar"); // Replace with your header ID if needed
                if (header) return -header.offsetHeight;

                // Fallback
                return window.innerWidth < 768 ? mobileOffset : desktopOffset;
            };

            const scrollToElement = (element) => {
                if (element) {
                    const yOffset = getYOffset();
                    const y =
                        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({
                        top: y,
                        behavior: "smooth",
                    });

                    setTimeout(() => {
                        this.isProgrammaticScroll = false;
                    }, 1000);
                }
            };

            // If coming from a different route (e.g., 'currency-converter')
            if (this.$route.name === "currency-converter") {
                this.navSelect = id;

                this.$router.push({ name: "home" }).then(() => {
                    this.$nextTick(() => {
                        this.isProgrammaticScroll = true;
                        const element = document.getElementById(id);
                        scrollToElement(element);
                    });
                });

                return;
            }

            // If already on the home page
            this.navSelect = id;
            this.isProgrammaticScroll = true;
            const element = document.getElementById(id);
            scrollToElement(element);
        },
        onScroll(item){
            setTimeout(() => {
                this.scrollToSection(this.navSelect);
            }, 1000);
        },
        handleScroll() {
            if (this.isProgrammaticScroll) return;
            const offset = 50; // adjust as needed
             const centerY = window.innerHeight / 2 + window.scrollY + offset;

             const sections = document.querySelectorAll("[id^='section-']");

            for (const el of sections) {
                const rect = el.getBoundingClientRect();
                const elTop = window.scrollY + rect.top;
                const elBottom = elTop + el.offsetHeight;

                if (centerY >= elTop && centerY <= elBottom) {
                    const id = el.id;
                    if (this.navSelect !== id) {
                        this.navSelect = id;
                    }
                    break;
                }
            }
        },
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;

            const icon = document.querySelector('.animated-icon3');
            if (icon) {
                if (this.isDrawerOpen) {
                    icon.classList.add('open');
                } else {
                    icon.classList.remove('open');
                }
            }
        },
        closeDrawer() {
            this.isDrawerOpen = false;
        },
        checkMobile() {
          this.isMobile = window.innerWidth < 992;
        }

    },
    created() {
        window.addEventListener("scroll", this.onResizeLeft);
          // When app loads, set initial state from the current route
         this.updateStateFromRoute(this.$route.name);

        // Wait for router to be fully ready before showing any content
         this.$router.isReady().then(() => {
         this.isRouteReady = true;
       });
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onResizeLeft);
        if (this.navSelect === 'section-home"')
            window.removeEventListener("scroll", this.handleScroll);

        window.removeEventListener("resize", this.checkMobile);
    },
    mounted() {
        window.scrollTo(0, 0);
        this.year = DateTime.now().year;

        window.addEventListener("scroll", this.handleScroll);

        if (this.$route.name === 'currency-converter' && !this.userClickedTab) {
             this.navSelect = 'section-project';
        }
       window.addEventListener("resize", this.checkMobile);

    },
    watch: {
        '$route.name'(newVal) {
            this.updateStateFromRoute(newVal);
        },
    },
};
</script>
