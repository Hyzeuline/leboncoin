import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { memo } from "react";

const ButtonPost = () => {
  return (
    <button className="lg:flex-center hidden lg:flex lg:gap-2 lg:rounded-xl lg:bg-[#EC5A15] lg:p-2 lg:text-white">
      <LocalHospitalOutlinedIcon />
      <p className="font-bold">Déposer une annonce</p>
    </button>
  );
};

export default memo(ButtonPost);
