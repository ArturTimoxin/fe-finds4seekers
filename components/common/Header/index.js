import React, { useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import AccountBtn from "./AccountBtn";
import AuthModal from "../AuthModal";
import { connect } from "react-redux";
import { actions } from "../../../store";
import { getDataFromLS } from "../../../utils/getDataFromLS";
import PhotoModal from "../../common/PhotoSlider/PhotoModal";
import Image from "next/image";
import LogoImg from "../../../public/images/logo2.png";

const Header = ({
  isOpenAuthModal,
  userData,
  login,
  logout,
  toggleAuthModal,
  isLoginAuthModalMode,
  setAuthModalMode,
  getAdsCategories,
  modalPhoto,
  setModalPhoto,
}) => {
  useEffect(() => {
    login(getDataFromLS("userData"), getDataFromLS("token"));
    getAdsCategories();
  }, []);

  return (
    <>
      <header className="common-header">
        <Link href="/">
          <div className="title-logo">
            <Image src={LogoImg} alt="logo" width={93} height={80}></Image>
          </div>
        </Link>
        <div className="wrap-head-actions">
          <Search />
          <AccountBtn
            userData={userData}
            toggleAuthModal={toggleAuthModal}
            logout={logout}
          />
        </div>
      </header>
      <AuthModal
        isOpen={isOpenAuthModal}
        onClose={toggleAuthModal}
        login={login}
        isLoginMode={isLoginAuthModalMode}
        setIsLoginMode={setAuthModalMode}
      />
      <PhotoModal photo={modalPhoto} onClose={() => setModalPhoto(null)} />
    </>
  );
};

const mapStateToProps = (store) => ({
  isOpenAuthModal: store.app.isOpenAuthModal,
  isLoginAuthModalMode: store.app.isLoginAuthModalMode,
  userData: store.app.userData,
  modalPhoto: store.app.modalPhoto,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData, token) => dispatch(actions.app.login(userData, token)),
  logout: () => dispatch(actions.app.logout()),
  toggleAuthModal: () => dispatch(actions.app.toggleAuthModal()),
  setAuthModalMode: (isLogin) =>
    dispatch(actions.app.setAuthModalMode(isLogin)),
  getAdsCategories: () => dispatch(actions.app.getAdsCategories()),
  setModalPhoto: (photo) => dispatch(actions.app.setModalPhoto(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
