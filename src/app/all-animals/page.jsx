import AnimalCard from "@/Components/AnimalCard";


const allAnimals = async() => {
    const res = await fetch("http://localhost:3000/data/products.json")
    const data = await res.json();
    return data;
}

const allAnimalsPage = async() => {
    const animals = await allAnimals();
    return(
        <div className="">
            <h2 className="text-center mt-5 font-bold text-4xl">All Animals</h2>
         
         <div className="container mx-auto grid grid-cols-3 gap-4 mt-4">
            {
                animals.map(animal=> <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
            }
         </div>
        </div>
    )
}
export default allAnimalsPage;