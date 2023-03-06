import TableRow from '../TableRow/TableRow';
import PropTypes from 'prop-types';


const Tbody = (props) => {
  return (
    <tbody>
      {props.items.map((item, index) => {
        return <TableRow key={item.id} number={index} item={item} />;
      })}
    </tbody>
  );
};

Tbody.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};



export default Tbody;
