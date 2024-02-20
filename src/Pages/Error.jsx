import { useNavigate } from "react-router-dom";
import IconBtn from "../components/common/IconBtn";
function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-14  text-white text-3xl">
      Error 404 - Page Not Found
      <IconBtn
            active={false}
            text="Go Back"
            onclick={() => {
              navigate(-1);
            }}
          ></IconBtn>
    </div>
  );
}

export default Error;