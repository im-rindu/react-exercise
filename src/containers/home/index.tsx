import { Banner, Content, Portfolio } from '../../components';

function Home() {
  // data dummy
  const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  const work = [
    {title: "Decodable.co", work:"Brand Design - Webflow Development - Web Design", link: "#"}, 
    {title: "Gofirefly.io", work:"Brand Design - Webflow Development - Web Design", link: "#"}, 
    {title: "Blinkops.com", work:"Brand Design - Webflow Development - Web Design", link: "#"}, 
    {title: "Withkanvas.com", work:"Brand Design - Webflow Development - Web Design", link: "#"}]
  const review = [
    {review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Ayush Raj", job: "VP of Marketing @ Webflow", image: "/images/reviewer-1.png"},
    {review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Alex Cattoni", job: "Founder @ CopyPossy", image: "/images/reviewer-2.png"},]
  const portfolio = [
    {image: "/images/portfolio(1).png"},
    {image: "/images/portfolio(7).png"},
    {image: "/images/portfolio(3).png"},
    {image: "/images/portfolio(4).png"},
    {image: "/images/portfolio(2).png"},
    {image: "/images/portfolio(6).png"},
    {image: "/images/portfolio(7).png"},
    {image: "/images/portfolio(3).png"}];
  return(
    <>
      <header>
        <Banner />
      </header>
      <Content contentTitle="About" contentType="about" content={about} />
      <Content contentTitle="Recent Work" contentType="work" content={work} />
      <Portfolio content={portfolio} />
      <Content contentTitle="Testimonials" contentType="review" content={review} />
    </>
  )
}

export default Home;