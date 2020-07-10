import React, { FunctionComponent } from "react";
import { AdminViewProps } from "./AdminView.types";
import useFocusOnMount from "../../hooks/useFocusOnMount";

const AdminView: FunctionComponent<AdminViewProps> = ({ insufficientPermissions, insufficientRoles }) => {

  const h1Ref = useFocusOnMount<HTMLHeadingElement>();
  
  if (insufficientRoles) {
    return <div>Insufficient Roles</div>;
  }

  if (insufficientPermissions) {
    return <div>Insufficient Permissions</div>;
  }

  return (
    <React.Fragment>
      <div>
        <h1 tabIndex={-1} ref={h1Ref}>
          Welcome to the admin screen!
        </h1>
      </div>
    </React.Fragment>
  );
};

export default AdminView;
