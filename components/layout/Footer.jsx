import React, { useState } from "react";
import Image from "next/image";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Footer = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="bg-[#F8F8FB] px-5 pt-10 lg:pt-0 lg:px-0 w-full">
      <div className="max-w-[1440px] border-b pb-10 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="">
          <a
            href="#"
            className="flex items-center justify-center lg:justify-start"
          >
            <span className="sr-only">Your Company</span>
            <Image
              src={"/tlogo.png"}
              width={300}
              height={300}
              className=" w-[150px]"
            />
          </a>
          <div className="flex  mt-5 items-center pl-4 gap-4">
            <a
              href=""
              className="flex items-center gap-2 border px-4 py-2 rounded-[8px] border-black"
            >
              <svg
                class="group3"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9495 11.6999C14.9604 10.8567 15.1844 10.0299 15.6007 9.29643C16.0169 8.56301 16.6119 7.9468 17.3304 7.50513C16.874 6.85333 16.2719 6.31692 15.5719 5.93852C14.872 5.56011 14.0934 5.35013 13.2981 5.32525C11.6016 5.14717 9.95692 6.34041 9.0924 6.34041C8.21116 6.34041 6.8801 5.34293 5.44678 5.37242C4.51966 5.40237 3.61612 5.67197 2.82417 6.15495C2.03223 6.63792 1.3789 7.3178 0.927841 8.12835C-1.02606 11.5112 0.431375 16.4829 2.30304 19.2174C3.23948 20.5563 4.33391 22.052 5.76594 21.999C7.16727 21.9409 7.69064 21.1054 9.38216 21.1054C11.058 21.1054 11.549 21.999 13.0101 21.9653C14.5138 21.9408 15.4612 20.6203 16.3648 19.2687C17.0376 18.3146 17.5553 17.2601 17.8988 16.1443C17.0252 15.7748 16.2797 15.1564 15.7552 14.366C15.2308 13.5757 14.9506 12.6484 14.9495 11.6999Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M12.1899 3.52678C13.0097 2.54254 13.4137 1.27748 13.3159 0.000244141C12.0633 0.131804 10.9062 0.73046 10.0753 1.67693C9.669 2.1393 9.35783 2.67722 9.15957 3.25992C8.9613 3.84262 8.87983 4.45869 8.9198 5.0729C9.54632 5.07935 10.1661 4.94356 10.7326 4.67574C11.299 4.40793 11.7973 4.01507 12.1899 3.52678Z"
                  fill="#292B2E"
                ></path>
              </svg>
              <svg
                class="group4"
                width="77"
                height="17"
                viewBox="0 0 77 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66329 9.68847H3.8812L2.73278 13.0794H0.707275L5.2368 0.533691H7.34123L11.8708 13.0794H9.81071L8.66329 9.68847ZM4.37647 8.1237H8.16707L6.29843 2.62039H6.24614L4.37647 8.1237Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M21.653 8.50652C21.653 11.3489 20.1316 13.1752 17.8358 13.1752C17.2542 13.2056 16.6758 13.0716 16.1668 12.7886C15.6578 12.5056 15.2389 12.0849 14.9578 11.5749H14.9144V16.1054H13.0369V3.9326H14.8542V5.45395H14.8888C15.1827 4.94631 15.6088 4.52786 16.1216 4.24312C16.6345 3.95837 17.2149 3.81798 17.8012 3.83689C20.1227 3.8369 21.653 5.67199 21.653 8.50652ZM19.7231 8.50652C19.7231 6.65467 18.7661 5.43718 17.3059 5.43718C15.8714 5.43718 14.9065 6.68031 14.9065 8.50652C14.9065 10.3495 15.8714 11.5838 17.3059 11.5838C18.7661 11.5838 19.7231 10.3752 19.7231 8.50652Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M31.7203 8.50651C31.7203 11.3489 30.199 13.1751 27.9031 13.1751C27.3216 13.2056 26.7432 13.0716 26.2342 12.7886C25.7252 12.5056 25.3062 12.0849 25.0252 11.5748H24.9818V16.1054H23.1042V3.93259H24.9216V5.45394H24.9561C25.2501 4.9463 25.6761 4.52785 26.189 4.24311C26.7018 3.95837 27.2823 3.81798 27.8686 3.83689C30.1901 3.83689 31.7203 5.67198 31.7203 8.50651ZM29.7905 8.50651C29.7905 6.65466 28.8335 5.43717 27.3733 5.43717C25.9388 5.43717 24.9739 6.6803 24.9739 8.50651C24.9739 10.3495 25.9388 11.5838 27.3733 11.5838C28.8335 11.5838 29.7905 10.3752 29.7905 8.50651Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M38.3741 9.58384C38.5132 10.828 39.7218 11.6448 41.3734 11.6448C42.9559 11.6448 44.0945 10.8279 44.0945 9.70614C44.0945 8.73235 43.4078 8.14928 41.7818 7.74969L40.1559 7.35801C37.8522 6.80156 36.7827 5.72418 36.7827 3.97591C36.7827 1.81128 38.6691 0.324463 41.3477 0.324463C43.9987 0.324463 45.8161 1.81128 45.8773 3.97591H43.982C43.8685 2.7239 42.8335 1.96816 41.3211 1.96816C39.8086 1.96816 38.7736 2.73279 38.7736 3.84568C38.7736 4.73264 39.4347 5.25456 41.0517 5.6541L42.434 5.99349C45.008 6.60223 46.0775 7.63622 46.0775 9.47129C46.0775 11.8184 44.2079 13.2885 41.2342 13.2885C38.452 13.2885 36.5735 11.853 36.4521 9.58375L38.3741 9.58384Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M50.1294 1.76782V3.93245H51.8688V5.41927H50.1294V10.4618C50.1294 11.2452 50.4777 11.6102 51.2423 11.6102C51.4488 11.6066 51.655 11.5921 51.8599 11.5668V13.0447C51.5162 13.109 51.1668 13.1381 50.8171 13.1316C48.9652 13.1316 48.243 12.436 48.243 10.6621V5.41927H46.9131V3.93245H48.243V1.76782H50.1294Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M52.8762 8.50695C52.8762 5.62901 54.5712 3.82056 57.2143 3.82056C59.8663 3.82056 61.5535 5.62897 61.5535 8.50695C61.5535 11.3928 59.8752 13.1933 57.2143 13.1933C54.5544 13.1933 52.8762 11.3928 52.8762 8.50695ZM59.6404 8.50695C59.6404 6.53275 58.7357 5.36756 57.2143 5.36756C55.693 5.36756 54.7892 6.54163 54.7892 8.50695C54.7892 10.489 55.693 11.6454 57.2143 11.6454C58.7357 11.6454 59.6404 10.489 59.6404 8.50695Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M63.1016 3.93251H64.8923V5.48936H64.9357C65.0569 5.00313 65.3417 4.57342 65.7424 4.27247C66.1431 3.97152 66.6351 3.81767 67.1358 3.83679C67.3522 3.83604 67.568 3.85954 67.7791 3.90685V5.66301C67.506 5.57955 67.221 5.54122 66.9355 5.54956C66.6628 5.53849 66.3909 5.58658 66.1384 5.69053C65.886 5.79447 65.6591 5.95181 65.4732 6.15173C65.2874 6.35166 65.147 6.58944 65.0617 6.84875C64.9764 7.10806 64.9482 7.38276 64.9791 7.65399V13.0794H63.1016L63.1016 3.93251Z"
                  fill="#292B2E"
                ></path>
                <path
                  d="M76.4356 10.3933C76.183 12.0538 74.566 13.1933 72.497 13.1933C69.8362 13.1933 68.1846 11.4105 68.1846 8.55036C68.1846 5.6813 69.845 3.82056 72.4181 3.82056C74.9488 3.82056 76.5402 5.55896 76.5402 8.33232V8.97559H70.0799V9.08905C70.05 9.42568 70.0922 9.7648 70.2035 10.0839C70.3148 10.403 70.4927 10.6947 70.7255 10.9398C70.9582 11.1848 71.2404 11.3775 71.5533 11.5051C71.8662 11.6327 72.2027 11.6923 72.5405 11.6799C72.9841 11.7215 73.4294 11.6187 73.81 11.3869C74.1906 11.1551 74.4862 10.8066 74.6528 10.3933L76.4356 10.3933ZM70.0887 7.6634H74.6617C74.6785 7.36072 74.6326 7.05783 74.5269 6.77372C74.4211 6.48962 74.2578 6.23044 74.0471 6.01246C73.8364 5.79447 73.583 5.62238 73.3027 5.50699C73.0223 5.3916 72.7212 5.3354 72.4181 5.34191C72.1124 5.34008 71.8093 5.39883 71.5264 5.51475C71.2434 5.63067 70.9863 5.80148 70.7697 6.01731C70.5531 6.23314 70.3815 6.48972 70.2646 6.77225C70.1477 7.05478 70.0879 7.35765 70.0887 7.6634Z"
                  fill="#292B2E"
                ></path>
              </svg>
            </a>
            <a
              href=""
              className="flex items-center gap-2 border px-4 py-2 rounded-[8px] border-black"
            >
              <svg
                class="group-894"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.36353 11.0001L14.0233 15.4187L18.2636 12.9719L18.2699 12.9685C18.9642 12.5937 19.4343 11.8626 19.4343 11.02C19.4343 10.1836 18.9705 9.45623 18.2834 9.08031L18.2723 9.07425L18.261 9.0665L14.0056 6.59961L9.36353 11.0001Z"
                  fill="#292B2E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 19.5398C0.25 19.5736 0.250748 19.6071 0.252235 19.6404L8.65134 11.0002L0.252255 2.36011C0.250756 2.39341 0.25 2.42695 0.25 2.46073V19.5398Z"
                  fill="#292B2E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.364746 1.75846L9.00723 10.6489L13.5562 6.33661L3.60668 0.568089L3.60363 0.566261C3.26891 0.365783 2.87876 0.250244 2.4608 0.250244C1.48694 0.250244 0.657597 0.881978 0.364746 1.75846Z"
                  fill="#292B2E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.364746 20.2581L9.00723 11.3677L13.5562 15.68L3.60668 21.4485L3.60363 21.4503C3.26891 21.6508 2.87876 21.7664 2.4608 21.7664C1.48694 21.7664 0.657597 21.1346 0.364746 20.2581Z"
                  fill="#292B2E"
                ></path>
              </svg>
              <svg
                class="path-24"
                width="81"
                height="16"
                viewBox="0 0 81 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.4875 12.1704H64.2408V0.424088H62.4875V12.1704ZM78.2791 4.65559L76.2693 9.74802H76.2092L74.1233 4.65559H72.2347L75.3635 11.7729L73.5793 15.7323H75.4077L80.2287 4.65559H78.2791ZM68.3355 10.8362C67.7623 10.8362 66.9609 10.5488 66.9609 9.83869C66.9609 8.93209 67.9587 8.58454 68.8194 8.58454C69.5898 8.58454 69.9534 8.75047 70.4213 8.97728C70.2851 10.0655 69.3483 10.8362 68.3355 10.8362ZM68.5478 4.39861C67.2784 4.39861 65.964 4.95794 65.4199 6.19706L66.9759 6.84669C67.3085 6.19706 67.9277 5.98565 68.5779 5.98565C69.4846 5.98565 70.4063 6.5292 70.4213 7.49669V7.61742C70.1038 7.43609 69.4235 7.16417 68.5929 7.16417C66.9148 7.16417 65.2076 8.08571 65.2076 9.80853C65.2076 11.3802 66.5832 12.3928 68.1241 12.3928C69.3023 12.3928 69.9534 11.8639 70.3603 11.244H70.4213V12.1513H72.1145V7.64749C72.1145 5.56209 70.5566 4.39861 68.5478 4.39861ZM57.7126 6.08544H55.2189V2.05924H57.7126C59.0233 2.05924 59.7674 3.14417 59.7674 4.07229C59.7674 4.98256 59.0233 6.08544 57.7126 6.08544ZM57.6675 0.424088H53.4664V12.1704H55.2189V7.72021H57.6675C59.6105 7.72021 61.5207 6.31376 61.5207 4.07229C61.5207 1.8313 59.6105 0.424088 57.6675 0.424088ZM34.7592 10.8384C33.548 10.8384 32.5342 9.82394 32.5342 8.43185C32.5342 7.02361 33.548 5.99477 34.7592 5.99477C35.955 5.99477 36.8934 7.02361 36.8934 8.43185C36.8934 9.82394 35.955 10.8384 34.7592 10.8384ZM36.7723 5.31329H36.7117C36.3183 4.84416 35.5611 4.42031 34.608 4.42031C32.6095 4.42031 30.7781 6.17648 30.7781 8.43185C30.7781 10.6718 32.6095 12.4126 34.608 12.4126C35.5611 12.4126 36.3183 11.9886 36.7117 11.5046H36.7723V12.0793C36.7723 13.6087 35.955 14.4257 34.6381 14.4257C33.5637 14.4257 32.8977 13.6539 32.6249 13.0031L31.0963 13.6388C31.5349 14.698 32.7002 16.0002 34.6381 16.0002C36.6971 16.0002 38.4378 14.7891 38.4378 11.8371V4.66254H36.7723V5.31329ZM39.649 12.1704H41.4042V0.424088H39.649V12.1704ZM43.9928 8.29533C43.9476 6.75123 45.1893 5.96433 46.0819 5.96433C46.7785 5.96433 47.3683 6.31263 47.5658 6.81183L43.9928 8.29533ZM49.442 6.96301C49.1091 6.07041 48.095 4.42031 46.0213 4.42031C43.9623 4.42031 42.252 6.03996 42.252 8.41644C42.252 10.6568 43.9476 12.4126 46.2176 12.4126C48.0491 12.4126 49.1091 11.2928 49.5484 10.6417L48.186 9.73327C47.7317 10.3994 47.1114 10.8384 46.2176 10.8384C45.325 10.8384 44.689 10.4296 44.2809 9.62728L49.6236 7.41739L49.442 6.96301ZM6.87166 5.64647V7.34175H10.9283C10.8072 8.29533 10.4893 8.99156 10.0049 9.47601C9.41436 10.0662 8.49094 10.7173 6.87166 10.7173C4.37398 10.7173 2.42143 8.70414 2.42143 6.20655C2.42143 3.70896 4.37398 1.69553 6.87166 1.69553C8.21893 1.69553 9.20258 2.22545 9.92925 2.90665L11.1254 1.71056C10.111 0.741948 8.76398 0.000244141 6.87166 0.000244141C3.45018 0.000244141 0.574219 2.78554 0.574219 6.20655C0.574219 9.62728 3.45018 12.4126 6.87166 12.4126C8.71813 12.4126 10.111 11.807 11.2007 10.6718C12.3209 9.55165 12.6692 7.97747 12.6692 6.70575C12.6692 6.31263 12.6386 5.94929 12.5781 5.64647H6.87166ZM17.2812 10.8384C16.07 10.8384 15.0254 9.83935 15.0254 8.41644C15.0254 6.97842 16.07 5.99477 17.2812 5.99477C18.4919 5.99477 19.5365 6.97842 19.5365 8.41644C19.5365 9.83935 18.4919 10.8384 17.2812 10.8384ZM17.2812 4.42031C15.0705 4.42031 13.2696 6.10047 13.2696 8.41644C13.2696 10.7173 15.0705 12.4126 17.2812 12.4126C19.491 12.4126 21.2924 10.7173 21.2924 8.41644C21.2924 6.10047 19.491 4.42031 17.2812 4.42031ZM26.0313 10.8384C24.8209 10.8384 23.776 9.83935 23.776 8.41644C23.776 6.97842 24.8209 5.99477 26.0313 5.99477C27.2425 5.99477 28.2867 6.97842 28.2867 8.41644C28.2867 9.83935 27.2425 10.8384 26.0313 10.8384ZM26.0313 4.42031C23.8215 4.42031 22.0205 6.10047 22.0205 8.41644C22.0205 10.7173 23.8215 12.4126 26.0313 12.4126C28.242 12.4126 30.043 10.7173 30.043 8.41644C30.043 6.10047 28.242 4.42031 26.0313 4.42031Z"
                  fill="#292B2E"
                ></path>
              </svg>
            </a>
          </div>
          <div className=" flex mt-8 pl-8 items-center gap-10">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaSquareFacebook className="w-5 h-5" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube className="w-5 h-5" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className=" hidden lg:flex items-start lg:mr-20 flex-col lg:flex-row mt-10 gap-16">
          <div>
            <p className=" font-medium mb-5">Partnerships</p>
            <Link className="text-[14px]" href="/">
              Holafly for Business
            </Link>
          </div>
          <div>
            <p className=" font-medium mb-5">Top destinations</p>
            <div className="flex flex-col gap-3">
              <Link className="text-[14px]" href="/">
                Europe
              </Link>
              <Link className="text-[14px]" href="/">
                USA
              </Link>
              <Link className="text-[14px]" href="/">
                Japan
              </Link>
              <Link className="text-[14px]" href="/">
                Turkey
              </Link>
              <Link className="text-[14px]" href="/">
                Spain
              </Link>
              <Link className="text-[14px]" href="/">
                France
              </Link>
            </div>
          </div>
          <div>
            <p className=" font-medium mb-5">Legal</p>
            <div className="flex flex-col gap-3">
              <Link className="text-[14px]" href="/">
                Terms and Conditions
              </Link>
              <Link className="text-[14px]" href="/">
                Privacy Policy
              </Link>
              <Link className="text-[14px]" href="/">
                Cookies Policy
              </Link>
              <Link className="text-[14px]" href="/">
                Refund Policy
              </Link>
              <Link className="text-[14px]" href="/">
                Spain
              </Link>
              <Link className="text-[14px]" href="/">
                Website Terms of Use
              </Link>
            </div>
          </div>
          <div>
            <p className=" font-medium mb-5">Interest</p>
            <div className="flex flex-col gap-3">
              <Link className="text-[14px]" href="/">
                What is an eSIM
              </Link>
              <Link className="text-[14px]" href="/">
                eSIM compatible <br /> devices
              </Link>
              <Link className="text-[14px]" href="/">
                how to install and <br /> activate your eSIM
              </Link>
              <Link className="text-[14px]" href="/">
                FAQs
              </Link>
              <Link className="text-[14px]" href="/">
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="   lg:hidden items-start w-full lg:mr-20 flex-col lg:flex-row mt-10 gap-16">
          <div
            onClick={() => {
              if (active === 1) {
                setActive(null);
              } else {
                setActive(1);
              }
            }}
            className=" border-b  w-full lg:w-[49%]  rounded-[12px]  "
          >
            <div className="flex items-center cursor-pointer justify-between p-5">
              <div></div>
              <p>Partnerships</p>
              {active === 1 ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {active === 1 && (
            <div className="flex items-center pb-3 justify-center w-full">
                <Link className="text-[14px] " href="/">
                Holafly for Business
              </Link>
            </div>
            )}
          </div>
          <div
            onClick={() => {
              if (active === 2) {
                setActive(null);
              } else {
                setActive(2);
              }
            }}
            className=" border-b  w-full lg:w-[49%]  rounded-[12px]  "
          >
            <div className="flex items-center cursor-pointer justify-between p-5">
                <div></div>
              <p>Top destinations</p>
              {active === 2 ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {active === 2 && (
              <div className="flex flex-col  pb-3 items-center px-5 gap-3">
                <Link className="text-[14px]" href="/">
                  Europe
                </Link>
                <Link className="text-[14px]" href="/">
                  USA
                </Link>
                <Link className="text-[14px]" href="/">
                  Japan
                </Link>
                <Link className="text-[14px]" href="/">
                  Turkey
                </Link>
                <Link className="text-[14px]" href="/">
                  Spain
                </Link>
                <Link className="text-[14px]" href="/">
                  France
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              if (active === 3) {
                setActive(null);
              } else {
                setActive(3);
              }
            }}
            className=" border-b  w-full lg:w-[49%]  rounded-[12px]  "
          >
            <div className="flex items-center cursor-pointer justify-between p-5">
                <div></div>
              <p>Legal</p>
              {active === 3 ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {active === 3 && (
              <div className="flex flex-col  pb-3 items-center gap-3">
                <Link className="text-[14px]" href="/">
                  Terms and Conditions
                </Link>
                <Link className="text-[14px]" href="/">
                  Privacy Policy
                </Link>
                <Link className="text-[14px]" href="/">
                  Cookies Policy
                </Link>
                <Link className="text-[14px]" href="/">
                  Refund Policy
                </Link>
                <Link className="text-[14px]" href="/">
                  Spain
                </Link>
                <Link className="text-[14px]" href="/">
                  Website Terms of Use
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              if (active === 4) {
                setActive(null);
              } else {
                setActive(4);
              }
            }}
            className=" border-b  w-full lg:w-[49%]  rounded-[12px]  "
          >
            <div className="flex items-center cursor-pointer justify-between p-5">
                <div></div>
              <p>Interest</p>
              {active === 4 ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {active === 4 && (
                 <div className="flex items-center  pb-3 flex-col gap-3">
                 <Link className="text-[14px]" href="/">
                   What is an eSIM
                 </Link>
                 <Link className="text-[14px]" href="/">
                   eSIM compatible <br /> devices
                 </Link>
                 <Link className="text-[14px]" href="/">
                   how to install and <br /> activate your eSIM
                 </Link>
                 <Link className="text-[14px]" href="/">
                   FAQs
                 </Link>
                 <Link className="text-[14px]" href="/">
                   Blog
                 </Link>
               </div>
            )}
          </div>

         
        </div>
      </div>
      <div className="max-w-[1440px] pt-[20px] text-[14px] pb-[10px] mx-auto flex items-center justify-center text-center lg:text-left lg:justify-between">
        <p>
          Made with ❤️ by people who love to travel.
          <br className=" lg:hidden" />
          Holafly 2024 ®
        </p>
      </div>
    </div>
  );
};

export default Footer;
