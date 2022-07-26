import React from "react";
import { FooterContainer, FooterMenus, FooterWrapper } from "./style";
import Link from "next/dist/client/link";
function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMenus>
          <h1>Ather</h1>
          <Link href="/scooter">
            <a>My Account</a>
          </Link>
          <Link href="/scooter">
            <a>Our story</a>
          </Link>
          <Link href="/scooter">
            <a>Careers</a>
          </Link>
          <Link href="/scooter">
            <a>Press</a>
          </Link>
          <Link href="/scooter">
            <a>Retail Partnership</a>
          </Link>
          <Link href="/scooter">
            <a>Help & Support</a>
          </Link>
        </FooterMenus>
        <FooterMenus>
          <h1>Products</h1>
          <Link href="/scooter">
            <a>Ather 450X</a>
          </Link>
        </FooterMenus>
        <FooterMenus>
          <h1>Community</h1>
          <Link href="/scooter">
            <a>Forum</a>
          </Link>
          <Link href="/scooter">
            <a>FAQs</a>
          </Link>
          <Link href="/scooter">
            <a>Blog</a>
          </Link>
        </FooterMenus>
        <FooterMenus>
          <h1>Legal</h1>
          <Link href="/scooter">
            <a>Terms</a>
          </Link>
          <Link href="/scooter">
            <a>Credit Usage Policy</a>
          </Link>
          <Link href="/scooter">
            <a>Privacy policy</a>
          </Link>
          <Link href="/scooter">
            <a>Refund policy</a>
          </Link>
          <Link href="/scooter">
            <a>Trandemarks</a>
          </Link>
        </FooterMenus>
      </FooterContainer>
      <p>
        All information is subject to specific conditions | Copyright © 2022
        Ather Energy. All rights reserved.
      </p>
    </FooterWrapper>
  );
}

export default Footer;
