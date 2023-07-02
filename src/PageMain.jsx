import Nav from "./component/Nav";
import crip1 from "./assets/crip1.mp4";
import crip2 from "./assets/crip2.mp4";
import "./PageMain.css";
import { useData } from "./fordata/DataProvider";

export default function PageMain() {
  const { tab } = useData();

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex">
        <video
          src={crip1}
          className="video-main"
          controls
          autoPlay
          loop
        ></video>
      </div>
      <div className="box-main mt30px">
        <div className="box-head-main w flex">
          <h2>Welcome to Pottery Doll Shop</h2>
        </div>
        <div className="content-main">
          <p className="mb60px">
            We are an online store that specializes in creating modern and
            unique phone cases and hair accessories. Each of our products is
            meticulously crafted with the utmost attention to detail, catering
            to the desires and tastes of customers who appreciate beauty and the
            highest quality in phone cases and hair accessories.
          </p>
          <h3 className="mb60px">Our services include:</h3>
          <h4>Handcrafted Phone Cases:</h4>
          <p className="font-wl">
            We prioritize quality and craftsmanship in every piece of phone case
            we produce. Our team of skilled artisans employs cutting-edge
            techniques to create the finest works of art that truly meet your
            needs.
          </p>
          <br />
          <h4>Stylish and Modern Hair Accessories:</h4>
          <p className="font-wl">
            We offer the best hair accessories to help you create a distinctive
            and impressive look. With beautiful designs and high-quality
            materials, you can find hair accessories that perfectly match your
            style and personality.
          </p>
          <br />
          <h4>Customizable Screen Printing:</h4>
          <p className="font-wl">
            Add personalization to your phone cases and hair accessories with
            our customizable screen printing services. Whether you want to
            design your own artwork or choose an image, we will fulfill your
            requests and create a customized product just for you.
          </p>
          <p className="font-wl m60px">
            Visit our online store today to explore and purchase the best and
            most contemporary phone cases and hair accessories for your devices.
          </p>
          <div className="flex w mb60px">
            <p className="font-wn">
              If you have any questions regarding our products :
            </p>
            <button
              className="ml30px flex btn-goContact"
              title="Please click to receive communication channels."
            >
              Click to connect to our communication channels.
            </button>
          </div>
          <p>
            <i>
              Thank you for choosing our services, and we hope to be a part of
              enhancing the uniqueness and beauty of your phone devices and hair
              accessories soon!
            </i>
          </p>
        </div>
      </div>
      <div className="w flex forbg-color">
        <div className="w80 flex J-start m60px">
          <video src={crip2} className="vide-mainend" controls></video>
          <ul className="forul-main box-mainend w flex for-col">
            <li className="one">
              <p className="font-wl font-14px mr5px">
                This is a made-to-order product, and it takes 7-14 days to
                complete.
              </p>
            </li>
            <li className="one">
              <p className="font-wl font-14px mr5px">
                There is no refund policy once the payment for the product has
                been made
              </p>
            </li>
            <li className="one">
              <p className="font-wl font-14px mr5px">
                We provide shipping services both domestically and
                internationally.
              </p>
            </li>
            <li className="one">
              <h5 className="j-start font-wl font-14px">
                Our store operates 24 hours a day.
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
