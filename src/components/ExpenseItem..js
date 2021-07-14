function ExpenseItem(props){
    return(
        <>
        <h1>{props.items.id}</h1>
        <h2>{props.items.item_name}</h2>
        </>
    );
}

export default ExpenseItem;