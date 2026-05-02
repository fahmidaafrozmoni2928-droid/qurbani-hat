

const allAnimals = async() => {
    const res = await fetch("http://localhost:3000/data/products.json")
    const data = await res.json();
    return data;
}

const allAnimalsPage = async() => {
    const animals = await allAnimals();
    return(
        <div>
         all animals
         <div>
            {
                animals.map(animal=> <h2> {animal.name} </h2>)
            }
         </div>
        </div>
    )
}
export default allAnimalsPage;