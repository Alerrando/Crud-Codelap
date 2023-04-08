import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUsername } from "../../redux/crudSlice";
import { Navigate } from 'react-router-dom'
import { RootState } from "../../redux/store";
import React, { useEffect } from 'react'

type LoginForm = {
  username: string;
};

export function Login() {
  const { username } = useSelector((aciton: RootState) => aciton.crud)
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginForm>();

  useEffect(() => {
    try {
      const savedInfos = JSON.parse(localStorage.getItem('username') || "");
      if(savedInfos.length > 0){
        dispatch(addUsername(savedInfos));
      }
    } catch (error) {
      console.log(error)
    }
  }, [])


  if(username.length > 0){
    return <Navigate replace to="/network" />
  }


  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-[#DDDDDD]">
        <div className="w-[31.25rem] h-[12.8125rem] bg-[#FFF] border border-[#CCC] rounded-lg">
          <div className="p-6 flex flex-col gap-8">
            <h1 className="font-roboto font-bold text-[22px] leading-[22.78px]">
              Welcome to CodeLeap network!
            </h1>

            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(submit)}
            >
              <label htmlFor="username">Please enter your username</label>
              <input
                type="text"
                id="username"
                className="h-8 border border-[#777777] rounded-lg outline-none p-2"
                {...register("username", {
                  required: true,
                })}
                placeholder="Username"
              />

              <div className="w-full h-auto mt-2 flex items-center justify-end">
                <button
                  className={`w-[6.9375rem] h-8 text-white bg-[#7695EC] rounded-lg ${
                    isValid ? "opacity-100 btn" : "opacity-80"
                  }`}
                  type="submit"
                  disabled={!isValid}
                >
                  ENTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  function submit(event: any) {
    localStorage.setItem(
      'username',
      JSON.stringify(event.username)
    );
    
    dispatch(addUsername(event.username));
  }

}
