
export default function About( {ProfileInfoData}) {
  const {name ,img_url,bio} = ProfileInfoData;
    return (

      <div className="imgNameBio  container  " style={{paddingTop:"60px"}}>

        <div className="row   text-center align-items-center ">
          <div className="  col-md-auto " >
            <img  src={img_url} alt="Picture of the author" width={260} height={260} 
            className="rounded-circle border border-dark border-5"/>
          </div> 

          <div className="col bg-dark  rounded-3 "  >
            <div  className=" p-3">       
              <h1>{name}</h1>
              <h6>{bio}</h6>
            </div>
          </div>
        </div>

      </div>
    )
  }

