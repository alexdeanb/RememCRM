import { AdminNav } from "./AdminNav";
import { DefaultNav } from "./DefaultNav";
import { UserNav } from "./UserNav";

export const NavBar = ({ userProfile, userToDos }) => {
  if (userProfile === null) {
    return (
      <>
        <DefaultNav userProfile={userProfile} />
      </>
    );
  } else if (userProfile.userTypeId === 1) {
    return (
      <>
        <UserNav userProfile={userProfile} userToDos={userToDos} />
      </>
    );
  } else if (userProfile.userTypeId === 2) {
    return (
      <>
        <AdminNav userProfile={userProfile} userToDos={userToDos} />
      </>
    );
  } else {
    return;
  }
};
