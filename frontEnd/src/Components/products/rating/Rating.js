
import { useState } from "react";
import {FaStar} from "react-icons/fa";
import "./rating.css"
export default function Rating(){
 const[rating,setRating]=useState(null)
 const [hover,setHover] = useState(null)
    return(
        <>
      {
        [...Array(5)].map((Stars,index)=>{
          const currentRating = index+1
         return  ( <>
         <label>
            <input type="radio" name="rating"
             value={currentRating } 
             onClick={()=>setRating(currentRating)}/>
          <FaStar className="star" size={15}
          color={currentRating<=(hover||rating)? "#ffc107":"#e4e5e9"}
          onMouseEnter={()=>setHover(currentRating)}
          onMouseLeave={()=>setHover(null)}
          />
         </label>
         </>
         )
        })
      }
           

        
      
        </>
    )
    }