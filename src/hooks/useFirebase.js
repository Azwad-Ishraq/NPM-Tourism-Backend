import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



const useFirebase = () => {
    const [user,setUser] = useState({})
    const [isLoading,setIsloading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const signInUsingGoogle = () => {
        setIsloading(true)
    
        return signInWithPopup(auth,googleProvider)
        .finally(()=> setIsloading(false))
    }


    const logout =  () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=> setIsloading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsloading(false)
        })
    },[])

    return {
        user,
        signInUsingGoogle,
        logout,
        setUser,
        isLoading
    }



}

export default useFirebase



