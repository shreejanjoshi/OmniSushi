import { GetStaticProps } from "next";
import HashtagHeader from "@/components/hashtagHeader";
import Card from "@/components/Card";
import { Staff, StaffApiAllMember } from "@/types";

const loadStaff = async () => {
  const token = process.env.TOKEN;

  const response = await fetch("http://localhost:1337/api/staffs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData: StaffApiAllMember = await response.json();

  const staffs = responseData.data.map((staff) => {
    return {
      id: staff.id,
      name: staff.attributes.name,
      role: staff.attributes.role,
      image: staff.attributes.image,
    };
  });

  return staffs;
};

export const getStaticProps: GetStaticProps<StaffProps> = async () => {
  let staffs = await loadStaff();

  return {
    props: {
      staffs: staffs,
    },
  };
};

interface StaffProps {
  staffs: Staff[];
}

const Staff = ({ staffs }: StaffProps) => {
  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        {/* title */}
        <HashtagHeader
          title="Our staff members"
          description="Meet Our Exceptional Team – The Heart and Soul Behind Omni Sushi"
        />

        {/* card */}
        <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
          {staffs.map((staff) => (
            <Card
              key={staff.id}
              id={staff.id!}
              image={staff.image}
              link="/staff/"
              title={staff.name}
              subTitle={staff.role}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default Staff;
