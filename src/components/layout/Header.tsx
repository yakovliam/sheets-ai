import { CubeIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-2">
      <div className="flex flex-row items-center gap-2">
        <Button
          variant="link"
          size="sm"
          onClick={() => {
            navigate("/");
          }}
        >
          <CubeIcon />
          <div className="p-4 text-sm font-bold">Your Company</div>
        </Button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            navigate("/account");
          }}
        >
          <PersonIcon />
          <span>Account</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            navigate("/company");
          }}
        >
          <CubeIcon />
          <span>Company</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
