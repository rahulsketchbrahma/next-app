import Link from "next/link";
import React from "react";
import { HeaderContainer, MenusContainer } from "./style";
function Header() {
  return (
    <HeaderContainer>
      <img src="https://atherenergy.com/images/common/logo-circle.png" />
      <MenusContainer>
        <Link href="/scooter">
          <a>Scooter</a>
        </Link>
        <Link href="/scooter">
          <a>Ather Grid</a>
        </Link>
        <Link href="/scooter">
          <a>Story</a>
        </Link>
      </MenusContainer>
      <h1>=</h1>
    </HeaderContainer>
  );
}

export default Header;
