import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// reactstrap components
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

// import loadFile from "./Image" 

function User() {
    const [file, setFile] = useState("");

    // console.log(file.name)

    const { register, handleSubmit} = useForm();
    const onSubmit = (data, e) => {

      console.log(JSON.stringify(data))

      fetch("/add", {
            method: "POST",
            body: JSON.stringify(data),
      // Adding headers to the request
      headers: {
          // "Content-type": "multipart/form-data"
            "Content-type": "application/json"
      }
        })
        .then(response => response.json())
        .then(json => console.log(json));
      
      if(e){
        console.log("error" + e)
      }

      } 

    // const { ref: mail_subject, ...rest } = register("mail_subject");
    const { ref: mail_subject, ...mail_subjectrest } = register('mail_subject', { required: true });
    const { ref: mail_body, ...mail_bodyrest } = register('mail_body', { required: true });
    // const { ref: mail_attach, ...mail_attachrest } = register('mail_attach', { required: true });
    


    return (
    <>
      <div className="content">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Mail Body</CardTitle>
              </CardHeader>
              <CardBody>
              
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Mail Subject</label>
                        <Input
                        
                          placeholder="subject"
                          type="text"
                          {...mail_subjectrest}
                          innerRef={mail_subject} 
                        />
                    
                      </FormGroup>
                    </Col>
                    
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Mail body</label>
                        <Input
                          type="textarea"
                          defaultValue="Regards Team APAAS"
                          {...mail_bodyrest}
                          innerRef={mail_body} 
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label >Attachment   </label>  */}
                        {/* <label htmlFor="attach"> <span height="100px" className="nc-icon nc-cloud-upload-94" /> </label> */}
                        {/* <Input
                          // hidden
                          type="file"
                          // onChange={(e) => setFile(e.target.files[0])}
                          // style={{ display: "none" }}
                          id="attach"      
                          {...mail_attachrest}
                          innerRef={mail_attach}              
                        > 
                        
                        </Input>*/} 
                        {/* 
                        <div className="left">
                         <img src={
                                file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            } height="200px" alt="" />
                        </div> */}

                        {/* <Input type="file" name="inputFile" autocomplete="off"
                          onchange="loadFile(event)">
                        </Input> */}
                      {/* </FormGroup>
                    </Col>
                    
                  </Row>
                  <img id="output" width="500"/> */}

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Proceed to add attachment
                      </Button>
                    </div>
                  </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Form>
      </div>
    </>
  );
}

export default User;
