import React from 'react';


function App() {
  return (
    
    <div className="TOP">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="">DOG FOOD</a>
          </li>
          <li class="nav-item">
            <a href="https://www.purina.com/pro-plan/dogs" target="_blank" class="btn btn-dark" role="button">Pro Plan</a>
          </li>

          <li class="nav-item">
            <a href="https://www.propacultimates.com/" target="_blank" class="btn btn-dark" role="button">Pro Pac</a>
          </li>
          
          <li class="nav-item">
            <a href="https://nutrisourcepetfoods.com/homepage" target="_blank" class="btn btn-dark" role="button">NutriSo</a>
          </li>
          <li class="nav-item">
            <a href="https://www.sportmix.com/" target="_blank" class="btn btn-dark" role="button">SportMix</a>
          </li>

        </ul>
      </nav>

      <div class="jumbotron text-center">
        <h1>Top Dog Food Of The Market</h1>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h3>Purina Pro Plan</h3>
            <img src=" https://www.purina.com/sites/g/files/auxxlc196/files/SPORT_ALS_PERF3020_ChknRc_F_18.png" class="rounded-circle" alt="Cinque Terre" width="209" height="229"></img>
            <p>Lorem ipsum dolor..</p>
           
          </div>
          <div class="col-sm-4">
            <h3>Pro Pac</h3>
            <img src="https://www.propacultimates.com/wp-content/uploads/2014/06/packaging-web1.png" class="rounded-circle" alt="Cinque Terre"width="209" height="229"></img>
            <h5>Guaranteed Analysis</h5>
            <p>PRO PAC® Ultimates™ Puppy Chicken Meal & Brown Rice Formula is scientifically formulated for puppy’s first year of growth. A growing puppy needs twice the amount of nutrients as an adult dog. The increased level of nutrients provides extra calories for energy and growth and more protein to form muscles, organs and strong bones. PRO PAC® Ultimates™ Puppy Chicken Meal & Brown Rice Formula contains DHA which aids in healthy brain and eye development in puppies</p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
            <br></br>

          </div>
          <div class="col-sm-4">
            <h3>NutriSource</h3>
            <img src="https://cdn.nutrisourcepetfoods.com/home/1.png" class="rounded-circle" alt="Cinque Terre" width="209" height="229"></img>
            <p>Lorem ipsum dolor..</p>

          </div><div class="col-sm-4">
            <h3>SportMix</h3>

            <img src="https://petentregapanama.vteximg.com.br/arquivos/ids/159746-292-292/Sportmix-High-Protein.png?v=636899843853130000" class="rounded-circle" alt="Cinque Terre" width="209" height="229"></img>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
      </div>
      
    </div>


  );
}

export default App;