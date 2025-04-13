import { HTTP_STATUS } from '../../shared/constants/http/http-status.js';

const permissionHandler = (allowedRoles = []) => {
  console.log('00000000001');
  return (req, res, next) => {
    const userRole = req.user?.role;

    console.log('00000000001:' + userRole);
    console.log('00000000001:' + JSON.stringify(allowedRoles));

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: 'Access denied',
      });
    }

    next();
  };
};

export default permissionHandler;
