import { NavBar } from "../nav/NavBar";
import { AdminViews } from "./AdminViews";
import { DefaultView } from "./DefaultView";
import { UserViews } from "./UserViews";
import { useEffect } from "react";

export const ApplicationViews = ({ userProfile, userToDos, setUserToDos }) => {
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
        <NavBar userProfile={userProfile} userToDos={userToDos} />
        <UserViews
          userProfile={userProfile}
          userToDos={userToDos}
          setUserToDos={setUserToDos}
        />
        ;
      </>
    );
  } else if (userProfile.userTypeId === 2) {
    return (
      <>
        <NavBar userProfile={userProfile} userToDos={userToDos} />
        <AdminViews
          userProfile={userProfile}
          userToDos={userToDos}
          setUserToDos={setUserToDos}
        />
        ;
      </>
    );
  } else {
    return;
  }
};
