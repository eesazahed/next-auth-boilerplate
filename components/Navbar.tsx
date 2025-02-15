import type { NextPage } from "next";
import NavItem from "./NavItem";
import { useSession } from "next-auth/react";

const Navbar: NextPage = () => {
  const session = useSession();

  return (
    <nav className="bg-black md:px-16 md:flex md:justify-between text-center">
      <div className="flex justify-around">
        <NavItem text="Home" href="" />{" "}
        <NavItem text="Example1" href="example1" />
        <NavItem text="Example2" href="example2" />
      </div>

      {/* Hidden on mobile */}
      <div className="hidden md:flex">
        {session.status === "authenticated" && (
          <NavItem text="Profile" href="profile" />
        )}
        <NavItem auth />
      </div>
    </nav>
  );
};

export default Navbar;
