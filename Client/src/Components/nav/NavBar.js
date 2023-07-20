import { AdminNav } from "./AdminNav";
import { DefaultNav } from "./DefaultNav";
import { UserNav } from "./UserNav";

export const NavBar = ({ userProfile }) => {
  if (userProfile === null) {
    return (
      <>
        <DefaultNav userProfile={userProfile} />
      </>
    );
  } else if (userProfile.userTypeId === 1) {
    return (
      <>
        <UserNav userProfile={userProfile} />
      </>
    );
  } else if (userProfile.userTypeId === 2) {
    return (
      <>
        <AdminNav userProfile={userProfile} />
      </>
    );
  } else {
    return;
  }
};
