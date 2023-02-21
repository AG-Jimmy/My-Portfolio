import { SiJavascript,SiMysql,SiMongodb,SiAdobephotoshop,SiAdobeillustrator } from "react-icons/si";
import { FaNode,FaReact} from "react-icons/Fa";
import { AiFillHtml5} from "react-icons/ai";
import { DiCss3Full} from "react-icons/di";
import { BsBootstrapFill} from "react-icons/bs";


export default function Skills() {
  return (
  
<div className="container text-center">
  <h2>Skills</h2>
<div className="row  row-cols-3 row-cols-lg-5  p-5 ">
  <div className="col p-3 border border-light"> <FaNode /> Node.Js                </div>
  <div className="col p-3 border border-light"> <SiJavascript /> JavaScript       </div>
  <div className="col p-3 border border-light"> <FaReact /> React.Js              </div>
  <div className="col p-3 border border-light"> <SiMysql /> MySQL                 </div>
  <div className="col p-3 border border-light"> <SiMongodb /> MongoDB             </div>
  <div className="col p-3 border border-light"> <AiFillHtml5 /> HTML              </div>
  <div className="col p-3 border border-light"> <DiCss3Full /> CSS                </div>
  <div className="col p-3 border border-light"> <BsBootstrapFill /> Bootstrap     </div>
  <div className="col p-3 border border-light"> <SiAdobephotoshop /> Photoshop    </div>
  <div className="col p-3 border border-light"> <SiAdobeillustrator /> Illustrator</div>
  </div>
</div>

  )
}
