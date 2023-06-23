import React from "react";
import KakaoButton from "./KakaoButton";

const LoginForm: React.FC = () => {
  return (
    <form className="justify-around w-[720px] mx-auto">
      <div className="flex items-center justify-around">
        <div>
          <label className="flex justify-around w-[300px] my-2" htmlFor="email">
            <span className="grow text-center">이메일</span>
            <input className="border w-[60%] border-black" id="email" />
          </label>
          <label
            className="flex justify-around w-[300px] my-2"
            htmlFor="password"
          >
            <span className="grow text-center">비밀번호</span>
            <input
              className="border w-[60%] border-black"
              id="password"
              type="password"
            />
          </label>
        </div>
        <button type="button" className="hover:cursor-pointer">
          로그인
        </button>
      </div>
      <KakaoButton />
    </form>
  );
};

export default LoginForm;
