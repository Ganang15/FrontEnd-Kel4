import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Stack,
  Row,
  Col,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import { NavbarInfo } from "../components/navbar";
import Profile from "../assets/images/profile.png";
import Jam from "../assets/images/jam1.png";
import axios from "axios";
import "../css/daftarJual.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export function ModalPenawar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="p-3">
        <Modal.Header closeButton className="border-0">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold">Perbarui status penjualan produkmu</p>
          <p className="text-black-50">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <h5 className="text-center mb-3">Product Match</h5>
          <Stack
            direction="horizontal"
            gap={3}
            className="bg-color-grey radius-secondary p-2"
          >
            <img
              src={Jam}
              alt=""
              style={{
                width: "48px",
                height: "48px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <Stack>
              <p className="m-0 fw-bold">Nama Pembeli</p>
              <p className="m-0 text-black-50">Kota</p>
            </Stack>
          </Stack>
          <Stack
            direction="horizontal"
            gap={3}
            className="bg-color-grey radius-secondary p-2"
          >
            <img
              src={Jam}
              alt=""
              style={{
                width: "48px",
                height: "48px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <Stack>
              <p className="m-0 fw-bold">Jam Tangan Casio</p>
              <p className="m-0">Rp 250.000</p>
              <p className="m-0">Ditawar Rp 200.000</p>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="pe-5 d-gird gap-2">
          <Button
            className="bg-color-primary w-100 radius-primary border-0"
            onClick={handleClose}
          >
            Hubungi via Whatsapp
            <FaWhatsapp className="mx-2" />
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export function ModalStatus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
              <div className="p-3">
                <Modal.Header closeButton className="border-0">
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="fw-bold">Perbarui status penjualan produkmu</p>
                  <Form>
                      <div key={`default`} className="mb-3">
                        <Form.Check
                          type={'radio'}
                          id={`default`}
                          label={`Berhasil terjual`}
                        />
                        <p className=" text-black-50 radioSubLabel">Kamu telah sepakat menjual produk ini kepada pembeli</p>

                        <Form.Check
                          type={'radio'}
                          label={`Batalkan transaksi`}
                          id={`default`}
                        />
                        <p className=" text-black-50 radioSubLabel">Kamu membatalkan transaksi produk ini dengan pembeli</p>
                      </div>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-gird gap-2">
                  <Button
                    className="bg-color-primary w-100 radius-primary border-0"
                    onClick={handleClose}
                  > 
                    Kirim
                  </Button>
                </Modal.Footer>
              </div>
            </Modal>
  );
}
