import React, { useState, useEffect } from "react";
import MealList from "./component/MealList";
// import styled from "styled-components";
import axios from "axios";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState('');
  const [veggies, setVeggies] = useState([]);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=88cbb41354b04d13858d7f377e338113&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  const getVeggies = async () => {
    const getData = localStorage.getItem("veggies");

    if (getData && getData !== "undefined") {
      setVeggies(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=f4655fef843648ce99be508674c4a22b&tags=vegetarian&number=5`
      );
      const data = await resp.json();
      setVeggies(data.recipes);
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getVeggies();
  }, []);

  // function  getRes() {
    
    // axios.get("https://api.spoonacular.com/recipes/715538/similar?apiKey=88cbb41354b04d13858d7f377e338113")
    // fetch(`https://api.spoonacular.com/recipes/random?apiKey=f4655fef843648ce99be508674c4a22b&tags=vegetarian&number=10`)

    // .then((response) => response.json())
      // .then((data) => {
        // setVeggies(data);
      // })
     
  // }
  // useEffect(() => {
    // getVeggies();
  // }, []);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <body>

      {/* <!-- ======= Top Bar ======= --> */}

      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">

          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center"><span>+212 642 5837 17</span></i>
          </div>
        </div>
      </div>

      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
              <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
          {/* <div className="d-flex col-4">
            <div class="input-group ">
              <input id="dark" type="number"
                class="form-control d-none d-lg-flex"
                placeholder="Calories (2000)"
                //  value="Calories (2000)"
                onChange={handleChange}
                aria-label="Recipient's Search" aria-describedby="Search" />

              <button onClick={getMealData} class="btn btn-warning col-6" type="button" id="Search">Get Daily Meal Plan</button>
            </div>
          </div> */}

          {/* <input type="search" placeholder="search" className="book-a-table-btn scrollto d-none d-lg-flex"/> */}

        </div>
      </header>
      {/* // <!-- End Header -->  */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>

              <div className="btns">
                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                <div class="input-group my-5">
  <input type="number" onChange={handleChange} class="form-control" placeholder="Calories (2000)"/>
  <button onClick={getMealData} class="btn btn-warning col-6" type="button">Get Daily Meal Plan</button>
</div>
              </div>
            </div>
             <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="" className="glightbox play-btn"></a>
        </div> 

          </div>
        </div>
      </section>
      {/* // <!-- End Hero -->  */}

      <main id="main">

      {veggies.map(({ title, id, image }) => (
          <div key={id}>
            <Card>
              <a htef={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
              </a>
              </Card>
          </div>
        ))}
      {mealData && <MealList mealData={mealData} />}

        {/* <!-- ======= Menu Section ======= --> */}
        {/* <section id="menu" className="menu section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Menu</h2>
              <p>Check Our Tasty Menu</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-starters">Starters</li>
                  <li data-filter=".filter-salads">Salads</li>
                  <li data-filter=".filter-specialty">Specialty</li>
                </ul>
              </div>
            </div>

            <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Lobster Bisque</a><span>$5.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Bread Barrel</a><span className=""><i id="right" className="bx bx-chevron-right"></i></span>
                </div>
                <div className="menu-ingredients">
                  Preparation time : 14 minutes
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/cake.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Crab Cake</a><span>$7.95</span>
                </div>
                <div className="menu-ingredients">
                  A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Caesar Selections</a><span>$8.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Tuscan Grilled</a><span>$9.95</span>
                </div>
                <div className="menu-ingredients">
                  Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Mozzarella Stick</a><span>$4.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

            </div>

          </div>
        </section> */}
        {/* <!-- End Menu Section -->  */}

        {/* <!-- ======= Specials Section ======= --> */}
        <section id="specials" className="specials">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Specials</h2>
              <p>Check Our Specials</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Architecto ut aperiam autem id</h3>
                        {/* <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p> */}
                        <p>wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        {/* <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p> */}
                        <p>Dinner Tonight: Chickpea Bruschetta requires around <b>45 minutes</b> from start to finish. One serving contains <b>341 calories</b>, <b>4g of protein</b>, and <b>30g of fat</b>. This recipe serves 2. For <b>$1.24 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. A mixture of balsamic vinegar, basil leaves, olive paste, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is a <b>reasonably priced</b> recipe for fans of Mediterranean food. It is brought to you by Serious Eats. 1 person found this recipe to be flavorful and satisfying. It is a good option if you're following a <b>dairy free</b> diet. Only a few people really liked this hor d'oeuvre. Taking all factors into account, this recipe <b>earns a spoonacular score of 65%</b>, which is good.</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-2.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                        {/* <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p> */}
                        <p>Dinner Tonight: Pasta with Pork Loin, Chinese Eggplant, Baby Bok Choy, and Spicy Miso Sauce is a Chinese recipe that serves 2. Watching your figure? This dairy free recipe has <b>759 calories</b>, <b>34g of protein</b>, and <b>33g of fat</b> per serving. For <b>$2.76 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. 56 people found this recipe to be scrumptious and satisfying. It works well as a main course. It is brought to you by Serious Eats. If you have sugar, mirin, eggplant, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 91%</b>. This score is amazing. Similar recipes include .</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="9751-556x370.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                        <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                        <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="206706-556x370.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                        <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                        <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-5.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        {/* <!-- End Specials Section -->  */}


      </main>
      {/* // <!-- End #main -->  */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Restaurantly</h3>
                  <div className="social-links mt-3">
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      {/* <!-- End Footer -->  */}

      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </body>
  );

}
// https://chat.openai.com/share/1a6678f1-671b-4ec5-a933-ebd9a7cd83a1
const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;



export default App;
