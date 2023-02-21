export default function GuestBook() {
  return (
    <div>
      <div className="container" style={{ width: "100%", height: "800px" }}>
     


     
      <div  className="border card-body p-4 row d-flex justify-content-center"
             style={{ backgroundColor: "transparent" }}>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="addAComment"
              className="form-control"
              placeholder="Type comment..."/>
          </div>

          <div className="card-body  card mb-4">
              <div className="d-flex ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                  alt="avatar"
                  width="25"
                  height="25"/>

                <p className="small mb-0 ms-2" style={{ color:"black" }}>Martha</p>

              </div>
            <p style={{ color:"black" }}>Type your note, and hit enter to add it</p>
          </div>

        </div>




      </div>
    </div>
  );
}
