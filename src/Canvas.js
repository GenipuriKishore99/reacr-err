export const Canvas=()=>{
    return(
        <div className="container-fluid">
            <div>
               <button className="btn btn-primary bi bi-menu-up" data-bs-toggle="offcanvas" data-bs-target="#canvas"></button>
               <nav className="offcanvas offcanvas-end" id="canvas" tabIndex="-1" >
                <div className="offcanvas-header bg-dark">
                    <h3 className="text-white text-center">Amazon</h3>
                    <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>

                </div>
                <div className="offcanvas-body">
                    <ol>
                        <li>KIshore</li>
                        <li>KIshore</li>
                        <li>KIshore</li>
                        <li>KIshore</li>
                        <li>KIshore</li>
                        <li>KIshore</li>
                    </ol>

                </div>
                </nav> 
            </div>


        </div>
    )

}