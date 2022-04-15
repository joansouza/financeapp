import styled from 'styled-components';

export const Conteiner = styled.div``;
export const Nav = styled.div`
 display: flex;
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
  justify-content: center
  text-align: center;
  gap: 80px;
  background: #672beb;
  padding: 5px;
  color: #fff;
  height: 60px;
  a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    font-size: 20px;
    padding-left:10px ;
  }
  button{
    width:100px ;

  }
  button:hover{
  filter:none;
}
`;

export const HeaderLogoImg = styled.div`
  img {
    height: 100px;
    width: 140px;
    padding-left: 30px;
    padding-right: 10px;
  }
`;
