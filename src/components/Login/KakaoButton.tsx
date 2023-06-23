import React, { useCallback } from "react";

interface KakaoButtonProps {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const { Kakao } = window;

const KakaoButton: React.FC<KakaoButtonProps> = ({ type }) => {
  const kakaoLogin = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      Kakao.Auth.authorize({ redirectUri: "http://localhost:3000" });
    },
    []
  );

  return (
    <button
      onClick={kakaoLogin}
      className="flex mx-auto bg-[#FEE500] rounded-[12px] items-center w-[222px] h-[45px]"
      type={type}
    >
      {/* <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="login-button__item__logo"
      >
        <title>kakao 로고</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 7C10.029 7 6 10.129 6 13.989C6 16.389 7.559 18.505 9.932 19.764L8.933 23.431C8.845 23.754 9.213 24.013 9.497 23.826L13.874 20.921C14.243 20.958 14.618 20.978 15 20.978C19.971 20.978 24 17.849 24 13.989C24 10.129 19.971 7 15 7Z"
          fill="black"
        ></path>
      </svg> */}
      <img
        className="w-[30px] h-[30px] mx-[12px]"
        src="kakao.svg"
        alt="카카오 로그인"
      />
      <span className="text-black/85 grow">카카오 로그인</span>
    </button>
  );
};

export default KakaoButton;
