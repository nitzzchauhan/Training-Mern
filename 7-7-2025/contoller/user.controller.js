

export const register = async(req,res)=>{
    return res.send("user has been registerd")
}
export const login = async(req,res)=>{
    return res.send("hello from login")
}
export const logout = async(req,res)=>{
    console.log(res)
    return res.send("hello from the log")
    
    
}
export const updateProfile = async(req,res)=>{
    return res.send("hello from update profile")
}