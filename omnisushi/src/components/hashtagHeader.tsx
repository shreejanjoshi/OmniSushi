interface HashtagHeaderProps {
  title: string;
  description: string;
}

const HashtagHeader = ({ title, description }: HashtagHeaderProps) => {
  return (
    <>
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{title}
        </h1>
        <span className="mt-2 inline-block">{description}</span>
      </div>
    </>
  );
};

export default HashtagHeader;
