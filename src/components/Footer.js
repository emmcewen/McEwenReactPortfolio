import React from "react";
 function Footer(){
   
    return (

<footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/emmcewen">
    Github
    </a> 
    </div>
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.linkedin.com/in/emily-mcewen-098762a/">
    LinkedIn
    </a>
    </div>
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="mailto:emmcewen@gmail.com">
    Google
    </a> 
    <p>Copyright Emily McEwen © 2022 - All right reserved</p>
  </div>
</footer>
    );
}

export default Footer