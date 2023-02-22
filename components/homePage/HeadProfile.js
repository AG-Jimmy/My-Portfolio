import Image from "next/image";

export default function About( {ProfileInfo}) {
  const { name, bio,avatar_url } = ProfileInfo;
    return (

      <div className="imgNameBio  container  " style={{paddingTop:"60px"}}>




        <div className="row   text-center align-items-center ">
          <div className="  col-md-auto " >
            <Image  src={avatar_url} alt="Picture of the author" width={300} height={300} 
            className="rounded-circle border border-dark border-5"/>
          </div> 

          <div className="col bg-dark  rounded-3 "  >
            <div  className=" p-3">       
              <h1>{name}</h1>
              <h6>{bio}</h6>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col  justify-content-end d-flex  " >
            <Image  src={avatar_url} alt="Picture of the author" width={300} height={300} 
            className="rounded-circle border border-light-subtle border-5"/>
          </div>

          <div className="col  d-flex align-items-center"  >
            <div >       
              <h1>{name}</h1>
              <h6>{bio}</h6>
            </div>
          </div>

        </div> */}

{/*
 bg-primary -   bg-primary-subtle
 bg-secondary - bg-secondary-subtle 
 bg-success -   bg-success-subtle 
 bg-danger  -   bg-danger-subtle 
 bg-warning  -  bg-warning-subtle 
 bg-info      - bg-info-subtle 
 bg-light     - bg-light-subtle 
 bg-dark      - bg-dark-subtle 
 bg-body-secondary -  bg-body-tertiary*/}
      </div>
    )
  }

