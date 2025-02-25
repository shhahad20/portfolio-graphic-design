import { useEffect, useState } from "react";
import "../styles/about.scss";

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation on enter
        } else {
          setIsVisible(false); // Reset animation when leaving the viewport
        }
      },
      {
        threshold: 0.5, // 50% of the element needs to be in view to trigger
        rootMargin: "0px 0px -50px 0px", // Small margin at the bottom to trigger earlier
      }
    );

    const element = document.querySelector(".services-container");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <div className={`services-container ${isVisible ? "visible" : ""}`}>
      <div id="services-text-container">
        <h1>
          What can I <span className="it">help you</span> with?
        </h1>
        <p>
          Every project is unique and deserves a personalized approach. Let's
          take the time to talk through your goals and needs. Together, we can
          define your vision and choose the most effective solutions to bring it
          to life.
        </p>
      </div>

      <div className="services-crads-container">
        <div className="cards-grid">
          <div className="card">
            <div className="card-content">
              <div className="card-icon">
                <svg
                  width="8"
                  height="20"
                  viewBox="0 0 8 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.05847 19.0893L1.14341 19.3114L1.36943 19.2377C5.2605 17.9696 7.12591 15.3322 7.12591 13.4148C7.12591 12.5163 6.86446 11.8307 6.40528 11.3694C5.94685 10.9089 5.32083 10.7017 4.64964 10.7017C2.86646 10.7017 1.88139 11.9612 1.88139 13.2413C1.88139 13.7497 2.05676 14.2216 2.38893 14.5679C2.72276 14.9159 3.20042 15.1218 3.77372 15.1218C4.01708 15.1218 4.3322 15.0873 4.65936 14.9936C4.26692 16.1464 3.02157 17.3038 0.921389 17.9995L0.673015 18.0818L0.766503 18.3261L1.05847 19.0893ZM2.40693 3.53243C2.40693 4.05147 2.60843 4.50281 2.97084 4.82158C3.33064 5.13806 3.83116 5.30882 4.40876 5.30882C5.17992 5.30882 5.88886 4.95284 6.4017 4.43724C6.91336 3.92284 7.25 3.22912 7.25 2.52639C7.25 2.01148 7.06059 1.55941 6.70118 1.23848C6.34432 0.919836 5.84225 0.75 5.24818 0.75C4.47702 0.75 3.76808 1.10599 3.25523 1.62159C2.74358 2.13599 2.40693 2.8297 2.40693 3.53243Z"
                    fill="#1E1E1E"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <div>
                <h2>Custom Design Solutions</h2>
                <p>
                  Tailored designs that reflect your unique brand identity,
                  ensuring a standout and professional look.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon">
                <svg
                  width="8"
                  height="20"
                  viewBox="0 0 8 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.05847 19.0893L1.14341 19.3114L1.36943 19.2377C5.2605 17.9696 7.12591 15.3322 7.12591 13.4148C7.12591 12.5163 6.86446 11.8307 6.40528 11.3694C5.94685 10.9089 5.32083 10.7017 4.64964 10.7017C2.86646 10.7017 1.88139 11.9612 1.88139 13.2413C1.88139 13.7497 2.05676 14.2216 2.38893 14.5679C2.72276 14.9159 3.20042 15.1218 3.77372 15.1218C4.01708 15.1218 4.3322 15.0873 4.65936 14.9936C4.26692 16.1464 3.02157 17.3038 0.921389 17.9995L0.673015 18.0818L0.766503 18.3261L1.05847 19.0893ZM2.40693 3.53243C2.40693 4.05147 2.60843 4.50281 2.97084 4.82158C3.33064 5.13806 3.83116 5.30882 4.40876 5.30882C5.17992 5.30882 5.88886 4.95284 6.4017 4.43724C6.91336 3.92284 7.25 3.22912 7.25 2.52639C7.25 2.01148 7.06059 1.55941 6.70118 1.23848C6.34432 0.919836 5.84225 0.75 5.24818 0.75C4.47702 0.75 3.76808 1.10599 3.25523 1.62159C2.74358 2.13599 2.40693 2.8297 2.40693 3.53243Z"
                    fill="#1E1E1E"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <div>
                <h2>Creative Branding</h2>
                <p>
                  We develop distinctive branding elements, to give your
                  business a cohesive and memorable identity.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon">
                <svg
                  width="8"
                  height="20"
                  viewBox="0 0 8 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.05847 19.0893L1.14341 19.3114L1.36943 19.2377C5.2605 17.9696 7.12591 15.3322 7.12591 13.4148C7.12591 12.5163 6.86446 11.8307 6.40528 11.3694C5.94685 10.9089 5.32083 10.7017 4.64964 10.7017C2.86646 10.7017 1.88139 11.9612 1.88139 13.2413C1.88139 13.7497 2.05676 14.2216 2.38893 14.5679C2.72276 14.9159 3.20042 15.1218 3.77372 15.1218C4.01708 15.1218 4.3322 15.0873 4.65936 14.9936C4.26692 16.1464 3.02157 17.3038 0.921389 17.9995L0.673015 18.0818L0.766503 18.3261L1.05847 19.0893ZM2.40693 3.53243C2.40693 4.05147 2.60843 4.50281 2.97084 4.82158C3.33064 5.13806 3.83116 5.30882 4.40876 5.30882C5.17992 5.30882 5.88886 4.95284 6.4017 4.43724C6.91336 3.92284 7.25 3.22912 7.25 2.52639C7.25 2.01148 7.06059 1.55941 6.70118 1.23848C6.34432 0.919836 5.84225 0.75 5.24818 0.75C4.47702 0.75 3.76808 1.10599 3.25523 1.62159C2.74358 2.13599 2.40693 2.8297 2.40693 3.53243Z"
                    fill="#1E1E1E"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <div>
                <h2>Collaborative Process</h2>
                <p>
                  We work closely with you to capture your vision, ensuring the
                  final design aligns with your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
