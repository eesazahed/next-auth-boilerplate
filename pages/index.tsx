import type { NextPage } from "next";
import PageHead from "../components/PageHead";
import Title from "../components/Title";
import getUserFromSession from "../utils/getUserFromSession";

interface Props {
  user: UserType;
}

const Home: NextPage<Props> = ({ user }) => {
  return (
    <div>
      <PageHead title="Home" />

      <main>
        <Title text="example" gradient />

        {user ? (
          <div>
            <p>Logged in as {user.name}</p>
          </div>
        ) : (
          <div>
            <p>You must log in</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: any) => {
  const user = await getUserFromSession(context.req);

  return {
    props: {
      user,
    },
  };
};
