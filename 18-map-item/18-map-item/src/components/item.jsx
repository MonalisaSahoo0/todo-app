const Item = (props) => {
  return  <li className="list-group-item  whole-item">
  <span className="each-item">{props.fooditems}</span>
</li>
}

export default Item;