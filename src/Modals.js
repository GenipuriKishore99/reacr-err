export const Modals=()=>{
    return(
        <div>
            <div>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login">Login</button>
            </div>
            <div className="modal fade" id="login">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="bi bi-person-fill">Login</h3>
                            <button className="btn  btn-close" data-bs-dismiss="modal"></button>

                        </div>
                        <div className="modal-body">
                            <dl>
                                <dt>Name</dt>
                                <dd><input type="text" className="form-control"/></dd>
                                <dt>Password</dt>
                                <dd><input type="password" className="form-control"></input></dd>
                            </dl>

                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary">Login</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>

                        </div>

                    </div>

                </div>
                
            </div>

        </div>
    )
}