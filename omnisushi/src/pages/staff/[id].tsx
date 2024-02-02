import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import HashtagHeader from "@/components/hashtagHeader";
import { Staff, StaffApiAllMember, StaffApiSingleMember } from "@/types";
import StaffMemberDetailsLayout from "@/components/staff/staffMemeberDetailsLayout";

interface Paths extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const token = process.env.TOKEN;

  const response = await fetch("http://localhost:1337/api/staffs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData: StaffApiAllMember = await response.json();

  let paths = responseData.data.map((staff) => ({
    params: {
      id: staff.id.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StaffDetailsProps, Paths> = async (
  context
) => {
  let id = parseInt(context.params?.id as string);

  const token = process.env.TOKEN;

  const response = await fetch(`http://localhost:1337/api/staffs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const staff: StaffApiSingleMember = await response.json();

  return {
    props: {
      staff: staff.data.attributes,
    },
  };
};

interface StaffDetailsProps {
  staff: Staff;
}

const StaffDetails = ({ staff }: StaffDetailsProps) => {
  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        <HashtagHeader
          title="Staff member"
          description="Feel free to discover our staff members"
        />

        <StaffMemberDetailsLayout staff={staff} />
      </article>
    </>
  );
};

export default StaffDetails;
