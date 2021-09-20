import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((_) => ({
  gameTable: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
    minHeight: "50px",
    paddingBottom: "30px"
  },
  playerCell: {
    border: "1px solid grey",
    height: "auto",
    width: "150px",
  },
  playerCellText: {
    overflowWrap: "anywhere",
  }
}))