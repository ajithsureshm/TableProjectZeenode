import React, { useState } from "react";
import "./Body.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Table from "react-bootstrap/Table";
import { Button, Modal, Input } from "react-bootstrap";
import { Switch } from "@mui/material";

function Body() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = [
    { title: "Login", id: 1 },
    { title: "Billing", id: 2 },
    { title: "Shipping", id: 3 },
    { title: "Oder Info", id: 4 },
    { title: "Payment", id: 5 },
  ];

  return (
    <div class="container ">
      <div className="add_main">
        <div className="add" onClick={handleShow}>
          Add new step <AddCircleOutlineIcon />
        </div>
      </div>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-3 mt-1 mb-4 text-gred"></div>
          <div class="col-sm-3 offset-sm-1  mt-3 mb-4 text-gred float-right">
            {/* <Button variant="primary" onClick={handleShow}>
                Add New Student
              </Button> */}
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead class="thead">
                <tr>
                  <th>Title </th>
                  <th>Display Index</th>
                </tr>
              </thead>
              <tbody class="tbody">
                {data.map((value) => {
                  return (
                    <tr>
                      <td>{value.title}</td>

                      <div class="index_main">
                        <td class="index">{value.id}</td>
                      </div>

                      <td>
                        <a
                          href="#"
                          class="edit"
                          title="Edit"
                          data-toggle="tooltip"
                        >
                          <i class="material-icons">&#xE254;</i>
                        </a>
                        <Switch />
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              
            </table>
            <div className="btnn">
                <Button className="reset" variant="text">Reset</Button>
                <Button className="saveChanges" variant="contained">saveChanges</Button>
              </div>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Country"
                  />
                </div>

                <button type="submit" class="btn btn-success mt-4">
                  Add Record
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default Body;
