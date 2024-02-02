interface GoogleMapProps {
  link: string;
}

const GoogleMap = ({ link }: GoogleMapProps) => {
  return (
    <>
      <article className="flex flex-col text-dark mb-52">
        <div className="relative w-full h-[70vh] bg-dark">
          <iframe
            src={link}
            width={718}
            height={404}
            className="aspect-square w-full h-full object-cover object-center"
            loading="lazy"
          ></iframe>
        </div>
      </article>
    </>
  );
};

export default GoogleMap;
