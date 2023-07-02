import Nav from "./component/Nav";
import "./Contact.css";
import { useData } from "./fordata/DataProvider";

export default function Contact() {
  const { tab } = useData();
  const datacontact = [
    [
      "Line",
      `https://www.mvitaclinic.com/wp-content/uploads/2019/12/Line-Transparent-Icon-270x270.png`,
      `https://line.me/ti/p/y3d-lYj61Z`,
    ],
    [
      "Intragram",
      `https://images.squarespace-cdn.com/content/v1/5e1448d05922ba434116d125/1580991737219-4K2ZP8VRH8HXXDQINDX1/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/Instagram.png`,
      `https://www.instagram.com/afterideashop/`,
    ],
    [
      "Facebook",
      `https://www.360psg.com/content/images/landing_pages/socialicon5.png`,
      `https://www.facebook.com/casesupersale`,
    ],
    [
      "Shopee",
      `https://logodix.com/logo/2015085.png`,
      `https://shopee.co.th/casediy?smtt=0.4441327-1663186893.4`,
    ],
    [
      "Lazada",
      `https://www.flowenergytools.com/wp-content/uploads/2021/02/Artboard-3.png`,
      `https://www.lazada.co.th/shop/thaiclay?spm=a211g0.store_hp.more_popup.share_this_store&dsource=share&laz_share_info=361770999_2_200_100032285288_351625367_null&laz_token=3f85e6016d78017ba5e34aae12065148&exlaz=e_78%2FCXAnZy6HGip8qo24MCSTeQCjDld4siVQ4kY1ODqrCXvTKdNAtBfrYHUpbt8xr6nejNh6YiYbO7MSdVRSDSLcazjqFN96eD3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=361770999&sub_id3=100032285288&sub_id6=CPI_EXLAZ`,
    ],
  ];
  return (
    <div className="w flex flex-col">
      <Nav />
      <div className="flex flex-col a-start box-contact mt15px">
        <h1 className="mb5px">Pottery Doll Shop</h1>
        <p className="mb5px">
          Pottery Doll Shop is pleased to offer our services. Please feel free
          to contact us for inquiries using the following information :{" "}
        </p>
        <div className="grid-contact w">
          {datacontact.map((item) => {
            return (
              <div
                className="flex box-item-contact between mt15px"
                key={item[0]}
              >
                <div className="flex flex-col">
                  <h2>
                    {item[0]} :{tab()}
                  </h2>
                  <a href={item[2]} target="_blank" rel="noreferrer">
                    <button className="btn-contact">
                      Click to open {item[0]}
                    </button>
                  </a>
                </div>
                <a href={item[2]} target="_blank" rel="noreferrer">
                  <img
                    className="cursor icon-contact"
                    src={item[1]}
                    alt={item[0]}
                    title={item[0]}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
