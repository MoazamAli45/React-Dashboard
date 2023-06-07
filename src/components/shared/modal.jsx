import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import EditForm from "../products/editForm";
import AddForm from "../products/addForm";
import CloseIcon from "@mui/icons-material/Close";

export default function DashboardModal(props) {
  const { data: editData, open } = props;
  const [closeModal, setCloseModal] = React.useState(false);
  const handleClose = () => {
    setCloseModal(false);
    props.onClose(closeModal);
  };

  const closeModalAdd = (close) => {
    setCloseModal(false);
    props.onClose(closeModal);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            spacing={2}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                xs: 300,
                md: 400,
              },
              bgcolor: "background.paper",

              boxShadow: 24,
              p: 4,
            }}
          >
            {props.edit ? (
              <EditForm onClose={handleClose} data={editData} />
            ) : (
              <AddForm onClose={closeModalAdd} />
            )}
            <CloseIcon
              sx={{
                position: "absolute",
                top: "0%",
                right: "0%",
                cursor: "pointer",
              }}
              size="large"
              onClick={handleClose}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
