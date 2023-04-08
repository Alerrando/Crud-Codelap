import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { addUsername } from "../../redux/crudSlice";
import { RootState } from "../../redux/store";

type LoginForm = {
  username: string;
};

export function Login() {
  const { username } = useSelector((state: RootState) => state.crud);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>();

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

              <ErrorMessage errors={errors} name="username" />

              <ErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => <p>{message}</p>}
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
    dispatch(addUsername(event.username));
  }
}
