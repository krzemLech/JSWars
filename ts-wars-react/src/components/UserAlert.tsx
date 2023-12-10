import { FC } from "react";
import { UserRole } from "../utils/enums";

type PropTypes = {
    role?: UserRole
}

const UserAlert: FC<PropTypes> = ({ role }) => (
    <div className="user-alerts">
    {role && role === UserRole.User && <div className='bg-blue-500 text-white p-4 rounded-xl mb-8'>You are a User</div>}
    {role && role === UserRole.Admin && <div className='bg-green-500 text-white p-4 rounded-xl mb-8'>You are an Admin</div>}
    {role && role === UserRole.Staff && <div className='bg-yellow-500 text-white p-4 rounded-xl mb-8'>You are a Staff</div>}
    </div>
)

export default UserAlert;