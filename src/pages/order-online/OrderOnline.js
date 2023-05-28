import HeroImage from "../../assets/images/food4.webp";

export const OrderOnline = () => {
    return (
      <>
        <header className="reserve-table">
          <img
            className="header-reserve"
            src={HeroImage}
            alt="Little Lemon Ingredients"
          ></img>
          <div className="reserve-header-text">
            <h1>Order Online</h1>
          </div>
        </header>
      </>
    );
  }

