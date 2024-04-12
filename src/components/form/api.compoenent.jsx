import { useEffect, useState } from "react"
import '../api.component.css';
export const Api=()=>{

    const [category,setCategory]=useState([]);

    const [products,setProducts]=useState([]);

    const [cartCount,setCartCount]=useState([]);

    const [countItems,setCartItem]=useState(10);



    useEffect(()=>{

        categoryData();
        productData("https://fakestoreapi.com/products");
        cartCountTogle();

    },[])

    function cartCountTogle(){
        setCartItem(cartCount.length)


    }

    function handleCategory(e){
        if(e.target.value==="all"){
            productData("https://fakestoreapi.com/products")
        }
        else{
            productData(`http://fakestoreapi.com/products/category/${e.target.value}`)
        }


    }


    function categoryData(){
        fetch("https://fakestoreapi.com/products/categories")
        .then((data)=>data.json())
        .then((result)=>{
            result.unshift("all")
            setCategory(result)
        })
    }

    function productData(url){
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data)
        })
    }


    function handleCount(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)

         .then((res)=>res.json())
         .then((data)=>{
            cartCount.push(data)
            cartCountTogle();
            alert(`${data.title}\n Added to cart`)
         })
        // alert(e.target.id)
    }
    return(
        <>
        <div className="container-fluid">
        <header className="d-flex justify-content-between bg-dark text-white p-3 m-2">
            <div>
                <h5>FakestoreAPi</h5>
            </div>
            <div>
                <span className="me-3">Home</span>
                <span className="me-3">Electronincs</span>
                <span className="me-3">Jewellery</span>
                <span className="me-3">Mens Clothy</span>
                <span className="me-3">Womens Clothy</span>
            </div>
            <div>
                <span className="bi bi-heart me-3"></span>
                <span className="bi bi-person me-3"></span>
                <span className="bi bi-search me-3"></span>
                <button className="btn btn-light position-relative" data-bs-target="#cart" data-bs-toggle="modal">

                <span className="bi bi-cart me-3"></span>
                <span className="badge rounded-circle bg-danger position-absolute">{countItems}</span>

                </button>
                <div className="modal fade" id="cart" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="text-primary"> Add to cart items</h3>
                                <button className="btn-close" data-bs-dismiss="modal"></button>

                            </div>
                            <div className="modal-body">
                                <table className="table table-primary">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Preview</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartCount.map((m)=>{
                                                return(
                                                    <tr>
                                                        <td>{m.title}</td>
                                                       <td> <img src={m.image} width="50" height="50"></img></td>
                                                       <td>{m.rating.count}</td>
                                                       <td><button className="btn btn-danger"><span className="bi bi-trash-fill"></span></button></td>


                                                    </tr>
                                                )
                                            })

                                        }

                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
        </header>
        <section className="row m-2">
            <nav className="col-2">
                <div className="form-group">
                <label className="form-label">Select Category</label>
                <select className="form-select " onChange={handleCategory}>

                    {
                        category.map((m)=>{
                            return(
                                <option key={m} value={m}>{m.toUpperCase()}</option>
                            )
                        })
                    }
                    
                    
                </select>
                </div>

            </nav>
            <main className="col-10 d-flex flex-wrap">
                {
                     products.map((m)=>{
                        return(
                            
                            <div className="card m-2 p-2">
                                <img src={m.image} alt="m" height="150"  className="card-img-top"></img>
                                <div className="card-header">
                                    <p className="card-title">{m.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{m.rating.count}</dd>
                                        <dt>Rate</dt>
                                        <dd className="bi bi-star-fill text-success">{m.rating.rate}</dd>
                                    </dl>
                                  

                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger w-100" id={m.id} onClick={handleCount}><span className="bi bi-cart4"></span>Add to cart </button>

                                </div>

                            </div>
                        )
                     })
                }



            </main>
        </section>
        </div>

        </>
    )
}