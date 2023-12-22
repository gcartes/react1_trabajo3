export default function Alert({error, succes}){

    return(
        <>
        
        {error.length > 0 && <div className="alert alert-danger" role="alert">{error}</div>}
        {succes.length > 0 && <div className="alert alert-success" role="alert">{succes}</div>}
        </>
    );

    

}