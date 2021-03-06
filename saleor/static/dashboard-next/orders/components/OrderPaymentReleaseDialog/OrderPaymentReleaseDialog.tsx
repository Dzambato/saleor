import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as React from "react";

import i18n from "../../../i18n";

interface OrderPaymentReleaseDialogProps {
  open: boolean;
  onClose?();
  onConfirm?();
}

const OrderPaymentReleaseDialog: React.StatelessComponent<
  OrderPaymentReleaseDialogProps
> = ({ open, onConfirm, onClose }) => (
  <Dialog open={open}>
    <DialogTitle>{i18n.t("Release payment", { context: "title" })}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {i18n.t("Are you sure you want to release this payment?")}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>{i18n.t("Back", { context: "button" })}</Button>
      <Button color="primary" variant="raised" onClick={onConfirm}>
        {i18n.t("Confirm", { context: "button" })}
      </Button>
    </DialogActions>
  </Dialog>
);
export default OrderPaymentReleaseDialog;
