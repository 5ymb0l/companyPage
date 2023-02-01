import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  Checkbox,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Box,
  FormControl,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import {
  checkboxCountry,
  checkboxDistrict,
  checkboxState,
  checkboxTaluka,
  checkboxSanghat,
  checkboxVadodara,
  checkboxValsad,
  checkboxSurat,
  checkboxAhmedabad,
} from "./FilterData";

type Props = {
  handleCheckboxChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    id: string
  ) => void;
  checkboxValues?: string[];
  handleAddFilter?: () => void;
  handleSelectAllChange?: () => void;
  handleResetAllChange?: () => void;
};
export const AddFilter = ({
  handleCheckboxChange = () => null,
  checkboxValues = [],
  handleSelectAllChange = () => null,
  handleAddFilter = () => null,
  handleResetAllChange = () => null,
}: Props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        <Button
          sx={{
            color: " #002F71",

            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            marginRight: "20px",
          }}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add More
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "50px",
            color: " #002F71",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            textTransform: "none",
            width: "110px",
            height: "10%",
          }}
        >
          Display : All
        </Button>
      </Box>

      <Dialog
        sx={{
          "& .MuiPaper-root": {
            minWidth: "20%",
            minHeight: "75%",
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          gap={1}
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              fontSize: "32px",
              color: "#002F71",
              fontWeight: 600,
              fontFamily: "Poppins",
            }}
          >
            Filter
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              color: "#1073FF",
              fontWeight: 500,
              fontFamily: "Poppins",
              paddingTop: "8px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "18px",
              }}
              onClick={handleResetAllChange}
            >
              Reset All
            </Button>
          </Box>
          <Button
            sx={{
              marginLeft: 20,
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                color: "#002F71",
              }}
            />
          </Button>
        </DialogTitle>

        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <FormControl component="fieldset">
              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                }}
                component="legend"
              >
                DISPLAY
              </FormLabel>

              <FormGroup aria-label="position">
                <FormControlLabel
                  sx={{
                    color: "#002F71",
                  }}
                  value="top"
                  control={
                    <Checkbox
                      sx={{
                        color: "#6682AA",
                      }}
                    />
                  }
                  label="Immediate"
                />
                <FormControlLabel
                  sx={{
                    color: "#002F71",
                  }}
                  control={
                    <Checkbox
                      sx={{
                        color: "#6682AA",
                      }}
                      checked={
                        checkboxValues?.length ===
                        checkboxCountry.length +
                          checkboxDistrict.length +
                          checkboxState.length +
                          checkboxTaluka.length +
                          checkboxSanghat.length +
                          checkboxVadodara.length +
                          checkboxValsad.length +
                          checkboxSurat.length +
                          checkboxAhmedabad.length
                        // checkboxType.length + checkboxRegion.length
                      }
                      onChange={handleSelectAllChange}
                    />
                  }
                  label="All"
                />
              </FormGroup>

              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                component="legend"
              >
                TYPE
              </FormLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <>
                  {checkboxCountry.map(
                    (checkbox, index) => (
                      <FormGroup>
                        <FormControlLabel
                          key={index}
                          sx={{
                            display: "flex",

                            color: "#002F71",
                          }}
                          control={
                            <Checkbox
                              sx={{
                                color: "#6682AA",
                              }}
                              checked={checkboxValues.includes(checkbox.name)}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) =>
                                handleCheckboxChange(
                                  event,
                                  checkbox.name,
                                  checkbox._id
                                )
                              }
                            />
                          }
                          label={checkbox.name}
                        />
                      </FormGroup>
                    )

                    // console.log(checkboxType)
                  )}
                </>
                <>
                  {checkboxDistrict.map(
                    (checkbox, index) => (
                      <FormGroup>
                        <FormControlLabel
                          key={index}
                          sx={{
                            display: "flex",
                            color: "#002F71",
                            marginRight: "55px",
                          }}
                          control={
                            <Checkbox
                              sx={{
                                color: "#6682AA",
                              }}
                              checked={checkboxValues.includes(checkbox.name)}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) =>
                                handleCheckboxChange(
                                  event,
                                  checkbox.name,
                                  checkbox._id
                                )
                              }
                            />
                          }
                          label={checkbox.name}
                        />
                      </FormGroup>
                    )

                    // console.log(checkboxType)
                  )}
                </>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <>
                  {checkboxState.map(
                    (checkbox, index) => (
                      <FormGroup>
                        <FormControlLabel
                          key={index}
                          sx={{
                            display: "flex",

                            color: "#002F71",
                          }}
                          control={
                            <Checkbox
                              sx={{
                                color: "#6682AA",
                              }}
                              checked={checkboxValues.includes(checkbox.name)}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) =>
                                handleCheckboxChange(
                                  event,
                                  checkbox.name,
                                  checkbox._id
                                )
                              }
                            />
                          }
                          label={checkbox.name}
                        />
                      </FormGroup>
                    )

                    // console.log(checkboxType)
                  )}
                </>
                <>
                  {checkboxTaluka.map((checkbox, index) => (
                    <FormGroup>
                      <FormControlLabel
                        key={index}
                        sx={{
                          display: "flex",
                          color: "#002F71",
                          marginRight: "57px",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  ))}
                </>
              </Box>
              <>
                {checkboxSanghat.map(
                  (checkbox, index) => (
                    <FormGroup>
                      <FormControlLabel
                        key={index}
                        sx={{
                          display: "flex",

                          color: "#002F71",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  )

                  // console.log(checkboxType)
                )}
              </>

              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                component="legend"
              >
                REGION
              </FormLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <>
                  {checkboxVadodara.map((checkbox, index) => (
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        key={index}
                        sx={{
                          color: "#002F71",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  ))}
                </>
                <>
                  {checkboxValsad.map((checkbox, index) => (
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        key={index}
                        sx={{
                          color: "#002F71",
                          marginRight: "55px",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  ))}
                </>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <>
                  {checkboxSurat.map((checkbox, index) => (
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        key={index}
                        sx={{
                          color: "#002F71",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  ))}
                </>
                <>
                  {checkboxAhmedabad.map((checkbox, index) => (
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        key={index}
                        sx={{
                          color: "#002F71",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  ))}
                </>
              </Box>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              fontSize: "15px",
              color: "#002F71",
              fontWeight: 600,
              fontFamily: "Poppins",
              textTransform: "none",
            }}
          >
            {" "}
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAddFilter();
              setOpen(false);
            }}
            sx={{
              textTransform: "none",
            }}
            variant="contained"
          >
            {" "}
            Apply Filters{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
