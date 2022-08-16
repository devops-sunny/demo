import PropTypes from 'prop-types';
import { Container, Alert, AlertTitle } from '@mui/material';
import { useSelector } from 'react-redux';


RoleBasedRoute.propTypes = {
  accessibleRoles: PropTypes.array, // Example ['admin', 'leader']
  children: PropTypes.node
};

const useCurrentRole = () => {
  const role = useSelector((state) => state.Auth.role);
  return role;
};

export default function RoleBasedRoute({ accessibleRoles, children }) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
      </Container>
    );
  }

  return <>{children}</>;
}
