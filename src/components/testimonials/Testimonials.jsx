import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Aayush Dadich",
      title: "Senior Developer",
      img:
        "https://i.ibb.co/3pprdqX/Screenshot-2022-01-06-12-44-51-26.jpg",
      icon: "assets/twitter.png",
      desc:
        "Being successful is about professionalism, and chewing gum is unprofessional. Its also a huge pet peeve of mine.",
    },
     
    {
      id: 2,
      name: "Karan Swarnkar",
      title: "Senior Dot-net Developer",
      img:
        "https://i.ibb.co/YZ4gtkG/Screenshot-2022-01-06-12-20-33-92.jpg",
      icon: "assets/youtube.png",
      desc:
        "Mahesh is quite good in the Profession and enthusiastic to discover new things.",
      featured: true,
    },
    {
      id: 3,
      name: "Rajveer Singh",
      title: "Front-end Developer",
      img:
        "https://i.ibb.co/Cm5BYSL/Screenshot-2022-01-06-12-11-06-71.jpg",
      icon: "assets/linkedin.png",
      desc:
        "  He is quite elegant to make UI and he knows to make things simple",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
