import React, { useState,useRef } from "react";
import "./Body.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Table from "react-bootstrap/Table";
import { Button, Modal, Input } from "react-bootstrap";
import { Switch } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { color, style } from "@mui/system";
import TextField from "@mui/material/TextField";
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Alert } from '@mui/material';

function Body() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [model, setModel] = useState(false);

  const modelClose = () => setModel(false);
  const modelOpen = () => setModel(true);

  const handleModel = () => {
    modelOpen();
  };

  // button

  const [btn, setBtn] = useState(false);

  const handleBtn = () => {
    setBtn(true);
  };

  // edit

  const [edit, setEdit] = useState(false);

  // color picker

  const [color, setColor] = useState("#FFF");

  const handleColorOne = (e) => {
    setColor(e.target.value);
  };

  const [colorTwo, setColorTwo] = useState("#FFF");

  const handleColorTwo = (e) => {
    setColorTwo(e.target.value);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);


  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  
  const options = ['Create a merge commit', 'Above the Default Fields', 'Rebase and merge'];


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
                          {btn ? (
                            <i
                              class="material-icons "
                              style={{ background: "white" }}
                              onClick={() => {
                                handleModel();
                                handleEdit();
                              }}
                            >
                              &#xE254;
                            </i>
                          ) : (
                            <i
                              class="material-icons edit"
                              onClick={() => {
                                alert("please turn on the Button");
                                // <Alert severity="warning">This is a warning alert — please turn on the Button!</Alert>

                              }}
                            >
                              &#xE254;
                            </i>
                          )}
                        </a>
                        <Switch
                          onClick={() => {
                            handleBtn();
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="btnn">
              <Button className="reset" variant="text">
                Reset
              </Button>
              <Button className="saveChanges" variant="contained">
                saveChanges
              </Button>
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

          {/* model */}

          <Modal
            show={model}
            onHide={modelClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Step</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="enabled">
                  Enabled <HelpIcon className="helpicon" /> <Switch />
                </div>

                <div className="name">
                  <div>name</div> <div className="stepTitle">step title</div>
                </div>

                <div className="shippingDiv">
                  <div className="shipping _one">Shipping</div>{" "}
                  <div className="shipping _two">Shipping</div>
                </div>

                <div>
                  <div className="indexType">Index Type</div>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Textindex"
                      control={<Radio />}
                      label="Text Index"
                    />
                    <FormControlLabel
                      value="Iconindex"
                      control={<Radio />}
                      label="Icon Index"
                    />
                  </RadioGroup>
                </div>

                <div className="upload">
                  <IconButton
                    aria-label="upload picture"
                    component="label"
                    className="upload_icon"
                  >
                    <input hidden accept="image/*" type="file" />
                    <CloudUploadIcon className="upload_icon" />
                  </IconButton>

                  <Button
                    className="upload_btn"
                    color="primary"
                    variant="contained"
                    component="label"
                  >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </div>

                <div className="enabled content_settings">
                  Enable Content Settings <HelpIcon className="helpicon" />{" "}
                  <Switch />
                </div>

                <div className="content_color">
                  <div>Content Background Color</div>{" "}
                  <div className="font_color">Content Font Color</div>
                </div>

                {/* <input
                      className=" _color"
                      type="text"
                      onChange={handleColor}
                      value={color} */}

                <div>
                  <div className="color_picker">
                    <input
                      type="color"
                      onChange={handleColorOne}
                      style={{ cursor: "pointer" }}
                      value={color}
                      className="_picker"
                    />

                    <input
                      className=" _color _picker"
                      type="text"
                      onChange={handleColorOne}
                      value={color}
                    />
                  </div>

                  <div className="color_picker _sec">
                    <input
                      type="color"
                      onChange={handleColorTwo}
                      style={{ cursor: "pointer" }}
                      value={colorTwo}
                      className="_picker"
                    />

                    <input
                      className=" _color _picker"
                      type="text"
                      onChange={handleColorTwo}
                      value={colorTwo}
                    />
                  </div>
                </div>

                <div className="enabled content_settings">
                  Custom Content <HelpIcon className="helpicon _spc" />{" "}
                </div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Text"
                  maxRows={7}
                  value={value}
                  onChange={handleChange}
                />

                <div className="drwpdwn">
                  Display Positions <br/>

                  <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                  >
                    <Button className="dwpbtn" onClick={handleClick}>
                      {options[selectedIndex]}
                    </Button>
                    <Button
                      size="small"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="select merge strategy"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </ButtonGroup>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu" autoFocusItem>
                              {options.map((option, index) => (
                                <MenuItem
                                  key={option}
                                  disabled={index === 2}
                                  selected={index === selectedIndex}
                                  onClick={(event) =>
                                    handleMenuItemClick(event, index)
                                  }
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              {/* <Button
                variant="secondary"
                
              >
                Close
              </Button> */}

              <div className="btnn">
              <Button className="reset" variant="text">
                Reset
              </Button>
              <Button className="saveChanges" variant="contained" onClick={() => {
                  modelClose();
                  setEdit(false);
                   setBtn(false)
                }}>
                saveChanges
                
              </Button>
            </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Body;
