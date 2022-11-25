
const roleRequest = (roles: string[] | null, permittedRole: string | null) => {
    // we assume that some pages are shared for more than one user so it could be array of roles
    if(roles?.includes('all') || permittedRole === null) {
        return true
    }
    return roles?.includes(permittedRole)
}

export default roleRequest;