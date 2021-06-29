function Book({data}){
    return (

        <div className="card col-lg-6">
        
          <div className="container-fluid">
            <img className="card-img-top book-img" src={data.image} alt={data.title} />
            <div className="card-body">
              <h5>{data.subtitle}</h5>
                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Subtitle:</td>
                        <td>{data.subtitle}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Author:</td>
                        <td>{data.author}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Publisher:</td>
                        <td>{data.publisher}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Description:</td>
                        <td>{data.description}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>

)}