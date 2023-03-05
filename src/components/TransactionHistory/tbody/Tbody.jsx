import TableRow from '../tableRow/tableRow';
const Tbody = (props) => {
  return (
    <tbody>
      {props.items.map((item, index) => {
        return <TableRow key={item.id} number={index} item={item} />;
      })}
    </tbody>
  );
};

export default Tbody;
