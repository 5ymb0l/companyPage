import { Dialog, DialogContent, useMediaQuery, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  children: any;
  title?: string;
  openPopup: boolean;
  setOpenPopup: (param: boolean) => void;
};

export default function EditPopup(props: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { children, title, openPopup, setOpenPopup } = props;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "52%",
        },
      }}
      fullScreen={fullScreen}
      open={openPopup}
      onClose={() => {
        setOpenPopup(false);
      }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 0,
          overflowX: "hidden",
          marginRight: "10px",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
