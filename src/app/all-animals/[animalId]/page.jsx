import BookingModal from "@/Components/BookingModal";
import Image from "next/image";


const animalDetailsPage = async({params}) => {
    const {animalId} = await params;
    const res = await fetch(`http://localhost:3000/data/products.json`);
    const animals = await res.json();
    const animal = animals.find(a=> a.id.toString() ===animalId);
    console.log(animal);
    return(
        <div className="bg-green-100 w-full mt-5  py-8">
        <div className="container mx-auto min-h-[8vh] flex justify-center items-center ">
            <div className="card bg-base-100 object-cover shadow-sm">

  <div className="card-body">
    <div>
        <Image src={animal.image} alt={animal.name} width={450} height={250}></Image>
    </div>
    <h2 className="card-title font-bold text-3xl"> {animal.name} </h2>
    <div className="flex justify-between">
        <p>Type: {animal.type} </p>
        <p>Breed: {animal.breed} </p>

    </div>
    <div className="flex justify-between">
        <p>Age: {animal.age} </p>
        <p>Weight: {animal.weight} </p>

    </div>
    <div className="flex justify-between">
    <p>Category: {animal.category} </p>
    <p>Location: {animal.location} </p>

    </div>

    <p className="font-bold text-green-800 text-xl">Price: ${animal.price} </p>
    <p className="text-gray-700"> {animal.description} </p>

  </div>
    <div className="card-actions justify-start m-3">
    <BookingModal></BookingModal>
</div>




</div>
        </div>
        </div>
    )
}
export default animalDetailsPage;