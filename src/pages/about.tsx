import ImageSlider from "../components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.scss'
import image1 from "../utils/ut1.jpg"
import image2 from "../utils/ut2.jpg"
import image3 from "../utils/ut3.jpg"
import discord from "../utils/discord5.png"
function About() {
    return (
    <div>
        <header>
            
        <div className="page">
            <div className="slider-container">
                <ImageSlider/> 
            </div> 
			<div className="right-container">
				
			
            <div className="text-container">
				
                <h4>Вас вітає Metrostroi Coop</h4>
                <div className="small-text">
                    <p>Ми завжди раді бачити нових гравців на нашому сервері! Приєднуйся до нашого Discord серверу. де ти зможеш отримати підтримку від нашої команди (посилання). Не зволікай! Ми чекаємо
                    саме на тебе.</p>
                    <p>Підтримка російською мовою не надається. Вс дані, форми, повідомлення й т.п. мовою загарбника будуть ігноруватись</p>
                </div> 
            
			
			</div>
			<a className = "discordLink" href="https://discord.gg/YRs6swRh4f"><img src={discord} alt="discordlink"/></a> 
        </div>
		
        </div>
        </header>
        <div className="main">
			<div className="page">
			<div className="home-block clearfix" >
	        		<h1 className="home-headline">FEATURED WORK </h1>
	        		
	        		<div className="clearfix" >
	        			
	        			<figure>
			        		<a href="single.html"  className="thumb"><img src="src/utils/featured-1.jpg" alt="Alt text" /></a>
			        		<figcaption>
	        					<strong>Pellentesque habitant morbi</strong>
	        					<span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
			        		</figcaption>
		        		</figure>
		        		
		        		<figure>
			        		<a href="single.html"  className="thumb"><img src="img/dummies/featured-2.jpg" alt="Alt text" /></a>
			        		<figcaption>
	        					<strong>Pellentesque habitant morbi</strong>
	        					<span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
			        		</figcaption>
		        		</figure>
		        		
		        		<figure>
			        		<a href="single.html"  className="thumb"><img src="img/dummies/featured-3.jpg" alt="Alt text" /></a>
			        		<figcaption>
	        					<strong>Pellentesque habitant morbi</strong>
	        					<span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
			        		</figcaption>
		        		</figure>
		        		
		        		<figure>
			        		<a href="single.html"  className="thumb"><img src="img/dummies/featured-1.jpg" alt="Alt text" /></a>
			        		<figcaption>
	        					<strong>Pellentesque habitant morbi</strong>
	        					<span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
			        		</figcaption>
		        		</figure>
		        		
		        		<figure>
			        		<a href="single.html"  className="thumb"><img src="img/dummies/featured-3.jpg" alt="Alt text" /></a>
			        		<figcaption>
	        					<strong>Pellentesque habitant morbi</strong>
	        					<span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
			        		</figcaption>
		        		</figure>
		        		
		        		<figure>
			        		<a href="single.html"  className="thumb"><img src="img/dummies/featured-2.jpg" alt="Alt text" /></a>
			        		<figcaption>
	        					<strong>Pellentesque habitant morbi</strong>
	        					<span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
			        		</figcaption>
		        		</figure>
		        		
	        		</div>
	        		
	        		<a href="work.html" className="theme-link-button">See All Work</a>
	        		
	        	</div>
        </div>
			</div>
            
    </div>
    
        
    )
}

export default About;