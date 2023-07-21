import { NavBar } from "../nav/NavBar";
import { AdminViews } from "./AdminViews";
import { DefaultView } from "./DefaultView";
import { UserViews } from "./UserViews";
import { useEffect } from "react";

export const ApplicationViews = ({ isLoggedIn, userProfile }) => {
  if (userProfile === null) {
    return (
      <>
        <NavBar userProfile={userProfile} />
        <DefaultView userProfile={userProfile} />;
      </>
    );
  } else if (userProfile.userTypeId === 1) {
    return (
      <>
        <NavBar userProfile={userProfile} />
        <UserViews userProfile={userProfile} />;
      </>
    );
  } else if (userProfile.userTypeId === 2) {
    return (
      <>
        <NavBar userProfile={userProfile} />
        <AdminViews userProfile={userProfile} />;
      </>
    );
  } else {
    return;
  }
};
