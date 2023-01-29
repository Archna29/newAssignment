import {React,useState} from 'react'
import './Navbar.css'
import UserCard from './UserCard';

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false); //for toggle bar
    const [user,setUser]=useState({data: []}); //state to store user data from api
    const [isLoading, setIsLoading] = useState(false); // state for storing loading

    const delay = (duration) =>
    new Promise(resolve => setTimeout(resolve, duration));// function to delay the fetch request for 1sec
  
        const apiGet=async()=>{          
            try{
              setIsOpen(false);
              setIsLoading(true);
              await delay(1000);
 
                    const res= await fetch('https://reqres.in/api/users?page=1', {
                    method: 'GET',
                    headers: {
                      Accept: 'application/json',
                    },
                  });
                 
                const d= await res.json();   
                  setUser(d); // setuser will store the json data in user array.
           
          }
        catch(err){
            console.log(err);
        }
        finally {
          setIsLoading(false); // after fetching of data from try block loading will be false.
        }
        }
     
console.log(user);
  return (
    <>
    <div className='Navbar'>
        <span className='logo'>MT</span>
      <div className={`navitems ${isOpen && "open"}`}>
            <a href='/'>Home</a>
            <a href='/work' >Work</a>
            <a href='/services'>Services</a>
          <button className='button' 
          onClick= {apiGet}>
          Get users</button>
        </div>
          <div className="nav-toggle" 
          onClick={()=>setIsOpen(!isOpen)}>
            <div className='bar'></div>   
        </div>
    </div>

    {isLoading && <h2>Loading...</h2>}
    <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
      {user.data.map(item=>{
        return(
          <>
          <UserCard key={item.id}
          email={item.email}
          first_name={item.first_name}
        last_name={item.last_name}
         img={item.avatar}
          />
        </>
        )
     

      })}   
</div>


    </>
  )
}

export default Navbar;