/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/software-engineer.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Next Inovation Marketing - Web Design",
    description:
      "Delivered a tailored, dynamic website fulfilling the unique requirements of a new digital marketing agency.",
    url: "https://www.nextinnovationmarketing.org/",
  },
  {
    title: "MyTopBonus.com - CopyWriting and SEO",
    description:
      "Elevated website visibility, blending copywriting and SEO techniques to inform and engage the target audience effectively.",
    url: "https://mytopbonus.com/",
  },
  {
    title: "NFT Project - Digital Marketing",
    description:
      "Crafted a strategic campaign amplifying anticipation and engaging the fanbase, boosting awareness for the successful NFT project launch.",
    url: "https://twitter.com/fomoraora",
  },
  {
    title: "Google Data Analytics Certificate",
    description:
      "Completed Google Data Analytics Certificate, mastering the entire data analysis lifecycle with hands-on experience in data analysis.",
    url: "https://www.credly.com/badges/6a4eb728-36ff-4d64-b1fa-5eb1e0240f87/linked_in_profile",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
