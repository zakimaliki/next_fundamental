import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const ModalBootstrap = ({
  modaltype,
  children,
  id,
  name,
  stock,
  price,
  photo,
  description,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name,
    stock,
    price,
    photo,
    description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    axios
      .post("https://flat-songs-production.up.railway.app/api/v1/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("update successful");
        setShow(false);
      })
      .catch((err) => {
        alert("update failed");
        setShow(false);
      });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    axios
    .post("https://flat-songs-production.up.railway.app/api/v1/products", formData ,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
        alert("update successful");
        setShow(false)
      })
      .catch((err) => {
        alert("update failed");
        setShow(false)
      });
  };

  const handleDelete = () => {
    axios
      .delete(process.env.REACT_APP_API_BACKEND + "products/" + id)
      .then((res) => {
        alert("delete success");
        setShow(false)
        })
      .catch((err) => {
        alert("delete failed");
        setShow(false)
      });
  };
  if (modaltype === "create") {
    return (
      <Fragment>
        <button
          className="btn btn-success"
          style={{ marginRight: "10px" }}
          onClick={handleShow}
        >
          {children}
        </button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>{children}</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmitCreate}>
            <Modal.Body>
              <input
                className="form-control mt-3"
                type="text"
                placeholder="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                className="form-control mt-3"
                type="text"
                placeholder="stock"
                name="stock"
                value={data.stock}
                onChange={handleChange}
              />
              <input
                className="form-control mt-3"
                type="text"
                placeholder="price"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
              <input
                className="form-control mt-3"
                type="file"
                placeholder="photo"
                name="photo"
                onChange={handleUpload}
              />
              <input
                className="form-control mt-3"
                type="text"
                placeholder="description"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" id="button-addon2" title="Register">
                {children}
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </Fragment>
    );
  } else if (modaltype === "edit") {
    return (
      <Fragment>
        <button
          className="btn btn-dark text-light"
          style={{ marginRight: "10px" }}
          onClick={handleShow}
        >
          {children}
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>{children}</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmitUpdate}>
            <Modal.Body>
              <input
                className="form-control mt-3"
                type="text"
                placeholder="name"
                id={id}
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                className="form-control mt-3"
                type="text"
                placeholder="stock"
                id={id}
                name="stock"
                value={data.stock}
                onChange={handleChange}
              />
              <input
                className="form-control mt-3"
                type="text"
                placeholder="price"
                id={id}
                name="price"
                value={data.price}
                onChange={handleChange}
              />
              <input
                className="form-control mt-3"
                type="file"
                placeholder="photo"
                id={id}
                name="photo"
                onChange={handleUpload}
              />
              <input
                className="form-control mt-3"
                type="text"
                placeholder="description"
                id={id}
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" id="button-addon2" title="Register">
                {children}
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </Fragment>
    );
  } else if (modaltype === "delete") {
    return (
      <Fragment>
        <button
          className="btn btn-danger text-light"
          style={{ marginRight: "10px" }}
          onClick={handleShow}
        >
          {children}
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>{children}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are sure want to delete product {name}?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              {children}
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  } else {
    return <div></div>;
  }
}
export default ModalBootstrap;
