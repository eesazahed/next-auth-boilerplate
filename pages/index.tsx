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
        <Title text="next-auth-boilerplate" emoji="&#128075;" gradient />

        <p>Welcome</p>

        {user && <p>Logged in as {user.name}</p>}
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
