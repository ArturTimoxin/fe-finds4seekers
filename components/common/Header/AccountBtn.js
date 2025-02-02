import React, { useState } from "react";
import Link from "next/link";
import { Dropdown } from "semantic-ui-react";
import Image from "next/image";
import ProfileImg from "../../../public/images/profile2.png";

const AccountBtn = ({ logout, userData, toggleAuthModal }) => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);

  const onClickAccount = () => {
    if (userData) {
      setIsOpenDropDown(!isOpenDropdown);
      return;
    }
    toggleAuthModal();
  };

  const onCloseDropdown = () => {
    setIsOpenDropDown(false);
  };

  const onClickLogout = () => {
    onCloseDropdown();
    logout();
  };

  return (
    <div className="account-btn">
      <div className="account-logo">
        <Image
          width={65}
          height={65}
          alt="account-logo"
          src={ProfileImg}
          onClick={onClickAccount}
        />
      </div>
      <Dropdown direction="left" icon="" open={isOpenDropdown}>
        <Dropdown.Menu>
          <Dropdown.Item
            disabled
            text={`Hello, ${userData && userData.firstname}`}
          />
          <Link href="/account">
            <Dropdown.Item text="My Ads" onClick={onCloseDropdown} />
          </Link>
          <Link href="/account/answers">
            <Dropdown.Item text="Answers" onClick={onCloseDropdown} />
          </Link>
          {/* <Link href='/account/commentaries'>
                        <Dropdown.Item text='My commentaries' onClick={onCloseDropdown} />
                    </Link> */}
          <Dropdown.Item text="Logout" onClick={onClickLogout} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AccountBtn;
