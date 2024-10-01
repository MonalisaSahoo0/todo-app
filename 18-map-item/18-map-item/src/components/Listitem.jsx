import Item from "./item";


const ListItem = ({fooditems}) => {
  

  return <ul className="list-group">
  {fooditems.map((items, index) => (
   <Item key={index}
   fooditems={items} />
  ))}
</ul>
}

export default ListItem;