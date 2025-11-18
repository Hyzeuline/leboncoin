import { ButtonPost } from "./ButtonPost";

export const Post = () => {
  return (
    <section className="mt-4 mb-4 flex flex-col items-center justify-center gap-4 rounded-xl bg-[#FFE9DF] p-4 md:flex-row">
      <h2 className="font-bold">C'est le moment de vendre</h2>
      <ButtonPost />
    </section>
  );
};
