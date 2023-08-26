import React, { useState } from "react";
import "./product.css";
import Partners from "../../Components/Partners";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

function Product() {

    const [show, setShow] = useState(false);

    const styles = {
        top:`${show ? '120px' : '-1000px'}`
    }

  return (
    <div>
      <div className="top-img">
        <img src="/top-ss.png" className="image-one-top" alt="" />
      </div>
      <div className="navbar">
        <div className="product-container-details-in-navbar" style={styles}>
          <div className="product-container-contains-both-divs">
            <div className="first-container-to-hold-products">
              <p className="heading-of-first-container-to-hold">INVESTMENTS</p>
              <div className="mutual-funds-of-products-in-first">
                <div className="image-container-in-mutual-fund-products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M33.407 11.517V21.637H59.594C59.8203 21.6367 60.0372 21.5468 60.1973 21.3869C60.3573 21.227 60.4475 21.0102 60.448 20.784V11.517C60.476 10.1931 60.1103 8.89072 59.3973 7.77486C58.6843 6.65901 57.6561 5.77992 56.443 5.249C55.638 4.89673 54.7716 4.70644 53.893 4.689H26.853C27.7317 4.70694 28.5983 4.89778 29.4032 5.25064C30.2081 5.6035 30.9357 6.11146 31.5443 6.74551C32.1529 7.37955 32.6306 8.12728 32.9502 8.94598C33.2699 9.76467 33.4251 10.6383 33.407 11.517Z"
                      fill="#36A168"
                    />
                    <path
                      d="M47.646 11.517V16.637H21.187C20.9608 16.637 20.7438 16.5471 20.5838 16.3872C20.4239 16.2272 20.334 16.0102 20.334 15.784V11.517C20.3061 10.1931 20.6718 8.89072 21.3848 7.77486C22.0977 6.65901 23.1259 5.77992 24.339 5.249C25.144 4.8966 26.0105 4.70631 26.889 4.689H54.201C52.8774 4.71513 51.5914 5.13352 50.5058 5.89118C49.4203 6.64883 48.584 7.71165 48.103 8.945C47.7831 9.76396 47.6278 10.638 47.646 11.517Z"
                      fill="#CDE7D9"
                    />
                    <path
                      d="M19.3151 4.688H47.6451V58.668C47.6454 58.7474 47.6235 58.8253 47.5818 58.8928C47.54 58.9603 47.4802 59.0148 47.409 59.05C47.3381 59.0853 47.2588 59.1002 47.1799 59.0931C47.101 59.0861 47.0256 59.0573 46.9621 59.01L42.327 55.476C42.1786 55.3629 41.9972 55.3016 41.8106 55.3016C41.6239 55.3016 41.4425 55.3629 41.294 55.476L36.4971 59.138C36.3487 59.2507 36.1674 59.3118 35.981 59.3118C35.7947 59.3118 35.6134 59.2507 35.465 59.138L30.668 55.476C30.5185 55.3615 30.3354 55.2994 30.147 55.2994C29.9587 55.2994 29.7756 55.3615 29.626 55.476L24.8291 59.138C24.6807 59.2507 24.4994 59.3118 24.313 59.3118C24.1267 59.3118 23.9454 59.2507 23.7971 59.138L19 55.476C18.8514 55.3633 18.67 55.3024 18.4835 55.3024C18.2971 55.3024 18.1157 55.3633 17.967 55.476L13.332 59.01C13.2688 59.0579 13.1933 59.0871 13.1143 59.0944C13.0353 59.1018 12.9558 59.0868 12.8848 59.0514C12.8137 59.0159 12.7541 58.9614 12.7124 58.8938C12.6708 58.8262 12.6488 58.7484 12.649 58.669V11.243C12.6652 9.49023 13.3762 7.81548 14.626 6.58648C15.8758 5.35748 17.5623 4.67468 19.3151 4.688Z"
                      fill="#CDE7D9"
                    />
                    <g>
                      <path
                        d="M27.55 18.688H5.55005C5.01962 18.688 4.51091 18.8987 4.13584 19.2738C3.76076 19.6489 3.55005 20.1576 3.55005 20.688V38.688C3.55005 39.2184 3.76076 39.7271 4.13584 40.1022C4.51091 40.4773 5.01962 40.688 5.55005 40.688H27.55V18.688ZM27.55 43.688V15.688C27.55 15.4228 27.6554 15.1684 27.8429 14.9809C28.0305 14.7934 28.2848 14.688 28.55 14.688C28.8153 14.688 29.0696 14.7934 29.2572 14.9809C29.4447 15.1684 29.55 15.4228 29.55 15.688V43.688C29.55 43.9532 29.4447 44.2076 29.2572 44.3951C29.0696 44.5826 28.8153 44.688 28.55 44.688C28.2848 44.688 28.0305 44.5826 27.8429 44.3951C27.6554 44.2076 27.55 43.9532 27.55 43.688Z"
                        fill="#1275E5"
                      />
                    </g>
                    <path
                      d="M17.89 22.688H7.55005V24.308H10.81C12.33 24.308 13.29 25.048 13.55 26.268H7.55005V27.688H13.55C13.29 28.908 12.31 29.628 10.81 29.628H7.55005V31.248H11.01L13.91 36.688H16.01L12.89 30.988C14.29 30.488 15.23 29.268 15.45 27.688H17.89V26.268H15.45C15.33 25.408 14.99 24.688 14.39 24.108H17.89V22.688Z"
                      fill="#CCE4FF"
                    />
                  </svg>
                </div>
                <div className="other-info-in-text-in-mutual-fund-products-top">
                  <p className="mutual-funds-heading-of-top-most-product-in-top-container">
                    Mutual Funds
                  </p>
                  <p className="mutual-funds-text-details-of-top-most-product-in-top-container">
                    E2E infrastructure for mutual fund investing
                  </p>
                </div>
              </div>
              <div className="mutual-funds-of-products-in-first">
                <div className="image-container-in-mutual-fund-products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M25.3899 4.67L10.2899 19.33C10.0661 19.5458 9.88919 19.8055 9.77045 20.0929C9.65171 20.3803 9.59366 20.6891 9.59995 21V57.71C9.60053 58.0125 9.66192 58.3118 9.78045 58.5901C9.89898 58.8684 10.0722 59.12 10.2899 59.33C10.7381 59.7624 11.3373 60.0027 11.9599 60H47.2399C47.8626 60.0027 48.4618 59.7624 48.9099 59.33C49.1276 59.12 49.3009 58.8684 49.4194 58.5901C49.538 58.3118 49.5994 58.0125 49.5999 57.71V6.29C49.5994 5.98751 49.538 5.68823 49.4194 5.40994C49.3009 5.13164 49.1276 4.88001 48.9099 4.67C48.4618 4.23764 47.8626 3.99725 47.2399 4H27.0699C26.7589 4 26.4499 4.058 26.1599 4.17C25.8746 4.28766 25.6135 4.45719 25.3899 4.67Z"
                      fill="#CCE4FF"
                    />
                    <path
                      d="M46.501 50C49.5084 50.0003 52.4229 48.9577 54.7477 47.0498C57.0724 45.1418 58.6636 42.4867 59.25 39.537C59.6134 37.7052 59.5779 35.8166 59.1458 33.9997C58.7137 32.1829 57.8952 30.4805 56.746 29.0084C55.5968 27.5363 54.144 26.3291 52.4863 25.469C50.8286 24.6089 49.0051 24.1161 47.1399 24.0241C45.2746 23.9321 43.4114 24.2431 41.6772 24.9359C39.9429 25.6287 38.3783 26.687 37.0898 28.0389C35.8014 29.3907 34.8193 31.0043 34.2106 32.7698C33.6018 34.5354 33.3806 36.4113 33.562 38.27C33.8562 41.2629 35.1785 44.0614 37.304 46.189C39.7434 48.6279 43.0514 49.9987 46.501 50Z"
                      fill="#FEA442"
                    />
                    <g>
                      <path
                        d="M24.91 5.14V16.9C24.9079 17.1576 24.8546 17.4122 24.7533 17.6491C24.6521 17.886 24.5048 18.1005 24.32 18.28C23.938 18.647 23.43 18.855 22.9 18.86H10.78L24.91 5.14Z"
                        fill="#0D68FF"
                      />
                    </g>
                    <g>
                      <path
                        d="M26.5 29.5C26.5 29.8978 26.342 30.2794 26.0607 30.5607C25.7794 30.842 25.3978 31 25 31H6C5.60218 31 5.22064 30.842 4.93934 30.5607C4.65804 30.2794 4.5 29.8978 4.5 29.5C4.5 29.1022 4.65804 28.7206 4.93934 28.4393C5.22064 28.158 5.60218 28 6 28H25C25.3978 28 25.7794 28.158 26.0607 28.4393C26.342 28.7206 26.5 29.1022 26.5 29.5ZM20.5 36.5C20.5 36.8978 20.342 37.2794 20.0607 37.5607C19.7794 37.842 19.3978 38 19 38H6C5.60218 38 5.22064 37.842 4.93934 37.5607C4.65804 37.2794 4.5 36.8978 4.5 36.5C4.5 36.1022 4.65804 35.7206 4.93934 35.4393C5.22064 35.158 5.60218 35 6 35H19C19.3978 35 19.7794 35.158 20.0607 35.4393C20.342 35.7206 20.5 36.1022 20.5 36.5Z"
                        fill="#4652CE"
                      />
                    </g>
                    <g>
                      <path
                        d="M52.822 30.067H41.3V31.872H44.933C46.626 31.872 47.696 32.696 47.986 34.056H41.3V35.638H47.986C47.696 36.998 46.604 37.8 44.933 37.8H41.3V39.605H45.155L48.3871 45.667H50.7271L47.25 39.315C48.81 38.758 49.8581 37.399 50.1031 35.638H52.822V34.056H50.1031C49.9691 33.098 49.5901 32.295 48.9221 31.649H52.822V30.067Z"
                        fill="#FEA442"
                      />
                    </g>
                  </svg>
                </div>
                <div className="other-info-in-text-in-mutual-fund-products-top">
                  <p className="mutual-funds-heading-of-top-most-product-in-top-container">
                    Indian Equity
                  </p>
                  <p className="mutual-funds-text-details-of-top-most-product-in-top-container">
                    Ready-made stock baskets with major broker integrations
                  </p>
                </div>
              </div>
              <div className="mutual-funds-of-products-in-first">
                <div className="image-container-in-mutual-fund-products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M31.54 11.37C31.81 10.84 32.25 10.84 32.54 11.37L34.96 16.17C35.1285 16.4574 35.3552 16.7063 35.6256 16.9009C35.8959 17.0955 36.204 17.2315 36.53 17.3L42 18.07C42.59 18.15 42.72 18.56 42.28 18.97L38.35 22.72C38.1244 22.962 37.954 23.25 37.8505 23.5642C37.7469 23.8784 37.7126 24.2113 37.75 24.54L38.67 29.81C38.78 30.4 38.43 30.66 37.89 30.38L33 27.88C32.6941 27.7462 32.3638 27.6771 32.03 27.6771C31.6961 27.6771 31.3659 27.7462 31.06 27.88L26.18 30.38C25.65 30.66 25.3 30.38 25.4 29.81L26.32 24.54C26.3623 24.2111 26.3303 23.8769 26.2265 23.5619C26.1226 23.247 25.9496 22.9593 25.72 22.72L21.79 19C21.36 18.59 21.49 18.18 22.08 18.1L27.54 17.33C27.866 17.2615 28.174 17.1255 28.4444 16.9309C28.7148 16.7363 28.9415 16.4874 29.11 16.2L31.54 11.37Z"
                        fill="#FFB036"
                      />
                    </g>
                    <g>
                      <path
                        d="M32 39.88C41.9411 39.88 50 31.8211 50 21.88C50 11.9389 41.9411 3.88 32 3.88C22.0589 3.88 14 11.9389 14 21.88C14 31.8211 22.0589 39.88 32 39.88Z"
                        fill="#FFB036"
                      />
                    </g>
                    <g>
                      <path
                        d="M33.01 59.11V45.89C33.01 45.3985 32.6115 45 32.12 45H31.9C31.4085 45 31.01 45.3985 31.01 45.89V59.11C31.01 59.6015 31.4085 60 31.9 60H32.12C32.6115 60 33.01 59.6015 33.01 59.11Z"
                        fill="#B1CDE2"
                      />
                    </g>
                    <g>
                      <path
                        d="M38.01 55.14V42.86C38.01 42.385 37.625 42 37.15 42H36.87C36.395 42 36.01 42.385 36.01 42.86V55.14C36.01 55.615 36.395 56 36.87 56H37.15C37.625 56 38.01 55.615 38.01 55.14Z"
                        fill="#B1CDE2"
                      />
                    </g>
                    <g>
                      <path
                        d="M28.01 55.14V42.86C28.01 42.385 27.625 42 27.15 42H26.87C26.395 42 26.01 42.385 26.01 42.86V55.14C26.01 55.615 26.395 56 26.87 56H27.15C27.625 56 28.01 55.615 28.01 55.14Z"
                        fill="#B1CDE2"
                      />
                    </g>
                  </svg>
                </div>
                <div className="other-info-in-text-in-mutual-fund-products-top">
                  <p className="mutual-funds-heading-of-top-most-product-in-top-container">
                    Digital Gold
                  </p>
                  <p className="mutual-funds-text-details-of-top-most-product-in-top-container">
                    Allow your users to buy & sell digital gold
                  </p>
                </div>
              </div>
              <div className="mutual-funds-of-products-in-first">
                <div className="image-container-in-mutual-fund-products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M54.292 5.5H5.708C4.48856 5.5 3.5 6.48856 3.5 7.708V56.292C3.5 57.5114 4.48856 58.5 5.708 58.5H54.292C55.5114 58.5 56.5 57.5114 56.5 56.292V7.708C56.5 6.48856 55.5114 5.5 54.292 5.5Z"
                      fill="#CCE4FF"
                    />
                    <g>
                      <path
                        d="M26.433 21C26.433 20.4033 26.196 19.831 25.774 19.409C25.352 18.9871 24.7798 18.75 24.183 18.75C23.5863 18.75 23.014 18.9871 22.592 19.409C22.1701 19.831 21.933 20.4033 21.933 21V24.335C20.1553 24.8044 18.5687 25.8177 17.395 27.233L14.266 25.426C13.7491 25.1276 13.1348 25.0468 12.5584 25.2014C11.9819 25.3559 11.4904 25.7331 11.192 26.25C10.8936 26.7669 10.8128 27.3812 10.9674 27.9577C11.1219 28.5341 11.4991 29.0256 12.016 29.324L15.494 31.332C15.405 31.8391 15.3605 32.3531 15.361 32.868C15.361 33.945 15.554 34.976 15.907 35.93L12.016 38.176C11.4991 38.4744 11.1219 38.9659 10.9674 39.5423C10.8128 40.1188 10.8936 40.7331 11.192 41.25C11.4904 41.7669 11.9819 42.1441 12.5584 42.2986C13.1348 42.4532 13.7491 42.3724 14.266 42.074L18.509 39.624C19.505 40.4619 20.6744 41.0685 21.933 41.4V46.5C21.933 47.0967 22.1701 47.669 22.592 48.091C23.014 48.5129 23.5863 48.75 24.183 48.75C24.7798 48.75 25.352 48.5129 25.774 48.091C26.196 47.669 26.433 47.0967 26.433 46.5V41.4C27.6916 41.0685 28.861 40.4619 29.857 39.624L34.1 42.074C34.6169 42.3724 35.2312 42.4532 35.8077 42.2986C36.3842 42.1441 36.8756 41.7669 37.174 41.25C37.4724 40.7331 37.5532 40.1188 37.3987 39.5423C37.2441 38.9659 36.8669 38.4744 36.35 38.176L32.459 35.93C32.8212 34.9498 33.0061 33.913 33.005 32.868C33.005 32.344 32.959 31.83 32.872 31.332L36.35 29.324C36.8669 29.0256 37.2441 28.5341 37.3987 27.9577C37.5532 27.3812 37.4724 26.7669 37.174 26.25C36.8756 25.7331 36.3842 25.3559 35.8077 25.2014C35.2312 25.0468 34.6169 25.1276 34.1 25.426L30.971 27.233C29.7973 25.8177 28.2107 24.8044 26.433 24.335V21Z"
                        fill="#575CCE"
                      />
                    </g>
                    <g>
                      <path
                        d="M24.183 38.347C27.1195 38.347 29.5 35.9665 29.5 33.03C29.5 30.0935 27.1195 27.713 24.183 27.713C21.2465 27.713 18.866 30.0935 18.866 33.03C18.866 35.9665 21.2465 38.347 24.183 38.347Z"
                        fill="#1074FF"
                      />
                    </g>
                    <g>
                      <path
                        d="M50 18.5H58C58.663 18.5 59.2989 18.7634 59.7678 19.2322C60.2366 19.7011 60.5 20.337 60.5 21C60.5 21.663 60.2366 22.2989 59.7678 22.7678C59.2989 23.2366 58.663 23.5 58 23.5H50C49.337 23.5 48.7011 23.2366 48.2322 22.7678C47.7634 22.2989 47.5 21.663 47.5 21C47.5 20.337 47.7634 19.7011 48.2322 19.2322C48.7011 18.7634 49.337 18.5 50 18.5ZM50 41.5H58C58.663 41.5 59.2989 41.7634 59.7678 42.2322C60.2366 42.7011 60.5 43.337 60.5 44C60.5 44.663 60.2366 45.2989 59.7678 45.7678C59.2989 46.2366 58.663 46.5 58 46.5H50C49.337 46.5 48.7011 46.2366 48.2322 45.7678C47.7634 45.2989 47.5 44.663 47.5 44C47.5 43.337 47.7634 42.7011 48.2322 42.2322C48.7011 41.7634 49.337 41.5 50 41.5Z"
                        fill="#1074FF"
                      />
                    </g>
                  </svg>
                </div>
                <div className="other-info-in-text-in-mutual-fund-products-top">
                  <p className="mutual-funds-heading-of-top-most-product-in-top-container">
                    Fixed Deposits
                  </p>
                  <p className="mutual-funds-text-details-of-top-most-product-in-top-container">
                    Book FDs in one-click without opening a bank account
                  </p>
                </div>
              </div>
            </div>

            <div className="second-container-to-hold-products">
              <p className="heading-of-first-container-to-hold">DATA</p>
              <div className="first-container-second-container-to-hold-data">
                <div className="first-second-container-to-hold-data-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M32.907 11.017V21.137H59.094C59.3203 21.1367 59.5372 21.0468 59.6973 20.8869C59.8573 20.727 59.9475 20.5102 59.948 20.284V11.017C59.976 9.69311 59.6103 8.39072 58.8973 7.27486C58.1843 6.15901 57.1561 5.27992 55.943 4.749C55.138 4.39673 54.2716 4.20644 53.393 4.189H26.353C27.2317 4.20694 28.0983 4.39778 28.9032 4.75064C29.7081 5.1035 30.4357 5.61146 31.0443 6.24551C31.6529 6.87955 32.1306 7.62728 32.4502 8.44598C32.7699 9.26467 32.9251 10.1383 32.907 11.017Z"
                      fill="#36A168"
                    />
                    <path
                      d="M47.1449 4.188H18.8149C17.0621 4.17441 15.3755 4.85713 14.1256 6.08619C12.8757 7.31524 12.1648 8.99014 12.1489 10.743V59.17C12.1487 59.2492 12.1708 59.3269 12.2125 59.3942C12.2542 59.4616 12.3139 59.5159 12.3849 59.551C12.4558 59.5866 12.5352 59.6017 12.6141 59.5946C12.6931 59.5876 12.7685 59.5586 12.8319 59.511L17.4669 55.977C17.6153 55.8639 17.7968 55.8026 17.9834 55.8026C18.17 55.8026 18.3515 55.8639 18.4999 55.977L23.2969 59.639C23.4451 59.7522 23.6264 59.8135 23.8129 59.8135C23.9994 59.8135 24.1807 59.7522 24.3289 59.639L29.1259 55.977C29.2755 55.8625 29.4586 55.8004 29.6469 55.8004C29.8353 55.8004 30.0184 55.8625 30.1679 55.977L34.9649 59.639C35.1131 59.7522 35.2944 59.8135 35.4809 59.8135C35.6674 59.8135 35.8487 59.7522 35.9969 59.639L40.7939 55.977C40.9425 55.8643 41.1239 55.8034 41.3104 55.8034C41.4969 55.8034 41.6783 55.8643 41.8269 55.977L46.4619 59.511C46.5252 59.5589 46.6006 59.5881 46.6797 59.5954C46.7587 59.6028 46.8382 59.5878 46.9092 59.5524C46.9802 59.5169 47.0399 59.4624 47.0816 59.3948C47.1232 59.3272 47.1452 59.2494 47.1449 59.17V16.138L47.1459 11.017C47.1181 9.69313 47.4839 8.3908 48.1968 7.27497C48.9098 6.15915 49.9379 5.28003 51.1509 4.749C51.9559 4.3966 52.8224 4.20631 53.7009 4.189L47.1449 4.188Z"
                      fill="#CDE7D9"
                    />
                    <g>
                      <path
                        d="M19.051 45.188C23.0293 45.1877 26.8445 43.6071 29.6574 40.7939C32.4702 37.9807 34.0503 34.1652 34.05 30.187C34.0498 26.2088 32.4692 22.3935 29.6559 19.5807C26.8427 16.7678 23.0273 15.1877 19.049 15.188C15.0708 15.1883 11.2556 16.7689 8.44274 19.5821C5.62988 22.3953 4.04978 26.2108 4.05005 30.189C4.05031 34.1672 5.63092 37.9824 8.44415 40.7953C11.2574 43.6082 15.0728 45.1883 19.051 45.188Z"
                        fill="#1275E5"
                      />
                    </g>
                    <path
                      d="M25.47 20.956C23.94 19.426 21.597 19.292 20.233 20.656L14.68 26.21C13.497 27.394 13.445 29.316 14.453 30.803L11.519 33.737C10.155 35.101 10.289 37.443 11.819 38.973C13.349 40.503 15.692 40.637 17.056 39.273L22.61 33.719C23.794 32.535 23.843 30.613 22.837 29.127L25.771 26.193C27.135 24.829 27.001 22.486 25.471 20.956H25.47ZM21.69 30.996C21.717 31.486 21.55 31.968 21.224 32.336L15.67 37.889C15.3031 38.2144 14.8224 38.3814 14.3327 38.3535C13.8431 38.3256 13.3845 38.105 13.057 37.74C12.6909 37.4127 12.4694 36.9536 12.4409 36.4634C12.4124 35.9731 12.5793 35.4915 12.905 35.124L15.9 32.13C17.343 32.959 19.104 32.86 20.217 31.747L21.553 30.411C21.628 30.597 21.68 30.793 21.691 30.997L21.69 30.996ZM17.242 30.787L18.459 29.57C18.8266 29.2431 19.3088 29.0752 19.8 29.103C19.886 29.108 19.97 29.126 20.052 29.143L18.832 30.363C18.464 30.6882 17.9823 30.8546 17.492 30.826C17.407 30.822 17.325 30.803 17.242 30.787ZM24.386 24.809L21.393 27.8C19.951 26.972 18.187 27.068 17.073 28.182L15.738 29.516C15.6604 29.3305 15.6134 29.1336 15.599 28.933C15.5709 28.4424 15.7381 27.9607 16.064 27.593L21.618 22.039C21.9854 21.713 22.467 21.546 22.9574 21.5745C23.4477 21.603 23.9068 21.8247 24.234 22.191C24.5997 22.5188 24.8209 22.9779 24.8494 23.4682C24.8778 23.9584 24.7113 24.4411 24.386 24.809Z"
                      fill="#CCE4FF"
                    />
                  </svg>
                </div>
                <div className="first-second-container-to-hold-data-about-data-com">
                  <p className="market-research-heading-insecond-data-container">
                    Market Research
                  </p>
                  <p className="market-research-deatils-in-text-data">
                    Deep-tech stock research & analysis
                  </p>
                </div>
              </div>
              <div className="first-container-second-container-to-hold-data">
                <div className="first-second-container-to-hold-data-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M55.5 4H27.5C26.3954 4 25.5 4.89543 25.5 6V58C25.5 59.1046 26.3954 60 27.5 60H55.5C56.6046 60 57.5 59.1046 57.5 58V6C57.5 4.89543 56.6046 4 55.5 4Z"
                      fill="#CDE7D9"
                    />
                    <path
                      d="M40 53H44C44.3978 53 44.7794 53.158 45.0607 53.4393C45.342 53.7206 45.5 54.1022 45.5 54.5C45.5 54.8978 45.342 55.2794 45.0607 55.5607C44.7794 55.842 44.3978 56 44 56H40C39.6022 56 39.2206 55.842 38.9393 55.5607C38.658 55.2794 38.5 54.8978 38.5 54.5C38.5 54.1022 38.658 53.7206 38.9393 53.4393C39.2206 53.158 39.6022 53 40 53Z"
                      fill="#36A168"
                    />
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.881 14.004H32.5C33.0304 14.004 33.5391 14.2147 33.9142 14.5898C34.2893 14.9649 34.5 15.4736 34.5 16.004V47.604C34.5 47.653 34.485 47.701 34.458 47.743C34.4303 47.7857 34.3911 47.8196 34.345 47.841C34.2981 47.8628 34.2462 47.872 34.1947 47.8676C34.1431 47.8632 34.0936 47.8454 34.051 47.816L31.005 45.616C30.9062 45.5447 30.7874 45.5063 30.6655 45.5063C30.5436 45.5063 30.4248 45.5447 30.326 45.616L27.174 47.896C27.0749 47.9668 26.9562 48.0048 26.8345 48.0048C26.7128 48.0048 26.5941 47.9668 26.495 47.896L23.342 45.616C23.2427 45.5435 23.1229 45.5044 23 45.5044C22.8771 45.5044 22.7573 45.5435 22.658 45.616L19.505 47.896C19.4062 47.9673 19.2874 48.0057 19.1655 48.0057C19.0436 48.0057 18.9248 47.9673 18.826 47.896L15.674 45.616C15.5749 45.5452 15.4562 45.5072 15.3345 45.5072C15.2128 45.5072 15.0941 45.5452 14.995 45.616L11.949 47.816C11.9175 47.8381 11.882 47.8538 11.8445 47.8621C11.8069 47.8704 11.7681 47.8711 11.7303 47.8644C11.6924 47.8576 11.6563 47.8434 11.624 47.8225C11.5917 47.8017 11.5638 47.7747 11.542 47.743C11.5148 47.7014 11.5002 47.6527 11.5 47.603V18.084C11.504 17.614 11.505 16.79 11.504 16.005C11.5035 15.7422 11.5547 15.4819 11.6548 15.2389C11.7549 14.996 11.9018 14.7751 12.0872 14.5889C12.2727 14.4027 12.493 14.2549 12.7356 14.1538C12.9781 14.0528 13.2382 14.0005 13.501 14C14.391 14 15.354 14 15.881 14.004Z"
                        fill="#1275E5"
                      />
                    </g>
                    <path
                      d="M8 25H23C23.3978 25 23.7794 25.158 24.0607 25.4393C24.342 25.7206 24.5 26.1022 24.5 26.5C24.5 26.8978 24.342 27.2794 24.0607 27.5607C23.7794 27.842 23.3978 28 23 28H8C7.60218 28 7.22064 27.842 6.93934 27.5607C6.65804 27.2794 6.5 26.8978 6.5 26.5C6.5 26.1022 6.65804 25.7206 6.93934 25.4393C7.22064 25.158 7.60218 25 8 25ZM8 31H18C18.3978 31 18.7794 31.158 19.0607 31.4393C19.342 31.7206 19.5 32.1022 19.5 32.5C19.5 32.8978 19.342 33.2794 19.0607 33.5607C18.7794 33.842 18.3978 34 18 34H8C7.60218 34 7.22064 33.842 6.93934 33.5607C6.65804 33.2794 6.5 32.8978 6.5 32.5C6.5 32.1022 6.65804 31.7206 6.93934 31.4393C7.22064 31.158 7.60218 31 8 31Z"
                      fill="#CCE4FF"
                    />
                  </svg>
                </div>
                <div className="first-second-container-to-hold-data-about-data-com">
                  <p className="market-research-heading-insecond-data-container">
                  Historical Performance
                  </p>
                  <p className="market-research-deatils-in-text-data">
                  Multi timeframe historical data for stocks, mutual funds & digital gold
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-inner">
          <div className="nav-contents-container">
            <Link to={'/'}><div className="logo"></div></Link>
            <div className="gateway-button-all-in-one">
                <p>Gateway </p>
                <span className="circle" >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <circle cx="11.5" cy="11.5" r="11.5" fill="#F05656"/>
                </svg>
                </span>
            </div>
            <div className="navbar-options">
              <p className="products-text" onClick={() => setShow(!show)}>
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  className="tilt-arrpw"
                >
                  <path
                    d="M12.4078 11.4599C11.6303 12.18 10.4429 12.18 9.664 11.4599C9.63019 11.4234 9.63019 11.4234 9.63019 11.4234L0.553557 3.05284C-0.184519 2.33268 -0.184519 1.23679 0.553557 0.516634C1.33107 -0.172211 2.51847 -0.172211 3.29176 0.516634L11.0345 7.7195L18.742 0.584475C19.4801 -0.0991523 20.707 -0.0991523 21.4464 0.584475C22.1845 1.27332 22.1845 2.40444 21.4464 3.08937L12.4078 11.4599Z"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="about-us-text">AboutUs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="first-container">
        <div className="first-decenent-in-container-first">
          <div className="investement-stack-details">
            <div className="stack-details-one">
              INVESTMENT STACK <span className="for-india">for India</span>
            </div>
            <div className="stack-details-info">
              Elevate Your Investment Strategy with Our{" "}
              <span className="comprehensive-api">Comprehensive APIs</span>
            </div>
          </div>

          <div className="investment-stack-other-info">
            <div className="some-good-advices">
              Launch financial services in a matter of days. Take your pick from
              our flexible APIs, SDKs, or ready-to-use screens.
            </div>

            <div className="see-our-products">
              See our products{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="13"
                viewBox="0 0 22 13"
                fill="black"
              >
                <path
                  d="M12.4078 11.6709C11.6303 12.3697 10.4429 12.3697 9.664 11.6709C9.63019 11.6354 9.63019 11.6354 9.63019 11.6354L0.553557 3.51308C-0.184519 2.81428 -0.184519 1.75087 0.553557 1.05207C1.33107 0.383645 2.51847 0.383645 3.29176 1.05207L11.0345 8.0414L18.742 1.1179C19.4801 0.454538 20.707 0.454538 21.4464 1.1179C22.1845 1.78632 22.1845 2.8839 21.4464 3.54853L12.4078 11.6709Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="contact-us-button">Contact Us</div>
          </div>
        </div>
        <div className="cards-div">
          <div className="card-one-green">
            <div className="claw-image"></div>
            <p className="stocks-text">Stocks</p>
          </div>

          <div className="card-two-red">
            <div className="claw-image-two"></div>
            <p className="mutual-fund-text">Mutual Funds</p>
          </div>

          <div className="card-three-gold">
            <div className="claw-image-three"></div>
            <p className="digital-gold-text">Digital Gold</p>
          </div>
        </div>
      </div>

      <div className="second-container-white-bg">
        <div className="child-features-container">
          <div className="child-second-features">
            <p className="features">FEATURES</p>
            <p className="feature-exp">
              Launch the most Engaging Invest-Tech Solutions
            </p>
            <p className="featur-last">
              We offer a suite of B2B Invest-tech solutions, that are
              cost-effective way to offer an engaging investment experience to
              your customers, with a faster time to market
            </p>

            <div className="button-container-second">
              <button className="featur-button-child-one">Get the App</button>
              <p className="featur-button-child-two">Learn More</p>
            </div>
          </div>

          <div className="fetures-container-number-two">
            <div className="protection-container">
              <p className="protection-text">Protection</p>

              <div className="protection-image-in-container"></div>
              <p className="text-details-in-protection">
                Data protection guarentees
              </p>
            </div>

            <div className="tracking-container">
              <p className="tracking-text">Tracking</p>
              <div className="tracking-image-in-container"></div>
              <div className="text-details-in-tracking">
                Track all your users’ financial transactions
              </div>
            </div>

            <div className="protection-container-two">
              <p className="flexibility-text">Flexibility</p>
              <div className="flexibility-image-in-container"></div>
              <div className="text-details-in-flexibility">
                Custom made for your requirements
              </div>
            </div>

            <div className="protection-container-three">
              <p className="easiness-text">Easiness</p>
              <div className="easiness-image-in-container"></div>
              <div className="text-details-in-easiness">
                Go-to market in less than 7 days
              </div>
            </div>
          </div>
        </div>

        <div className="connecting-finances-container">
          <div className="headings-and-thoughts-about-connecting-finanaces">
            <p className="heading-about-connecting-finances">
              Connect your platform finances now with InvestPe Gateway
            </p>
            <p className="text-details-about-connecting-finances">
              We help brokers, wealth managers, fund managers & other businesses
              / startups server their customers better with our suite of modern
              digital investment stack
            </p>
            <div className="try-investpay-now">Try Investpe Now</div>
          </div>
          <div className="hand-image-in-connecting-finances"></div>
        </div>

        <div className="solution-container-for-finanace">
          <p className="solution-text">SOLUTION</p>
          <p className="solution-container-heading">
            Stay ahead with our Wealth-tech as a service
          </p>
          <div className="solution-questions-and-answers">
            <div className="container-with-all-boxes">
              <div className="container-with-two-boxes">
                <div className="why-start-with-us">
                  <div className="top-image-container-why-start-with-us"></div>
                  <p className="investype-in-why-start-with-us">INVESTPE</p>
                  <p className="question-text-why-start-with-us">
                    Why does it make sense to start with us?
                  </p>
                </div>

                <div className="we-value-your-time-container">
                  <div className="flex-container-in-we-value-your-time">
                    <div className="heading-and-text-in-we-value-your-time">
                      <p className="heading-of-we-value-your-time-child-container">
                        We value your precious time.
                      </p>
                      <p className="other-text-info-of-we-value-your-time-child-container">
                        No regulatory licenses required as we have everything
                        for you to get started.
                      </p>
                    </div>

                    <div className="dashboard-showing-picture-in-we-value-your-time"></div>
                  </div>
                </div>

                <div className="mutual-funds-and-complete-infra">
                  <div className="mutual-funds-text-in-mutual-and-complete-infra">
                    MUTUAL FUNDS
                  </div>

                  <p className="get-complete-infra-text">
                    Get the complete MF Infra & focus on customer engagement
                  </p>

                  <div className="some-main-points-to-be-noticed">
                    <div className="first-point-includes-sebi">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_14558_8220)">
                          <path
                            d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14558_8220">
                            <rect width="21" height="21" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="sebi-text-of-first-point">
                        SEBI compliant KYC process
                      </p>
                    </div>
                    <div className="first-point-includes-sebi">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_14558_8220)">
                          <path
                            d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14558_8220">
                            <rect width="21" height="21" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="sebi-text-of-first-point">
                        Multi-AMC empanelments
                      </p>
                    </div>
                    <div className="first-point-includes-sebi">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_14558_8220)">
                          <path
                            d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14558_8220">
                            <rect width="21" height="21" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="sebi-text-of-first-point">
                        Transact & Track orders
                      </p>
                    </div>
                    <div className="first-point-includes-sebi">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_14558_8220)">
                          <path
                            d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14558_8220">
                            <rect width="21" height="21" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="sebi-text-of-first-point">
                        Advanced reporting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="one-gateway-for-all-security-questions">
                  <div className="indian-equity-text">INDIAN EQUITY</div>

                  <div className="heading-for-one-gateway-for-all-security">
                    One gateway for all top securities
                  </div>

                  <div className="container-holds-info-about-details-of-this">
                    <div className="first-point-container-holds-info-of-this">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_14558_8265)">
                          <path
                            d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14558_8265">
                            <rect width="21" height="21" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="text-related-to-the-first-container-that-holds-info">
                        Enable stocks, ETFs & expert curated stock baskets in
                        your app
                      </p>
                    </div>

                    <div className="second-point-container-holds-info-of-this">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_14558_8265)">
                          <path
                            d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                            stroke="#1C1E21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14558_8265">
                            <rect width="21" height="21" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="text-related-to-the-second-container-that-holds-info">
                        Integrates with all major brokers
                      </p>
                    </div>

                    <div className="offers-expert-curated">
                      Offer expert curated & monitored stock basket solutions
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-with-single-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M54.292 5.5H5.708C4.48856 5.5 3.5 6.48856 3.5 7.708V56.292C3.5 57.5114 4.48856 58.5 5.708 58.5H54.292C55.5114 58.5 56.5 57.5114 56.5 56.292V7.708C56.5 6.48856 55.5114 5.5 54.292 5.5Z"
                    fill="#CCE4FF"
                  />
                  <g>
                    <path
                      d="M26.433 21C26.433 20.4033 26.196 19.831 25.774 19.409C25.352 18.9871 24.7798 18.75 24.183 18.75C23.5863 18.75 23.014 18.9871 22.592 19.409C22.1701 19.831 21.933 20.4033 21.933 21V24.335C20.1553 24.8044 18.5687 25.8177 17.395 27.233L14.266 25.426C13.7491 25.1276 13.1348 25.0468 12.5584 25.2014C11.9819 25.3559 11.4904 25.7331 11.192 26.25C10.8936 26.7669 10.8128 27.3812 10.9674 27.9577C11.1219 28.5341 11.4991 29.0256 12.016 29.324L15.494 31.332C15.405 31.8391 15.3605 32.3531 15.361 32.868C15.361 33.945 15.554 34.976 15.907 35.93L12.016 38.176C11.4991 38.4744 11.1219 38.9659 10.9674 39.5423C10.8128 40.1188 10.8936 40.7331 11.192 41.25C11.4904 41.7669 11.9819 42.1441 12.5584 42.2986C13.1348 42.4532 13.7491 42.3724 14.266 42.074L18.509 39.624C19.505 40.4619 20.6744 41.0685 21.933 41.4V46.5C21.933 47.0967 22.1701 47.669 22.592 48.091C23.014 48.5129 23.5863 48.75 24.183 48.75C24.7798 48.75 25.352 48.5129 25.774 48.091C26.196 47.669 26.433 47.0967 26.433 46.5V41.4C27.6916 41.0685 28.861 40.4619 29.857 39.624L34.1 42.074C34.6169 42.3724 35.2312 42.4532 35.8077 42.2986C36.3842 42.1441 36.8756 41.7669 37.174 41.25C37.4724 40.7331 37.5532 40.1188 37.3987 39.5423C37.2441 38.9659 36.8669 38.4744 36.35 38.176L32.459 35.93C32.8212 34.9498 33.0061 33.913 33.005 32.868C33.005 32.344 32.959 31.83 32.872 31.332L36.35 29.324C36.8669 29.0256 37.2441 28.5341 37.3987 27.9577C37.5532 27.3812 37.4724 26.7669 37.174 26.25C36.8756 25.7331 36.3842 25.3559 35.8077 25.2014C35.2312 25.0468 34.6169 25.1276 34.1 25.426L30.971 27.233C29.7973 25.8177 28.2107 24.8044 26.433 24.335V21Z"
                      fill="#575CCE"
                    />
                  </g>
                  <g>
                    <path
                      d="M24.183 38.3469C27.1195 38.3469 29.5 35.9664 29.5 33.0299C29.5 30.0934 27.1195 27.7129 24.183 27.7129C21.2465 27.7129 18.866 30.0934 18.866 33.0299C18.866 35.9664 21.2465 38.3469 24.183 38.3469Z"
                      fill="#1074FF"
                    />
                  </g>
                  <g>
                    <path
                      d="M50 18.5H58C58.663 18.5 59.2989 18.7634 59.7678 19.2322C60.2366 19.7011 60.5 20.337 60.5 21C60.5 21.663 60.2366 22.2989 59.7678 22.7678C59.2989 23.2366 58.663 23.5 58 23.5H50C49.337 23.5 48.7011 23.2366 48.2322 22.7678C47.7634 22.2989 47.5 21.663 47.5 21C47.5 20.337 47.7634 19.7011 48.2322 19.2322C48.7011 18.7634 49.337 18.5 50 18.5ZM50 41.5H58C58.663 41.5 59.2989 41.7634 59.7678 42.2322C60.2366 42.7011 60.5 43.337 60.5 44C60.5 44.663 60.2366 45.2989 59.7678 45.7678C59.2989 46.2366 58.663 46.5 58 46.5H50C49.337 46.5 48.7011 46.2366 48.2322 45.7678C47.7634 45.2989 47.5 44.663 47.5 44C47.5 43.337 47.7634 42.7011 48.2322 42.2322C48.7011 41.7634 49.337 41.5 50 41.5Z"
                      fill="#1074FF"
                    />
                  </g>
                </svg>

                <div className="fixed-deposit-text">FIXED DEPOSITS</div>

                <div className="heading-fully-digital-fds">
                  Fully digital FDs for your users
                </div>

                <div className="fixed-deposit-details-text">
                  Offer fixed deposits on your app or website, from multiple
                  banks. Embed a pre-built SDK and go live in weeks.
                </div>

                <div className="screenshot-of-service-in-it"></div>
              </div>
            </div>
          </div>
        </div>

        <Partners />

        <div className="how-would-you-like-to-work-with-us">
          <div className="main-child-of-how-to-work-with-us">
            <div className="first-container-of-how-to-work-with-us">
              <p className="text-how-would-you-work-with-us">
                How would you like to work with us?
              </p>

              <p className="tell-us-more-about-yourself">
                Tell us more about yourself, and we’ll reach out to you as soon
                as possible.
              </p>

              <div className="foam-information-about-you">
                <div className="holder-form-form-inputs">
                  <p className="work-email-of-yours">Work email</p>

                  <input
                    type="text"
                    className="input-box-of-work-email"
                    placeholder="abc@xyz.com"
                  />
                </div>

                <div className="holder-for-form-inputs">
                  <p className="work-email-of-yours">Company Name</p>

                  <input type="text" className="input-box-of-work-email" />
                </div>
                <div className="holder-for-form-inputs">
                  <p className="work-email-of-yours">Mobile Number</p>

                  <input type="text" className="input-box-of-work-email" />
                </div>
              </div>
            </div>

            <div className="second-container-how-to-work-with-us">
              <p className="headings-of-products-listed">
                Which products are you interested in?
              </p>
              <div className="products-lists-in-detail">
                <div className="mutual-funds-service">
                  <p className="heading-of-mutual-funds">Mutual Funds</p>
                  <p className="mutual-fund-details-in-text-form">
                    E2E infrastructure for mutual fund investing
                  </p>
                </div>
                <div className="mutual-funds-service">
                  <p className="heading-of-mutual-funds">Indian Equity</p>
                  <p className="mutual-fund-details-in-text-form">
                    Stock gateway & stock baskets
                  </p>
                </div>
                <div className="mutual-funds-service">
                  <p className="heading-of-mutual-funds">Digital Gold</p>
                  <p className="mutual-fund-details-in-text-form">
                    Buy & Sell digital gold hassle free
                  </p>
                </div>
                <div className="mutual-funds-service">
                  <p className="heading-of-mutual-funds">Fixed Deposits</p>
                  <p className="mutual-fund-details-in-text-form">
                    Book FDs in 1click w/o opening a bank ac
                  </p>
                </div>
              </div>

              <div className="submit-button">Submit</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
