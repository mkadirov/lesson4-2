import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <header>
        <div className="container-box">
          <div className='left'>
            <h3>Start Bootstrap</h3>
            
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
              </ul>
        
          </div>
          <div className='right'>
            <div className="btn border-dark chart">Chart <span>0</span></div>
          </div>
        </div>
      </header>

      <div className="dark-box">
       <div>
       <h2 className="text-center">Shop in Style</h2>
        <p className="text-center">With this shop hompeage template</p>
       </div>
      </div>

      <section className="main">
        <div className="row">

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Fancy Product</h5>
              <p class="card-text">$40.00 - $80.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div className="sale">Sale</div>
            <div class="card-body">
              <h5 class="card-title">Special Item</h5>
              <p class="card-text saletext"><span>$20.00</span>$18.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div className="sale">Sale</div>
            <div class="card-body">
              <h5 class="card-title">Sale Item</h5>
              <p class="card-text saletext"><span>$50.00</span>$25.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Popular Item</h5>
              <p class="card-text">$40.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div className="sale">Sale</div>
            <div class="card-body">
              <h5 class="card-title">Sale Item</h5>
              <p class="card-text saletext"><span>$50.00</span>$25.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Fancy Product</h5>
              <p class="card-text">$120.00 - $280.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div className="sale">Sale</div>
            <div class="card-body">
              <h5 class="card-title">Special Item</h5>
              <p class="card-text saletext"><span>$20.00</span>$18.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

          <div className="col mt-5">
          <div class="card">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Popular Item</h5>
              <p class="card-text">$40.00</p>
              <a href="#" class="btn border-dark">Add to cart</a>
            </div>
          </div>
          </div>

        </div>
      </section>

      <footer>
        <p>Copyright © Your Website 2023</p>
      </footer>
      
    </div>
  );
}

export default App;
