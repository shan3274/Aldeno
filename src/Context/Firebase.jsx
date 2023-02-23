import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
// import { getDatabase ,set,ref} from 'firebase/database';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { getStorage ,ref ,uploadBytes,getDownloadURL} from 'firebase/storage'



const firebaseConfig= {
  apiKey: "AIzaSyDj0MOZLzaxsc2UCsJb-cfyRld5xgUJVO4",
  authDomain: "aldeno-87873.firebaseapp.com",
  projectId: "aldeno-87873",
  storageBucket: "aldeno-87873.appspot.com",
  messagingSenderId: "398171091393",
  appId: "1:398171091393:web:5f3010fa476c67634eff40",
  measurementId: "G-96H3E7N5QZ",
  databaseURL: "https://aldeno-87873-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);
const FirebaseContext = createContext(null);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

  const signupUserWithEmailAndPassword = (email ,password)=>{
    return createUserWithEmailAndPassword(firebaseAuth,email,password);
  };
  const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(firebaseAuth,email,password);
  }
  // const putData = (key ,data)=> set(ref(database,key),data);
  
    const handleCreateNewListing = async (productid,productType,email,coverPic)=>{
    
        const imagRef = ref(storage, `uploads/${productid}Image/'${Date.now()}-${coverPic.name}`);
        const uploadResult = await uploadBytes(imagRef,coverPic);
        
        return await addDoc(collection(firestore,productid),{
            productid,
            productType,
            email,
            imageURl:uploadResult.ref.fullPath,
        })
    };

    const resellData = async(productid,productType,email,images)=>{
      const imageURLs = [];
      let ins = 0;
      for(const image of images){
      const imagRef = ref(storage, `Resell/${productid}Image/'${Date.now()}-${image.name}`);
        imageURLs[ins] = await uploadBytes(imagRef,image);
        ins++
      }
        return await addDoc(collection(firestore,productid),{
            productid,
            productType,
            email,
            imageURl1:imageURLs[0].ref.fullPath,
            imageURl2:imageURLs[1].ref.fullPath,
            imageURl3:imageURLs[2].ref.fullPath,
            imageURl4:imageURLs[3].ref.fullPath,
        })
    }

    const addProduct = async(productid,size,type,color,details,images)=>{
      const imageURLs = [];
      let ins = 0;
      for(const image of images){
      const imagRef = ref(storage, `Product/${productid}Image/'${Date.now()}-${image.name}`);
        imageURLs[ins] = await uploadBytes(imagRef,image);
        ins++
      }
        return await addDoc(collection(firestore,productid),{
            productid,
            size,
            type,
            color,
            details,
            imageUrl1:imageURLs[0].ref.fullPath,
            imageUrl2:imageURLs[1].ref.fullPath,
            imageUrl3:imageURLs[2].ref.fullPath,
            imageUrl4:imageURLs[3].ref.fullPath,
        })
    }

    const Billing = async(productid,storeName,location,amount,date)=>{
        return await addDoc(collection(firestore,'Billing'),{
          productid,
          storeName,
          location,
          amount,
          date
        })
    }
    const Billing2 = async(productid,storeName,location,amount,date)=>{
      return await addDoc(collection(firestore,'Traceability/2y37xdYTaS5EQdydxtAe/'+productid),{
        productid,
        storeName,
        location,
        amount,
        date
      })
  }

    
  
  const getList = (id)=>{
    return getDocs(collection(firestore,id))
  };


  const getTrace = (id)=>{
    return getDocs(collection(firestore,'Traceability/2y37xdYTaS5EQdydxtAe/'+id));
  };
  const getImageURL = (path) => {
    return getDownloadURL(ref(storage,path));
  }



  return(
    <FirebaseContext.Provider value={
      {
        signupUserWithEmailAndPassword,
        handleCreateNewListing,
        getList,
        getImageURL,
        resellData,
        addProduct,
        loginUser,
        Billing,
        Billing2,
        getTrace,
      }
    }>{props.children}</FirebaseContext.Provider>
  )
}