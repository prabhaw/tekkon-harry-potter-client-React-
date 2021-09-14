import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="bgimage">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-6 col-md-18 col-sm-12 col-xs-12 position-relative text-light">
              <div className="hero-word">
                <h2>HARRY POTTER STORY</h2>
                <h5>
                  Harry Potter is a series of seven fantasy novels written by
                  British author J. K. Rowling. The novels chronicle the lives
                  of a young wizard, Harry Potter, and his friends Hermione
                  Granger and Ron Weasley, all of whom are students at Hogwarts
                  School of Witchcraft and Wizardry.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
