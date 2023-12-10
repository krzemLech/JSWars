export enum UserRole {
    User,
    Admin,
    Staff
}

export type UserRoles = "User" | "Admin" | "Staff"; // no mapping, static comparisons required
export type UserRoleList = ["User", "Admin", "Staff"]; // static comparisons required


export const checkUserRole = (role: UserRole) => {
    switch (role) {
        case UserRole.User:
            return 'User';
        case UserRole.Admin:
            return 'Admin';
        case UserRole.Staff:
            return 'Staff';
        default:
            return 'Unknown';
    }
}

const currentRole = UserRole.Admin;
console.log(checkUserRole(currentRole), currentRole);