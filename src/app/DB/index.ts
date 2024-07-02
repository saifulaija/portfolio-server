import config from "../config/config";
import { USER_ROLE } from "../modules/user/user.constant";
import { User } from "../modules/user/user.model";

const superUser = {
  name:config.super_admin_name,
  email: config.super_admin_email,
  password: config.super_admin_password,
  profilePhoto:config.super_admin_image,

  role: USER_ROLE.superAdmin,

  isDeleted: false,
};

const seedSuperAdmin = async () => {
  //when database is connected, we will check is there any user who is super admin
  const isSuperAdminExits = await User.findOne({ role: USER_ROLE.superAdmin });

  if (!isSuperAdminExits) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
