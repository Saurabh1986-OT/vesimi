import LogoImage from "../../assets/images/VESIMI_new_logo-03.png";
import "../../scss/customPopup.css";
import MasabaImg from "../../assets/images/msb23608.jpg";
import RidhimaImg from "../../assets/images/rr025-saj.png";
import Kalighata from "../../assets/images/avyanna.jpg";
import MoleradoImg from "../../assets/images/Moledro.jpg"
import WaverImg from "../../assets/images/WeaverStory.jpg";
import OneKnot from "../../assets/images/one.jpg";
import KupkImg from "../../assets/images/kupk-hans.jpg";
import MsbImg from "../../assets/images/msb23016.jpg";
import AhiiImg from "../../assets/images/ahii123013.jpg";
import Man1Img from "../../assets/images/snbs22mtr04.jpg"
import Man2Img from "../../assets/images/maaya25-2.jpg";
import Man3Img from "../../assets/images/jm-ss22.png";
import Kids1Img from "../../assets/images/fk2708-fs23.jpg";
import Kids2Img from "../../assets/images/lc-bdh.jpg";
import Kids3Img from "../../assets/images/lb3-aw-kpj.jpg";
import ToraniImg from "../../assets/images/torani0004.jpg";
import PlodImg from "../../assets/images/bucket_black.jpg";
import AmrtiImg from "../../assets/images/gdm-ad010.jpg";
import Jewellery1Img from "../../assets/images/bipc-pcbn.jpg"
import Jewellery2Img from "../../assets/images/07_3.jpg";
import Jewellery3Img from "../../assets/images/jm_ss22.png";
import CustomPopup from "component/modal/CustomPopup";
import { Button, Form } from "react-bootstrap";
import HeaderController from "./headerController";
import InputField from "component/forms/InputField";
import { getCategoryUrl, getPrice, removeSpaceOnly } from "utils";
import { Link } from "react-router-dom";
import { countryOptions } from "constant";

const Header = () => {

  const {
    isOpenLoginPopup,
    handleOpenLoginPopup,
    isOpenSignupPopup,
    handleOpenSignupPopup,
    navigate,
    loginFormik,
    signupFormik,
    loginDetails,
    handleLogout,
    handleSearch,
    searchInput,
    handleCurrencyChange,
    setSearchInput,
    selectedCurrency
  } = HeaderController();

  return (
    <header>
      <div className="headerTopRow">
        <div className="container">
          <div className="headerTop">
            <div className="navBrand">
              <button
                className="MobileNavToggle bg-image d-block d-lg-none "
                style={{ backgroundPosition: "-260px -158px" }}
              ></button>
              <img src={LogoImage} onClick={() => navigate("/")} />
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle bg-transparent border-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-sm me-2">{countryOptions[selectedCurrency]?.country}</span>
                  <span className="pl-1 text-sm cursor-pointer">({countryOptions[selectedCurrency]?.currency})</span>
                </button>
                <div
                  className="dropdown-menu countrySETWrap"
                  aria-labelledby="countrySET"
                >
                  <ul className="SearchedcountryList">
                    {Object.values(countryOptions).filter((el: any) => el.currency !== selectedCurrency).map((element: any) => {
                      return <li key={element?.currency} onClick={() => handleCurrencyChange(element)}>
                        <span>{element.country}</span>
                        <span>({element.currency})</span>
                      </li>
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="HeaderSearchOuter">
              <form onSubmit={handleSearch}>
                <span
                  className="headerSearchIcon bg-image"
                  style={{ backgroundPosition: "-411px -132px" }}
                ></span>
                <input
                  type="text"
                  value={searchInput}
                  className=""
                  onChange={
                    (e) => setSearchInput(e.target.value)
                  }
                  placeholder="Search for products, brand and more"
                />
                <button className="uploadSearchPicRight" type="submit">
                  Search
                </button>
              </form>
            </div>

            <div className="headerRight">
              <ul>
                <li className="profile">
                  <span
                    className="profileIcon bg-image w-5 h-6 d-block"
                    style={{ backgroundPosition: "-258px -132px" }}
                  ></span>
                  Profile
                  {loginDetails ? <ul className="ProfileDropDown">
                    <li ><Link to={"/account"}>Your Account</Link></li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul> :

                    <ul className="ProfileDropDown">
                      <li onClick={() => handleOpenLoginPopup(!isOpenLoginPopup)}>
                        Login
                      </li>
                      <li onClick={() => handleOpenSignupPopup(!isOpenSignupPopup)}>
                        Register
                      </li>
                    </ul>}
                </li>
                <li className="wishList">
                  <span
                    className="profileIcon bg-image w-6 h-6 d-block"
                    style={{ backgroundPosition: "-291px -132px" }}
                  ></span>
                  Wishlist
                </li>
                <li className="Cart">
                  <span
                    className="profileIcon bg-image w-5 h-6 d-block"
                    style={{ backgroundPosition: "-329px -132px" }}
                  ></span>
                  Cart
                </li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=919820082317"
                >
                  <li className="watsap bg-image ms-3" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 
			<!-- header Nav bar --> */}

      <div className="headerNav">
        <div className="container">
          <nav className="Nav-bar">
            <ul>
              <li onClick={() => navigate("/")}>
                <span>Home</span>
              </li>
              {/* <!-- what's new  --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl(5))}>What's New</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(358))}>
                            Women
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1342))}>
                            Men
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1424))}>
                            Jewellery
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1407))}>
                            Accessories
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1389))}>
                            Kids
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4 onClick={() => navigate(getCategoryUrl(6))}>
                          DESIGNERS
                        </h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(28))}>
                            Masaba
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(180))}>
                            Vvani by Vani Vats
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1508))}>
                            Vannikaa Malik
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(359))}>
                            Krisha Sunny Ramani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(527))}>
                            Redpine Designs
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1171))}>
                            Kudi Pataka
                          </li>


                          <li onClick={() => navigate(getCategoryUrl(1562))}>
                            Rooh by Ridhimaa
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(981))}>
                            Deme by Gabriella
                          </li>

                          <li onClick={() => navigate(getCategoryUrl(1484))}>
                            Tyohar
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={MasabaImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Masaba</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={RidhimaImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Ridhimaa Gupta</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Kalighata} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Kalighata</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Designers --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl(6))}>Designers</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>SALE</h4>
                        <ul>

                          <li onClick={() => navigate(getCategoryUrl(392))}>
                            Kovet
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(836))}>
                            Khushboo & Pankaj
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1079))}>
                            Lil Drama
                          </li>

                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>FEATURED</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(706))}>
                            Amka India
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(760))}>
                            Amrit Dawani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(510))}>
                            Ease
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(389))}>
                            Inder Clothing Studio
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(76))}>
                            Masumi Mewawalla
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(206))}>
                            Monisha Jaising
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(216))}>
                            Nikita Vishakha
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(327))}>
                            Pink City by Sarika
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(242))}>
                            Neeta Lulla
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(158))}>
                            Mala And Kinnary
                          </li>


                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>TRENDING</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(1139))}>
                            Ahi Clothing
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(180))}>
                            Vvani by Vani Vats
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1508))}>
                            Vannikaa Malik
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(359))}>
                            Krisha Sunny Ramani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(678))}>
                            Bhanuni by Jyoti
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(774))}>
                            Enness Studio
                          </li>

                          <li onClick={() => navigate(getCategoryUrl(981))}>
                            Deme By Gabriella
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(693))}>
                            Mona & Vishu
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(877))}>
                            Jigar & Nikita
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(28))}>
                            Masaba
                          </li>


                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={MoleradoImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Moledro</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={WaverImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Weaver Story</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={OneKnot} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">One Knot One</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- WOMEN --> */}
              <li>
                <span>Woman</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(69))}>Lehengas</li>
                          <li onClick={() => navigate(getCategoryUrl(49))}>Dresses</li>
                          <li onClick={() => navigate(getCategoryUrl(62))}>Gowns</li>
                          <li onClick={() => navigate(getCategoryUrl(119))}>Blouses</li>
                          <li onClick={() => navigate(getCategoryUrl(106))}>Dupattas</li>
                          <li onClick={() => navigate(getCategoryUrl(13))}>Sarees</li>
                          <li onClick={() => navigate(getCategoryUrl(288))}>Crop Tops</li>
                          <li onClick={() => navigate(getCategoryUrl(54))}>Anarkali Set</li>
                          <li onClick={() => navigate(getCategoryUrl(165))}>Sharara Set</li>
                          <li onClick={() => navigate(getCategoryUrl(118))}>Lehenga Set</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(24))}>Kurta Sets</li>
                          <li onClick={() => navigate(getCategoryUrl(53))}>Palazzo Set</li>
                          <li onClick={() => navigate(getCategoryUrl(124))}>Skirt Sets</li>
                          <li onClick={() => navigate(getCategoryUrl(15))}>Pant Sets</li>
                          <li onClick={() => navigate(getCategoryUrl(23))}>Blazer Set</li>
                          <li onClick={() => navigate(getCategoryUrl(91))}>Jackets</li>
                          <li onClick={() => navigate(getCategoryUrl(155))}>Jumpsuits</li>
                          <li onClick={() => navigate(getCategoryUrl(264))}>Trousers</li>
                          <li onClick={() => navigate(getCategoryUrl(12))}>Kaftans</li>
                          <li onClick={() => navigate(getCategoryUrl(118))}>Tops</li>
                          <li onClick={() => navigate(getCategoryUrl(212))}>Co-Ord Set</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(1139))}>Ahi Clothing</li>
                          <li onClick={() => navigate(getCategoryUrl(180))}>Vvani by Vani Vats</li>
                          <li onClick={() => navigate(getCategoryUrl(1508))}>Vannikaa Malik</li>
                          <li onClick={() => navigate(getCategoryUrl(359))}>Krisha Sunny Ramani</li>
                          <li onClick={() => navigate(getCategoryUrl(678))}>Bhanuni by Jyoti</li>
                          <li onClick={() => navigate(getCategoryUrl(774))}>Enness Studio</li>
                          <li onClick={() => navigate(getCategoryUrl(981))}>Deme By Gabriella</li>
                          <li onClick={() => navigate(getCategoryUrl(593))}>Moledro</li>
                          <li onClick={() => navigate(getCategoryUrl(877))}>Jigar & Nikita</li>
                          <li onClick={() => navigate(getCategoryUrl(28))}>Masaba</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={AhiiImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Ahi Clothing</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={KupkImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Kudi Pataka</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={MsbImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Masaba</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Man --> */}
              <li>
                <span>Man</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(24))}>Kurta Sets</li>
                          <li onClick={() => navigate(getCategoryUrl(136))}>Kurtas</li>
                          <li onClick={() => navigate(getCategoryUrl(31))}>Kurta Pyjamas</li>
                          <li onClick={() => navigate(getCategoryUrl(140))}>Sherwanis</li>
                          <li onClick={() => navigate(getCategoryUrl(592))}>Nehru Jacket & Sets</li>
                          <li onClick={() => navigate(getCategoryUrl(141))}>Bandhgalas</li>
                          <li onClick={() => navigate(getCategoryUrl(30))}>Shirts</li>
                          <li onClick={() => navigate(getCategoryUrl(425))}>Footwear</li>
                          <li onClick={() => navigate(getCategoryUrl(138))}>Bottoms</li>
                          <li onClick={() => navigate(getCategoryUrl(91))}>Jackets</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(763))}>Tuxedo Set</li>
                          <li onClick={() => navigate(getCategoryUrl(269))}>Shorts</li>
                          <li onClick={() => navigate(getCategoryUrl(466))}>Tuxedo</li>
                          <li onClick={() => navigate(getCategoryUrl(1325))}>Ethnic Wear</li>
                          <li onClick={() => navigate(getCategoryUrl(264))}>Trousers</li>
                          <li onClick={() => navigate(getCategoryUrl(261))}>Waistcoat</li>
                          <li onClick={() => navigate(getCategoryUrl(468))}>Shrug Set</li>
                          <li onClick={() => navigate(getCategoryUrl(462))}>Pashmina Shawl</li>
                          <li onClick={() => navigate(getCategoryUrl(764))}>Jodhpuris</li>
                          <li onClick={() => navigate(getCategoryUrl(10))}>Bandi Set</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(389))}>Inder Clothing Studio</li>
                          <li onClick={() => navigate(getCategoryUrl(131))}>Jenjum Gadi</li>
                          <li onClick={() => navigate(getCategoryUrl(426))}>Kalista</li>
                          <li onClick={() => navigate(getCategoryUrl(359))}>Krisha Sunny Ramani</li>
                          <li onClick={() => navigate(getCategoryUrl(28))}>Masaba</li>
                          <li onClick={() => navigate(getCategoryUrl(254))}>S&N by Shantnu Nikhil</li>
                          <li onClick={() => navigate(getCategoryUrl(459))}>Jatin Malik Couture</li>
                          <li onClick={() => navigate(getCategoryUrl(836))}>Khushboo & Pankaj</li>
                          <li onClick={() => navigate(getCategoryUrl(877))}>Jigar & Nikita</li>
                          <li onClick={() => navigate(getCategoryUrl(997))}>Rey & I</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Man1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">SHANTNU & NIKHIL</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Man2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            KRISHA SUNNY RAMANI
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Man3Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            JATIN MALIK COUTURE
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Kids --> */}
              <li>
                <span>Kids</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>BOYS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(269))}>Shorts</li>
                          <li onClick={() => navigate(getCategoryUrl(24))}>Kurta Sets</li>
                          <li onClick={() => navigate(getCategoryUrl(136))}>Kurtas</li>
                          <li onClick={() => navigate(getCategoryUrl(91))}>Jackets</li>
                          <li onClick={() => navigate(getCategoryUrl(140))}>Sherwanis</li>
                          <li onClick={() => navigate(getCategoryUrl(1170))}>Suits & Tuxedos</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>GIRLS</h4>
                        <ul>
                          <li>Dresses</li>
                          <li>Kurta Sets</li>
                          <li>Pant Sets</li>
                          <li>Lehengas</li>
                          <li>Jumpsuits</li>
                          <li>Skirt Sets</li>
                          <li>Tunics & Kurtis</li>
                          <li>Gowns</li>
                          <li>Sarees</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>Rey&I</li>
                          <li>LittleCheer</li>
                          <li>Lil Drama</li>
                          <li>Fayyon Kids</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Kids1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">FAYYON KIDS</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Kids2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">LITTLECHEER</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Kids3Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">LIL DRAMA</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Accessories --> */}
              <li>
                <span>Accessories</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Bags</li>
                          <li>Belts</li>
                          <li>Gloves</li>
                          <li>Brooches</li>
                          <li>Clutch</li>
                          <li>Potli</li>
                          <li>Purse</li>
                          <li>Pocket Squares</li>
                          <li>Mens Footwear</li>
                          <li>Womens Footwear</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>Clutch'D</li>
                          <li>Devina juneja</li>
                          <li>Torani</li>
                          <li>Veruschka</li>
                          <li>S&N by Shantnu Nikhil</li>
                          <li>Jatin Malik Couture</li>
                          <li>Plode</li>
                          <li>Amrit Dawani</li>
                          <li>Bijoux by Priya Chandna</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={ToraniImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">TORANI</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={PlodImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">PLODE</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={AmrtiImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">AMRIT DAWANI</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Jewellery --> */}
              <li>
                <span>Jewellery</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Earrings</li>
                          <li>Bracelet</li>
                          <li>Bangle</li>
                          <li>Neckpiece</li>
                          <li>Mala</li>
                          <li>Kalgi</li>
                          <li>Rings</li>
                          <li>Necklaces</li>
                          <li>Pendants</li>
                          <li>Hair Accessories</li>
                          <li>Chains</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>Juwelen</li>
                          <li>Jatin Malik Couture</li>
                          <li>Mozaati</li>
                          <li>Tesoro by Bhavika</li>
                          <li>Twyla Treasures</li>
                          <li>Bijoux by Priya Chandna</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Jewellery1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            BIJOUX BY PRIYA CHANDNA
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Jewellery2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">JUWELEN</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Jewellery3Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            JATIN MALIK COUTURE
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- The Vesimi Voice --> */}
              <li>
                <span>The Vesimi Voice</span>{" "}
              </li>
              <li>
                <span>Gift card</span>
              </li>
              <li className="textred">
                <span>Sale</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <CustomPopup
        modalClass="loginModal"
        show={isOpenLoginPopup}
        handleClose={() => handleOpenLoginPopup(false)}
        modalHeader="Login"
      >
        <Form onSubmit={loginFormik?.handleSubmit}>
          <InputField
            label={"Email or Phone"}
            onChange={loginFormik.handleChange}
            name="email"
            type="name"
            placeholder="Enter email or phone number"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <InputField
            label={"Password"}
            onChange={loginFormik.handleChange}
            name="password"
            type="password"
            placeholder="Enter password"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <div className="mt-3 d-flex justify-content-between">
            <Button variant="link" onClick={() => { }}>
              Forgot password?
            </Button>
            <Button
              variant="link"
              onClick={() => {
                handleOpenLoginPopup(false);
                handleOpenSignupPopup(true);
              }}
            >
              Create an account
            </Button>
          </div>
          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button
              className="font-14 w-100 themeCancelBtn"
              onClick={() => handleOpenLoginPopup(false)}
            >
              Cancel
            </Button>
            <Button className="font-14 w-100 themePrimaryBtn" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </CustomPopup>
      <CustomPopup
        modalClass="loginModal"
        show={isOpenSignupPopup}
        modalHeader="Create an Account"
        handleClose={() => handleOpenSignupPopup(false)}
      >
        <Form onSubmit={signupFormik.handleSubmit}>
          <InputField
            label={"Name"}
            onChange={signupFormik.handleChange}
            name="name"
            type="name"
            placeholder="Enter name"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <InputField
            label={"Email or Phone"}
            onChange={signupFormik.handleChange}
            name="email_or_phone"
            type="name"
            placeholder="Enter email or Contact number"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <InputField
            label={"Password"}
            onChange={signupFormik.handleChange}
            name="password"
            type="password"
            placeholder="Enter password"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <InputField
            label={"Confirm Password"}
            onChange={signupFormik.handleChange}
            name="passowrd_confirmation"
            type="passowrd"
            placeholder="Enter confirm password"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
         
          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button
              className="font-14 w-100 themeCancelBtn"
              onClick={() => handleOpenSignupPopup(false)}
            >
              Cancel
            </Button>
            <Button className="font-14 w-100 themePrimaryBtn" type="submit">
              SignUp
            </Button>
          </div>
        </Form>
        <div className="mt-3 d-flex justify-content-center"> 
           <Button  className="ps-0 d-block text-center text-dark"
              variant="link"
              onClick={() => {
                handleOpenLoginPopup(true);
                handleOpenSignupPopup(false);
              }}
            >
              Already have an account
            </Button>
            </div>
        <div className="mt-4 text-center">
          {/* <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={()=>{}}
              onError={()=>{}}
            />
          </GoogleOAuthProvider> */}
        </div>
      </CustomPopup>
    </header>
  );
};

export default Header;