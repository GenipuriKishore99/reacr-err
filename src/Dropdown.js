export const DropDown=()=>{
    return(
        <div>
            <button className="btn btn-warning w-100 m-2 p-2">Back to top</button>

            <footer className="row bg-dark text-white m-2 p-2">
                <div className="col">
                <ul className="list-unstyled">
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                </ul>
                </div>
                <div className="col">
                <ul className="list-unstyled">
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                </ul>
                </div>
                <div className="col">
                <ul className="list-unstyled">
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                    <li>Kishore</li>
                </ul>
                </div>
            </footer>
            <caption className="table-caption">This is table</caption>
            <table className="table table-hover table-primary table-responsive">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Phone</th>
                        <th>Cell</th>
                    </tr>
                </thead>
            </table>
            <progress min="1" max="20"></progress>
            <div>
                <div className="spinner"></div>
            </div>
            <div>
                <ul className="pagination">Pagination</ul>
                <li className="pagination-item"><a className="pagination-link">Next</a></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>Prev</li>
            </div>
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

        </div>
    )
}