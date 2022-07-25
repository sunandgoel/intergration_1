// import React from "react";
// import { useState, useEffect } from "react";
// // reactstrap components


// const axios = require('axios');


// function Formpage() {
//     var bodyFormData = new FormData();
//     bodyFormData.append('userName', 'Fred');

//     axios({
//         method: "POST",
//         url: "add",
//         data: bodyFormData,
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//         .then(function (response) {
//           //handle success
//           console.log(response);
//         })
//         .catch(function (response) {
//           //handle error
//           console.log(response);
//         });
// }

// export default Formpage;


import React from "react";
import { useForm } from "react-hook-form";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

// function Formpage() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data, e) => {
//     fetch("/add", {
//           method: "POST",
//           body: JSON.stringify(data),
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
//       })
//       .then(response => response.json())
//       .then(json => console.log(json));
//     } 
// //   const onError = (errors, e) => console.log(errors, e);
   
//   return (
//     <>
//       <div className="content">
//         <Row>
//         <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <input {...register("lastName")} />
//       <button type="submit">Submit</button>
//     </form>

         
//           {/* <Col md="12">
//             <Card className="card-user">
//               <CardHeader>
//                 <CardTitle tag="h5">Mailing List</CardTitle>
//               </CardHeader>
//               <CardBody>
//                 <Form method="post">
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <FormGroup>
//                         <label>Mail Subject</label>
//                         <Input
//                           placeholder="subject"
//                           type="text"
                        
//                         />
//                       </FormGroup>
//                     </Col>
                    
//                   </Row>

//                   <Row>
//                     <Col md="12">
//                       <FormGroup>
                     
//                         <label>Mail body</label>
//                         <Input
//                           type="textarea"
//                           defaultValue="Regards Team APAC"
//                           value={data.name}
//                           onChange={(e)=>setdata.name(e.target.value)}
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <FormGroup>
//                         <label >Attachment   </label> 
//                         <label htmlFor="attach"> <span height="100px" className="nc-icon nc-cloud-upload-94" /> </label>
//                        <Input
//                           hidden
//                           type="file"
//                           onChange={(e) => setFile(e.target.files[0])}
//                           style={{ display: "none" }}
//                           id="attach"                   
//                         ></Input>
//                         <div className="left">
//                          <img src={
//                                 file
//                                 ? URL.createObjectURL(file)
//                                 : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//                             } height="200px" alt="" />
//                         </div>
                        
//                       </FormGroup>
//                     </Col>
               
//                   </Row>
              
                  
//                   <Row>
//                     <div className="update ml-auto mr-auto">
//                       <Button
//                         className="btn-round"
//                         color="primary"
//                         type="submit"
//                       >
//                         Update Profile
//                       </Button>
//                     </div>
//                   </Row>
//                 </Form>
//               </CardBody>
//             </Card>
//           </Col> */}
//         </Row>
//       </div>
//     </>
//   );
// }

function Formpage(){
  return(
    <form method="post" action="/alag" enctype="multipart/form-data">
    
     <p>
        <input type="file" name="inputFile" autocomplete="off" required ></input>
        </p>
          <p>
    <input type="submit" value="Submit"></input>
    </p>
    </form>
  )

}

export default Formpage;



 //   const [data, setdata] = useState({
  //     name: "",
  //     body: ""
  // });

  // Using useEffect for single rendering
  // useEffect(() => {
  //     // Using fetch to fetch the api from 
  //     // flask server it will be redirected to proxy

  //     // fetch("/data")
  //     //     .then((res) => res.json()
  //     //       .then((data) => {
  //     //           // Setting a data from api
  //     //           // console.log("check2" + data.Name)
  //     //           setdata({
  //     //             name: data.Name,
  //     //             age: data.Age,
  //     //             // date: data.Date,
  //     //             programming: data.programming,
  //     //         });
  //     //     })
  //     // );
  //     // console.log("check")

  //     fetch("/add", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           title: "foo",
  //           body: "bar",
  //           userId: 1
  //       }
  //     ),
  //   // Adding headers to the request
  //   headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //   }
  //     })
  //     .then(response => response.json())
  //     .then(json => console.log(json));
    
  // }, []);

  // console.log("check" + data.name)