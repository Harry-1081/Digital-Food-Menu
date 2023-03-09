import { createContext, useContext, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "./axios";


const Context = createContext();
export const States = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmpw] = useState("");
    const [pwerror, setPwerror] = useState("");

    const [product,setProduct] = useState([]);
    const [editproduct,seteditProduct] = useState();
    const [ addprod,setaddprod ] = useState(false);
    const [ editprod,seteditprod ] = useState(false);
    
    const [ searchvalue,setSearchvalue ] = useState("");

    const [prodname,setProdname] = useState("");
    const [prodrate,setProdrate] = useState("");
    const [produrl,setProdurl] = useState("");
    const [prodshop,setProdshop] = useState("default");

    var navigate = useNavigate();


    const passMatch = (e) => {
        e.preventDefault()
        setPwerror("");
        if(!(password===confirmpw)){
            setPwerror("[Your passwords do not match]")}
        else if(password===confirmpw)
        {
          signUp();
        }
    };


     const getAllProducts = () => {
      if(searchvalue==="")
      {
      fetch('http://localhost:1403/product/getall')
        .then((res) => res.json())
        .then((result) => {
        setProduct(result);
          console.log(result);
        });
      }
      else
      {
        fetch(`http://localhost:1403/product/getbyname/${searchvalue}`)
        .then((res) => res.json())
        .then((result) => {
        setProduct(result);
          console.log(result);
          if(result.length==='0')
          {
            
          }
        });
      }
       };


    const logincheck = (e) => {
      e.preventDefault()
        signIn()
    };


    const deletefromDB = (id) => {
      swal({
        title: "Conformation",
        text: "Are you sure you want to delete this product ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => 
      {
        if(willDelete){
          axios.delete('/product/delete',  { params: { productId:id } }).then((response)=>{
            console.log(response);
            getAllProducts()
          });
        }
      });
    };


    const SendtoDB = (uid,type) => {
    const userDetails = {
      uid : uid,
      signupUsername: username,
      signupMail: email,
      signupPassword: password,
    };
    axios.post('/signup/create', userDetails).then((response)=>{
      console.log(response);
    });
  };



    const SendtoprodDB = (e) => { 
    const prodDetails = {
      productName:prodname,
      productRate:prodrate,
      productUrl:produrl,
      productShop:prodshop
    };
    axios.post('/product/add', prodDetails).then((response)=>{
      console.log(response);
      if(response.data==="Product exists already")
      {
        e.preventDefault();
        swal("This Products exists already")
      }
      else
      {
      getAllProducts();
      }
    });
  };

    const SendtoDB2 = (username,email,uid,type) => {
    const userDetails = {
      uid : uid,
      signupUsername: username,
      signupMail: email,
      signupPassword: password,
      signupType: type,
    };
    axios.post('/signup/create', userDetails).then((response)=>{
      console.log(response);
    });
  };




  const googleLogin = async () => 
  {
    setPassword("")
    try {
      await auth.signInWithPopup(provider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
    console.log(user);
    SendtoDB2(user.displayName,user.email,user.uid,"google");
    navigate("/home")
  };



    const signIn = (e) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => 
        {
          console.log(userCredential.user);
          if(email==="theharryverse@gmail.com")
          navigate("/admin/home")
          else
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
          console.log(error);
        });
    };


  const signUp = (e) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => 
        {
          console.log(userCredential.user.uid);
          SendtoDB(userCredential.user.uid,"mail");
          navigate("/home");
        })
        .catch((error) => {
          if(error.code === "auth/email-already-in-use")
          alert("The email address is already in use by another account")
          else if(error.code==="auth/weak-password")
          swal("Weak Password Detected","Password must be atleast 6 characters")
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
            username,
            setUsername,
            logincheck,
            SendtoDB,
            googleLogin,
            product,
            setProduct,
            getAllProducts,
            deletefromDB,
            setProdname,
            setProdrate,
            setProdurl,
            SendtoprodDB,
            setProdshop,
            addprod,
            setaddprod,
            seteditprod,
            editprod,
            editproduct,
            seteditProduct,
            setSearchvalue,
            searchvalue
        }}
        >{children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);