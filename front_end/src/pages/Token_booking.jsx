import React, { useEffect, useState } from 'react'
import "./Token_booking.css"
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function Token_booking({ nav }) {
   const [excounts, setexcounts] = useState()
   const [dismonth, setMonths] = useState("");
   const [distime, setTimes] = useState("");
   const [database_token, setdatabase_token] = useState(['1', '2', '3', '4','9'])
   const [checksecond, setchecksecond] = useState();
   const [token_datas, settoken_datas] = useState({
      token_number: "",
      dr_id: "",
      date_and_time: ""

   });
   const date = new Date();
   const [token_count, settoken_count] = useState([, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'])
   const [year, setYear] = useState(date.getFullYear());
   const [month, setMonth] = useState(date.getMonth() + 1);
   const [day, setDay] = useState(date.getDate());
   const [hours, setHours] = useState(date.getHours());
   const [minutes, setMinutes] = useState(date.getMinutes());
   const [amPm, setAmPm] = useState(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(' ')[1]);
   const [doctor, setdoctor] = useState({})
   const [checking_time, setchecking_time] = useState(20)
   const { id } = useParams()
   const senting_id = {
      _id: id
   }

   var excount = ""
   useEffect(() => {
      axios.post("http://localhost:5000/token_booking", senting_id).then((response) => {
         console.log("response====>", response);
         setdoctor(response.data.Doctor)
         const intervalId = setInterval(() => {
            const date = new Date().toLocaleString("en-US", {
               timeZone: "Asia/Kolkata",
               hour24: true,
               hour: "numeric",
               minute: "numeric",
               second: "numeric",
               month: "long",
            });
            const second = new Date().toLocaleString("en-US", {
               timeZone: "Asia/Kolkata",
               second: "numeric",
            });
            const [monthName, timeString] = date.split(", ");
            setMonths(monthName);
            setTimes(timeString);
            // setchecking_time(hours)
            setchecksecond(second)
         }, 1000);
         return () => clearInterval(intervalId);
      })
      async function gg() {
         for (let i = 0; i < token_count.length; i++) {
            for (let j = 0; j < i; j++) {
               if (token_count[i] === database_token[j]) {
                  excount = token_count[i]
                   setexcounts(excount)
               }

            }

         }
      }
      console.log("exx", excount);

      return gg

   }, []);




   if (checking_time == 20 && checksecond == 10) {
      window.location.reload()
   }
   if (checking_time == 21 && checksecond == 10) {
      window.location.reload()
   }
   const token_data = (token) => {
      settoken_datas({ ...token_datas, token_number: token, dr_id: id, date_and_time: dismonth })
      const login_Token = localStorage.getItem("Loginupdate")

      console.log("token===>", token_datas);
      axios.post("http://localhost:5000/token_booking/getting_datas", token_datas, {
         headers: {
            "Authorization": `Bearer ${login_Token}`
         }
      }).then((responce) => {
         console.log("responceeeeeeeeeeeeeeee==>", responce.data.Token);
         // setdatabase_token(responce.data.Token)

      })
      console.log("responceeeeeeeeeeeeeeeekkkk==>", database_token[0].token_number);

   }

   return (
      <>
         {checking_time >= 20 && checking_time < 21 ?
            amPm == "AM" ?
               <>
                  <div id='spcr1'></div>
                  <div id='Token_book_img_alighn1'>
                     <img id='Token_book_img' src="../Images/1(2).jpg" alt="" />
                     <br />
                  </div>
                  <div style={{ textAlign: "center" }}>
                     <br />
                     <p id='name_text' style={{ color: "black" }}>{doctor.name}</p>
                     <p id='names_text' style={{ color: "black" }}>categorie:{doctor.categorie}</p>
                     <p id='names_text' style={{ color: "black" }}>Qualified:{doctor.qualification}</p>
                     <p id='time_text'>{distime}  &nbsp; {dismonth}</p>
                  </div>
                  <div id='spcr1'></div>
                  <div id='Token_book_img_alighn1'>
                     <div className='col-sm-12' id='Token_book_Token_part' >
                        &nbsp;
                        <br />
                        <br />
                        <div >
                           <div className='row container-fluid' >

                              {token_count.map((count, cc) =>
                                 <>
                                    <button className='col-sm-2' key={count} style={{ backgroundColor: database_token[cc-1+excount]=== count ? "rgb(168, 25, 25)" : "rgba(33, 216, 9, 0.884)" }} id='Token_booking_token_styling' onClick={() => token_data(count)}>
                                       <p style={{ padding: "20px 00px 00px 00px" }}>{count},{database_token[cc-1+excount]}</p>
                                    </button>
                                    <br />
                                    <br />
                                 </>
                              )}

                           </div>
                           &nbsp;


                        </div>
                     </div>
                  </div>
               </> :
               <>
                  <div id='spcr1'></div>
                  <div id='Token_book_img_alighn1'>

                     <img id='Token_book_img' src="../Images/1(2).jpg" alt="" />
                     <br />
                  </div>
                  <div style={{ textAlign: "center" }}>
                     <br />
                     <p id='name_text' style={{ color: "black" }}>{doctor.name}</p>
                     <p id='names_text' style={{ color: "black" }}>Categorssy:{doctor.categorie}</p>
                     <p id='time_text'>Token Booking time  &nbsp; <span id='time_text2'>12.10 AM</span> To <span id='time_text3'>1.10 AM</span></p>

                     <p>{distime}  &nbsp; {dismonth}</p>
                  </div>
               </>
            :
            <>
               <div id='spcr1'></div>
               <div id='Token_book_img_alighn1'>
                  <img id='Token_book_img' src="../Images/1(2).jpg" alt="" />
                  <br />
               </div>
               <div style={{ textAlign: "center" }}>
                  <br />
                  <p id='name_text' style={{ color: "black" }}>{doctor.name}</p>
                  <p id='names_text' style={{ color: "black" }}>category:{doctor.categorie}</p>
                  <p id='time_text'>Token Booking time  &nbsp; <span id='time_text2'>12.10 AM</span> To <span id='time_text3'>1.10 AM</span></p>
                  <p>{distime}  &nbsp; {dismonth}</p>
               </div>
            </>
         }
      </>
   )
}
