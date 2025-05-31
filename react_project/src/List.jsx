function List(){

    const fruits=[{id:1,name:"durian", calories:400},
        {id:5,name:"apple", calories:454},
        {id:4,name:"banana", calories:433},
        {id:3,name:"grape", calories:656},
        {id:2,name:"melon", calories:54665}];

    // fruits.sort((a,b)=>a.name.localeCompare(b.name));// alphabetical

    fruits.sort((a,b)=>b.name.localeCompare(a.name));// reverse

    // fruits.sort((a,b)=>b.calories-a.calories);

    // &nbsp; used to specify :

    // const lowcal=fruits.filter(fruit=> fruit.calories<500);

    // const highcal=fruits.filter(fruit=> fruit.calories>1000);

    // const items2= highcal.map(highcal=><li key={highcal.id}>
    //     {highcal.name}:
    //     <b>{highcal.calories}</b>
    //     </li>);

        // return (<ol>{items2}</ol>)

    // const items1= lowcal.map(lowcal=><li key={lowcal.id}>
    //     {lowcal.name}:
    //     <b>{lowcal.calories}</b>
    //     </li>);

    //     return (<ol>{items1}</ol>)

    const items= fruits.map(fruit=><li key={fruit.id}>
                                      {fruit.name}:
                                      <b>{fruit.calories}</b>
                                      </li>);

    return (<>

    {fruits.length>0?<ol className="itemsss">{items}</ol>: null}
    <h3 className="fruits">fruits</h3>

    
    
    
    </>);


}

export default List