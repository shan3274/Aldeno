import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
// import { getDatabase ,set,ref} from 'firebase/database';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { getStorage ,ref ,uploadBytes,getDownloadURL} from 'firebase/storage'



const firebaseConfig= {
  apiKey: "AIzaSyAamVJuw-XpLQ9JnpkFVKSDv3bIQhJgsVI",
  authDomain: "aldeo-pro.firebaseapp.com",
  projectId: "aldeo-pro",
  storageBucket: "aldeo-pro.appspot.com",
  messagingSenderId: "671334549314",
  appId: "1:671334549314:web:9a192ebc9c14f96116eadb",
  measurementId: "G-9FHS4ESX4H",
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

    const resellData = async(productid,productType,email,images,types)=>{
      const imageURLs = [];
      let ins = 0;
      for(const image of images){
      const imagRef = ref(storage, `Resell/${productid}Image/'${Date.now()}-${image.name}`);
        imageURLs[ins] = await uploadBytes(imagRef,image);
        ins++;
      }
        return await addDoc(collection(firestore,'Resell/2UHVmRt1JSAGgM0oUeil/products'),{
            productid,
            productType,
            email,
            types,
            imageURl1:imageURLs[0].ref.fullPath,
            imageURl2:imageURLs[1].ref.fullPath,
            imageURl3:imageURLs[2].ref.fullPath,
            imageURl4:imageURLs[3].ref.fullPath,
        })
    }

    const addProduct = async(productid,productName,size,type,color,details,footprint,eimmision,water,waste,fibric,manufacturere,city,images
      ,parentOrg,gender,percentage,trim,swing,bodyFebric,febricSupplier,interlining,sewingThread,embroidery,lable,button,
      washcare,certifications,manufacility,country,origin,price,sizeSystem,releaseDate,footprintoverall,Basicdetails,cultivation,garment,transport,pcf)=>{
      const imageURLs = [];
      let ins = 0;
      for(const image of images){
      const imagRef = ref(storage, `Product/${productid}Image/'${Date.now()}-${image.name}`);
        imageURLs[ins] = await uploadBytes(imagRef,image);
        ins++
      }
        return await addDoc(collection(firestore,`products/bo87k2u9CqCxjHcV9RgS/${productid}`),{
            productid,
            productName,
            size,
            type,
            color,
            details,
            footprint,
            eimmision,
            water,
            waste,
            fibric,
            manufacturere,
            city,parentOrg,gender,percentage,trim,swing,bodyFebric,febricSupplier,interlining,sewingThread,embroidery,lable,button,
            washcare,certifications,manufacility,country,origin,price,sizeSystem,releaseDate,footprintoverall,Basicdetails,cultivation,garment,transport,pcf,
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
    return getDocs(collection(firestore,`products/bo87k2u9CqCxjHcV9RgS/${id}`));
  };

  const getRequest = (id)=>{
    return getDocs(collection(firestore,id));
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
        getRequest,
      }
    }>{props.children}</FirebaseContext.Provider>
  )
}