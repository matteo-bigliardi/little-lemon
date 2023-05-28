import GreekSalad from '../../assets/images/greek-salad.webp';
import Bruschetta from '../../assets/images/bruschetta.jpeg';
import LemonDessert from '../../assets/images/lemon-dessert.webp';
import { Card } from '../../Components';

export const Specials = () => {
    return (
      <>
        <section className="specials">
          <article className="specials-topbar">
            <h1>This weeks specials</h1>
            <a className="action-button" href={require('../../assets/images/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
          </article>

          <article className="specials-cards">
            <Card image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
              Dressed with salt, hot pepper, and olive oil."/>
            <Card image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
              salt and olive oil."/>
            <Card image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
              and lemon zest."/>
          </article>
        </section>
      </>
    );
  }

