import { memo } from "react";
import ButtonPost from "./ButtonPost";

const Post = () => {
  return (
    <section className="hidden lg:mt-4 lg:mr-[110px] lg:mb-4 lg:ml-[110px] lg:flex lg:h-[75px] lg:w-[1020px] lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:rounded-xl lg:bg-[#FFE9DF] lg:p-4 xl:mr-[212px] xl:ml-[212px]">
      <h2 className="font-bold">C'est le moment de vendre</h2>
      <ButtonPost />
    </section>
  );
};

export default memo(Post);
