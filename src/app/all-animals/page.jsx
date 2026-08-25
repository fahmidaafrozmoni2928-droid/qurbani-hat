import AnimalCard from "@/Components/AnimalCard";


const AllAnimalsPage = async () => {
   const res = await fetch("http://localhost:3000/data/products.json");

   const animals = await res.json();
  console.log(animals);

  

  return (
    <div className="bg-green-100 w-full mt-5 py-8">
      <h2 className="text-center font-bold text-4xl">
        All Animals
      </h2>

       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[...animals].sort((a, b) => a.price - b.price)
        .map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div> 
    </div>
  );
};

export default AllAnimalsPage;