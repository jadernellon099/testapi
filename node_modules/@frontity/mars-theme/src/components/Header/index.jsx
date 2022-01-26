import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from "../link";
import { Global, css, connect, styled, Head } from "frontity";
import {LOGO} from '../../const/Image'

function Header({ state }) {
    useEffect(() => {
        const WebFont = require('webfontloader')
        WebFont.load({
          google: {
            families: ['Oswald']
          }
        });
       }, []);

    return (
        <>
        <WrapMenu>
            <Logo>
                <WrapLogo>
                    <img src={LOGO} />
                </WrapLogo>
            </Logo>
            <div>
                <TopMenu>
                <Nav>
                    <a href="">TRANG CHỦ</a>
                    <a href="">SOI KÈO</a>
                    <a href="">BXH</a>
                    <a href="">KẾT QUẢ</a>
                    <a href="">LỊCH THI ĐẤU</a>
                    <a href="">TỶ LỆ KÈO</a>
                    <a href="">LIVESCORE</a>
                    <a href="">HIGHLIGHT</a>
                    <a href="">TIN TỨC</a>
                    <TOP href="" className='top'>TOP NHÀ CÁI</TOP>
                </Nav>
            </TopMenu>
            <BottomMenu>
                <NavBottom>
                    <a href=''>CƯỢC JBO</a>
                    <a href=''>CƯỢC TF88</a>
                    <a href=''>CƯỢC 188BET</a>
                    <a href=''>CƯỢC FUN88</a>
                    <a href=''>CƯỢC M88</a>
                    <a href=''>CƯỢC ZBET</a>
                    <a href=''>VWIN +20.TR!</a>
                    <a href=''>CƯỢC 11BET</a>
                    <a href=''>CƯỢC TF88</a>
                    <a href=''>CƯỢC 978BET</a>
                </NavBottom>
            </BottomMenu>
            </div>
        </WrapMenu>
        </>
    );
}

export default connect(Header);

const WrapLogo = styled.div`
    margin-right: 50px;
`

const WrapMenu = styled.div`
    position: relative;
`

const Logo = styled.div`
    position: absolute;
    width: 24%;
    height: 110%;
    display: flex;
    align-items: center;
    justify-content: right;
    background: white;
    border-top-right-radius: 104px;
    border-bottom-right-radius: 104px;
`

const TopMenu = styled.div`
    background: #01b243;
`

const Nav = styled.div`
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 0;
    color: #fff;
    padding: 0px;
    width: 50%;
    justify-content: space-evenly;
    display: flex;
    height: 56px;
    align-items: center;
    margin: auto;

    & > a{
        font-size: 15px;
        width: 10%;
        color: #fff;
        text-align: center;
        font-family: 'Oswald';
    }
`

const BottomMenu = styled.div`
    height: 42px;
    background: white;
`

const TOP = styled.a`
    background: #dc3444;
    padding: 12px;
`

const NavBottom = styled.div`
    height: 42px;
    width: 51%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Oswald';


    & > a{
        width: 9%;
        text-align: center;
        padding: 5px 0px;
        color: white;
        font-size: 14px;
    }

    & > a:nth-of-type(1){
        background: #28a745;
    }
    & > a:nth-of-type(2){
        background: #17a2b8;
    }
    & > a:nth-of-type(3){
        background: #fc5407;
    }
    & > a:nth-of-type(4){
        background: #dc3545;
    }
    & > a:nth-of-type(5){
        background: #ffc107;
    }
    & > a:nth-of-type(6){
        background: #0F4CD9;
    }
    & > a:nth-of-type(7){
        background: #ce171f;
    }
    & > a:nth-of-type(8){
        background: linear-gradient(to right,#e52d27 0%,#b31217 51%,#e52d27 100%);
    }
    & > a:nth-of-type(9){
        background: #febc11;
    }
    & > a:nth-of-type(10){
        background: #4c9eea;
    }
`