
import React from "react";
import { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
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


function User() {
  const [items] = React.useState([
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker"
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);
  return (
    <>
      <div className="content">
      <Form >
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Mailing List</CardTitle>
              </CardHeader>
              <CardBody>
              
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Mail Subject</label>
                        {/* <Input
                        
                          placeholder="subject"
                          type="text"
                          
                        /> */}
                        {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> */}

{/* <CDropdown>
  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
  </CDropdownMenu>
</CDropdown> */}
                       {/* <div class="dropdown">
                        <ul>
                          <li>Option 1</li>
                          <li>Option 2</li>
                          <li>Option 3</li>
                          <li>Option 4</li>
                        </ul>
                      </div> */}

                      {/* <Dropdown
                            options={[
                              {
                                value: option.value,
                                label: option.label
                              }
                            ]}
                        /> */}
 <br></br>
                      <select>
                        <option value="Prod">Prod</option>
                        <option value="NonProd">Non Prod</option>
                      </select>
                        <br></br><br></br>
                      <select>
                            {items.map(item => (
                              <option
                                key={item.value}
                                value={item.value}
                              >
                                {item.label}
                              </option>
                            ))}
                      </select>
                    
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
                          
                        />
                      </FormGroup>
                    </Col>
                  </Row>
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
