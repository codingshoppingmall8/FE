import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <StHeader>
        <StHdCategory>
            <StLogo onClick={()=>{navigate('/')}}>onemorebag</StLogo>
            <StHdBtn>SHOP</StHdBtn>
            <StHdBtn>PLOT</StHdBtn>
            <StHdBtn>ABOUT</StHdBtn>
            <StSearch>
              <label>
                <input type="text" placeholder="Search" style={{border: "none"}} />
                <button style={{border: "none", background: "none", cursor: "pointer"}}><Search /></button>
              </label>
            </StSearch>
            <StUserBtn>
              {/* 로그인 하면 마이페이지 보여주고 로그아웃 상태면 로그인 보여주기 */}
              <p onClick={()=>navigate('/login')}>LOGIN</p>
              {/* <p onClick={()=>navigate('/mypage')}>MYPAGE</p> */}
              <p onClick={()=>navigate('/signup')}>JOIN</p>
              <p>BAG/0</p>
            </StUserBtn>
            <EngBtn>EN</EngBtn>
        </StHdCategory>        
      </StHeader>
    </>
  );
};

export default Header;

const StHeader = styled.div`
  /* background-color: green; */
  text-align: center;
  position: sticky;
  max-width: 1480px;
  min-width: 1140px;
  padding: 0 2%;
  margin: 0 auto;
  width: 100%;
  top: 18px;
`
const StHdCategory = styled.div`
  /* position: absolute; */
  display: flex;
  /* align-items: center; */
  width: 100%;
  justify-content: space-between;
  font-family: "GillSansMTPro-Book";
  a, button {
      text-decoration: none;
      color: black;
      margin: 0px;
      font-size: 20px;
    }
`

const StLogo = styled.p`
  background-color: white;
  border-radius: 50px;
  padding: 5px 0 5px 15px;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2.5px;
  text-align: center;  
  cursor: pointer;
`
const StHdBtn = styled.p`
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2.5px;
  cursor: pointer;
`
const StSearch = styled.div`
  height: 32px;
  border-bottom: 1.5px solid black;
  margin-top: 20px;
`

const StUserBtn = styled.div`
  display: flex;
  font-size: 15px;
  margin-top: 16px;
  margin-right: 1%;
  cursor: pointer;
  p {
    height: 30px;
    /* background-color: red; */
    padding: 0 10%;
    letter-spacing: 1px;
  }
`
const EngBtn = styled.p`
  background-color: white;
  border: 1.5px solid black;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`