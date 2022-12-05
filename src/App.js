import image from './image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside class="profile-card">
        <header>
          <a href="https://t.me/ComradePetrov">
            <img src={image} class="hoverZoomLink" alt="telegram_picture" />
          </a>
          <h1>
            Mels Tovmasyan
          </h1>
          <h2>
            Systems Engineer
          </h2>

        </header>
        <div class="profile-bio">
          <p>
            Skilled DevOps Engineer with 3+ years of hands-on experience supporting, automating, and optimizing
            mission critical deployments in AWS, leveraging configuration management, CI/CD, and DevOps processes.
          </p>
        </div>

        <ul class="profile-social-links">
          <li>
            <a class="zoom" href="https://t.me/ComradePetrov">
              <i class="fa fa-telegram"></i>
            </a>
          </li>
          <li>
            <a class="zoom" href="https://www.linkedin.com/in/mels-tovmasyan/">

              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a class="zoom" href="https://github.com/mels-tovmasyan/">
              <i class="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
