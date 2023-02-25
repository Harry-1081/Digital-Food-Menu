import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Context = createContext();
export const States = ({ children }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmpw] = useState("");
    const [pwerror, setPwerror] = useState("");
    const [mailerror, setmailerror] = useState("");
    const [pwerror2, setPwerror2] = useState("");
    const [mailerror2, setmailerror2] = useState("");
    const [cpwerror, setcpwerror] = useState("");
    const [unerror, setunerror] = useState("");
    var navigate = useNavigate();

    const passMatch = (e) => {
        setcpwerror("");
        setPwerror("");
        setmailerror("");
        setunerror("");
        if(username===""){
            setunerror("*Username required")}
        if(email===""){
            setmailerror("*Email required")}
        if(password===""){
            setPwerror("*Password required")}
        if(confirmpw===""){
            setcpwerror("*Confirm Password required")}
        else if(!(password===confirmpw)){
            setPwerror("[Your passwords do not match]")}
        else if(password===confirmpw){
            signUp()}
    };


    const logincheck = (e) => {
      setPwerror2("");
      setmailerror2("");
      if(email===""){
        setmailerror2("*Email required")}
      if(password===""){
        setPwerror2("*Password required")}
      else{
        signIn()
      }
    };


    const signIn = (e) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/home");
        })
        .catch((error) => {
          if(error.code==="auth/wrong-password")
          alert("The password is incorrect. Please enter the correct password");
          else if(error.code === "auth/user-not-found")
          {
            swal({
              title: "User Record not found",
              text: "Do you wish to create a new account ?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if(willDelete){
                setEmail("");
                setPassword("");
                navigate("/signup")
              }
            });
          }
          else if(error.code === "auth/invalid-email")
          alert("The Email is invalid ! Please enter a valid Email ID")
          console.log(error);
        });
    };


  const signUp = (e) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/home");
        })
        .catch((error) => {
          if(error.code === "auth/email-already-in-use")
          alert("The email address is already in use by another account")
          else if(error.code === "auth/invalid-email")
          alert("The Email is invalid ! Please enter a valid Email ID")
          console.log(error);
        });   
    };


    return(
        <Context.Provider value={{
            email,
            setEmail,
            password,
            setPassword,
            confirmpw,
            setConfirmpw,
            signIn,
            signUp,
            passMatch,
            pwerror,
            setPwerror,
            unerror,
            setunerror,
            mailerror,
            setmailerror,
            username,
            setUsername,
            cpwerror,
            setcpwerror,
            logincheck,
            pwerror2,
            setPwerror2,
            mailerror2,
            setmailerror2
        }}
        >{children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);