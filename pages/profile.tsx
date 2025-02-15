import type { NextPage } from "next";
import PageHead from "../components/PageHead";
import Title from "../components/Title";
import getUserFromSession from "../utils/getUserFromSession";
import FormattedTime from "../components/FormattedTime";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  user: UserType;
}

const Profile: NextPage<Props> = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/api/auth/signin");
    }
  }, []);

  return (
    <div>
      <PageHead title="Profile" />

      <main>
        <Title text="Profile" emoji="&#128221;" />

        {user && (
          <div>
            <p>Logged in as {user.name}</p>
            <p>
              Joined <FormattedTime timestamp={user.createdAt} />
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (context: any) => {
  const user = await getUserFromSession(context.req);

  return {
    props: {
      user,
    },
  };
};
