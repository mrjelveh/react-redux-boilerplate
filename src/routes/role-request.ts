
const roleRequest = (role: string | undefined) => {
    const permittedRole = JSON.parse(localStorage.getItem('userRole')!)
    if(role === 'all') {
        return true
    }
    return permittedRole === role
}

export default roleRequest;