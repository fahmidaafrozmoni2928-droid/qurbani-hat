

const loadingPage = () => {
    return(
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
         <h2 className="font-bold text-4xl">"Loading animals, please wait..."</h2>
         <div>
         <span className="loading loading-spinner loading-xl"></span>
         </div>
       
        </div>
    )
}
export default loadingPage;