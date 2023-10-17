import * as C from "./styles";
import PropTypes from "prop-types";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" cursor="pointer" />
        )}
      </C.Td>
      <C.Td style={{ textAlign: "center" }}>
        <FaTrash
          onClick={() => onDelete(item.id)}
          style={{ cursor: "pointer" }}
        />
      </C.Td>
    </C.Tr>
  );
};

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GridItem;
