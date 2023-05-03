import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import Forms from "./Forms";
import CycleCreation from "./CycleCreation";
import { Close } from "@material-ui/icons";

export default function Modals({ open, handleClose, modalContent, title }) {

  const content = {
    "Forms": <Forms />,
    "CycleCreation": <CycleCreation onClose={handleClose} />,
  };

  const styleD = {
    "Forms": { backgroundColor: "white", justifyContent: "unset"},
    "CycleCreation": { backgroundColor: "#0a2167", color: "white", justifyContent: "unset"},
  }

  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose} >
      <DialogActions style={styleD[modalContent]}>
        <Button style={modalContent === "Forms" ? {position: "absolute"} : {position: "absolute", color: "white"}} onClick={handleClose}>
          <Close />
        </Button>
        <h3 style={{margin: "0 auto"}}>{title}</h3>
      </DialogActions>
      <DialogContent>{content[modalContent]}</DialogContent>
    </Dialog>
  );
}
